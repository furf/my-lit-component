import {LitElement, html, customElement, property, css} from 'lit-element';
import './my-button';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property()
  name = 'Mondo';

  @property({type: Number})
  count = 0;

  render() {
    return html`
      <h1>Ciao, ${this.name}!</h1>
      <my-button @clickety-click=${this.onClick}>
        Click Count: ${this.count}
      </my-button>
      <slot></slot>
    `;
  }

  private onClick() {
    this.count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
