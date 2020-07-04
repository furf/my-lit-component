var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
let MyButton = class MyButton extends LitElement {
    render() {
        return html `
      <button @click=${this.onClick} part="button">
        <slot></slot>
      </button>
    `;
    }
    onClick() {
        const event = new CustomEvent('clickety-click', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
};
MyButton.styles = css `
    :host button {
      color: red;
    }
  `;
MyButton = __decorate([
    customElement('my-button')
], MyButton);
export { MyButton };
//# sourceMappingURL=my-button.js.map