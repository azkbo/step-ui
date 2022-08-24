/**
 * Author: Meng
 * Desc: 
 */
 class Flex extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
      </style>
      <slot></slot>
    `;
  }
}
// let the browser know about the custom element
if (!customElements.get('s-flex')) {
  customElements.define('s-flex', Flex);
}
