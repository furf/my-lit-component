import {LitElement, html, customElement, css} from 'lit-element';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host button {
      color: red;
    }
  `;

  render() {
    return html`
      <button @click=${this.onClick} part="button">
        <slot></slot>
      </button>
    `;
  }

  private onClick() {
    const event = new CustomEvent('clickety-click', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
