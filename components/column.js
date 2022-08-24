/**
 * Author: Meng
 * Desc: 
 */
class Column extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
        }
      </style>
      <slot></slot>
    `;
  }
}
// let the browser know about the custom element
if (!customElements.get('s-column')) {
  customElements.define('s-column', Column);
}
