/**
 * Author: Meng
 * Desc: 
 */
 export default class Switch extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
      :host {
        display:inline-block; 
        -webkit-tap-highlight-color: transparent;
      }
      label {
        cursor: pointer;
        display: flex;
        width: 2.4em;
        height: 1.2em;
        padding: 0.125em;
        border-radius: 1.2em;
        background: #eee;
        transition: 0.3s width, 0.3s height, 0.3s background-color;
      }
      label::before {
        content: "";
        flex: 0;
        transition: 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) flex;
      }
      label::after {
        content: "";
        width: 0.4em;
        height: 0.4em;
        border-radius: 1.2em;
        border: 0.4em solid #fff;
        background: #fff;
        transition: 0.3s background, 0.3s padding, 0.3s width, 0.3s height,
          0.3s border-radius, 0.3s border;
        box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
      }
      </style>
      <input type="checkbox"><label></label></input>
    `;
  }
}
// let the browser know about the custom element
if (!customElements.get('s-switch')) {
  customElements.define('s-switch', Switch);
}
