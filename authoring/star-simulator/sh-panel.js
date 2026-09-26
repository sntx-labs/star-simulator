(function installSHPanel() {
  "use strict";

  const prettify = (property, options = {}) => options.label || property
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .trim();
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const decimals = step => {
    const value = String(step ?? 1);
    return value.includes(".") ? value.length - value.indexOf(".") - 1 : 0;
  };

  class Control {
    constructor(object, property) {
      this.object = object;
      this.property = property;
      this.handlers = [];
    }
    on(event, handler) {
      if (event === "change" || event === "click") this.handlers.push(handler);
      return this;
    }
    emit(value) { this.handlers.forEach(handler => handler({ value })); }
    setVisible(visible) {
      this.el?.classList.toggle("sh-context-hidden", !visible);
      return this;
    }
  }

  class Slider extends Control {
    constructor(object, property, options, parent) {
      super(object, property);
      this.options = { min: 0, max: 1, step: 0.01, ...options };
      const row = document.createElement("div");
      row.className = "sh-ctrl sh-slider";
      this.el = row;
      const head = document.createElement("div");
      head.className = "sh-ctrl-head";
      const label = document.createElement("span");
      label.className = "sh-label";
      label.textContent = prettify(property, options);
      this.readout = document.createElement("span");
      this.readout.className = "sh-value";
      this.input = document.createElement("input");
      this.input.type = "range";
      this.input.min = this.options.min;
      this.input.max = this.options.max;
      this.input.step = this.options.step;
      this.input.addEventListener("input", () => {
        const value = clamp(Number(this.input.value), this.options.min, this.options.max);
        this.object[this.property] = value;
        this.refresh(value);
        this.emit(value);
      });
      head.append(label, this.readout);
      row.append(head, this.input);
      parent.appendChild(row);
      this.setValue(object[property]);
    }
    refresh(value) { this.readout.textContent = Number(value).toFixed(decimals(this.options.step)); }
    setValue(value) {
      const next = clamp(Number(value), this.options.min, this.options.max);
      this.object[this.property] = next;
      this.input.value = next;
      this.refresh(next);
      return this;
    }
  }

  class Color extends Control {
    constructor(object, property, options, parent) {
      super(object, property);
      const row = document.createElement("div");
      row.className = "sh-ctrl sh-color";
      this.el = row;
      const label = document.createElement("span");
      label.className = "sh-label";
      label.textContent = prettify(property, options);
      this.input = document.createElement("input");
      this.input.type = "color";
      this.input.addEventListener("input", () => {
        this.object[this.property] = this.input.value;
        this.emit(this.input.value);
      });
      row.append(label, this.input);
      parent.appendChild(row);
      this.setValue(object[property]);
    }
    setValue(value) {
      this.object[this.property] = value;
      this.input.value = value;
      return this;
    }
  }

  class Toggle extends Control {
    constructor(object, property, options, parent) {
      super(object, property);
      const row = document.createElement("div");
      row.className = "sh-ctrl sh-toggle";
      this.el = row;
      const label = document.createElement("span");
      label.className = "sh-label";
      label.textContent = prettify(property, options);
      const switchElement = document.createElement("label");
      switchElement.className = "sh-switch";
      this.input = document.createElement("input");
      this.input.type = "checkbox";
      const knob = document.createElement("span");
      knob.className = "sh-knob";
      this.input.addEventListener("change", () => {
        this.object[this.property] = this.input.checked;
        this.emit(this.input.checked);
      });
      switchElement.append(this.input, knob);
      row.append(label, switchElement);
      parent.appendChild(row);
      this.setValue(object[property]);
    }
    setValue(value) {
      this.object[this.property] = Boolean(value);
      this.input.checked = Boolean(value);
      return this;
    }
  }

  class Select extends Control {
    constructor(object, property, options, parent) {
      super(object, property);
      const row = document.createElement("label");
      row.className = "sh-ctrl sh-select";
      this.el = row;
      const label = document.createElement("span");
      label.className = "sh-label";
      label.textContent = prettify(property, options);
      this.input = document.createElement("select");
      const entries = Array.isArray(options.options)
        ? options.options.map(option => typeof option === "string" ? { label: option, value: option } : option)
        : Object.entries(options.options || {}).map(([labelText, value]) => ({ label: labelText, value }));
      entries.forEach(option => {
        const element = document.createElement("option");
        element.value = option.value;
        element.textContent = option.label;
        this.input.appendChild(element);
      });
      this.input.addEventListener("change", () => {
        this.object[this.property] = this.input.value;
        this.emit(this.input.value);
      });
      row.append(label, this.input);
      parent.appendChild(row);
      this.setValue(object[property]);
    }
    setValue(value) {
      this.object[this.property] = String(value);
      this.input.value = String(value);
      return this;
    }
  }

  class Button extends Control {
    constructor(title, callback, parent) {
      super(null, null);
      this.input = document.createElement("button");
      this.input.type = "button";
      this.input.className = "sh-btn";
      this.el = this.input;
      this.input.textContent = title;
      this.input.addEventListener("click", () => {
        callback?.();
        this.emit(true);
      });
      parent.appendChild(this.input);
    }
    setValue() { return this; }
  }

  class Folder {
    constructor(title, parent, options = {}) {
      this.el = document.createElement("section");
      this.el.className = `sh-folder${options.expanded === false ? " collapsed" : ""}`;
      const head = document.createElement("button");
      head.type = "button";
      head.className = "sh-folder-head";
      head.setAttribute("aria-expanded", String(options.expanded !== false));
      const arrow = document.createElement("span");
      arrow.className = "sh-arrow";
      arrow.textContent = "▾";
      const label = document.createElement("span");
      label.textContent = title;
      this.body = document.createElement("div");
      this.body.className = "sh-folder-body";
      head.append(arrow, label);
      head.addEventListener("click", () => {
        this.el.classList.toggle("collapsed");
        head.setAttribute("aria-expanded", String(!this.el.classList.contains("collapsed")));
      });
      this.el.append(head, this.body);
      parent.appendChild(this.el);
    }
    folder(title, options) { return new Folder(title, this.body, options); }
    slider(object, property, options) { return new Slider(object, property, options, this.body); }
    color(object, property, options = {}) { return new Color(object, property, options, this.body); }
    toggle(object, property, options = {}) { return new Toggle(object, property, options, this.body); }
    select(object, property, options) { return new Select(object, property, options, this.body); }
    button(title, callback) { return new Button(title, callback, this.body); }
    setVisible(visible) {
      this.el.classList.toggle("sh-context-hidden", !visible);
      return this;
    }
  }

  class SHPanel extends Folder {
    constructor(container) {
      container.classList.add("sh-panel");
      const body = document.createElement("div");
      body.className = "sh-panel-body";
      container.appendChild(body);
      super("root", document.createDocumentFragment());
      this.el = container;
      this.body = body;
      this.storageKey = container.dataset.storage || "sh-panel-collapsed";
      this.setCollapsed(true, false);
      document.addEventListener("keydown", event => {
        if (event.code !== "Backquote" || event.repeat) return;
        event.preventDefault();
        this.toggle();
      });
    }
    setCollapsed(collapsed, persist = true) {
      this.el.classList.toggle("collapsed", collapsed);
      if (persist) sessionStorage.setItem(this.storageKey, String(collapsed));
      this.el.dispatchEvent(new CustomEvent("paneltoggle", { detail: { collapsed } }));
      dispatchEvent(new Event("resize"));
    }
    toggle() { this.setCollapsed(!this.el.classList.contains("collapsed")); }
  }

  window.SHPanel = SHPanel;
})();
