/**
 * Author: Meng
 * Desc: 
 */
 export default class Card extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          padding: 12px;
          border-radius: 8px;
          box-shadow: 2px 8px 12px 6px rgba(0, 0, 0, 0.1);
        }
      </style>
      <slot></slot>
    `;
  }
}
// let the browser know about the custom element
if (!customElements.get('s-card')) {
  customElements.define('s-card', Card);
}
