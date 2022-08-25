/**
 * Author: Meng
 * Desc: 
 */
 export default class Row extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: row;
        }
      </style>
      <slot></slot>
    `;
  }
}
// let the browser know about the custom element
if (!customElements.get('s-row')) {
  customElements.define('s-row', Row);
}
