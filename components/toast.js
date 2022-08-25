/**
 * Author: Meng
 * Desc: 
 */

let _toast_view = null;
let _toast_timer = null;

export default class Toast extends HTMLElement {
  constructor() {
    super();

    const msg = this.msg;
    // const show = this.show;
    // const icon = this.icon;

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
        }
        .toast {
          z-index: 999;
          display: flex;
          max-width: 180px;
          padding: 10px 8px;
          border-radius: 6px;
          background-color: rgba(0, 0, 0, 0.7);
        }
        .str {
          color: #FFFFFF;
          font-size: 14px;
        }
      </style>
      <div id="toast-content" class="toast">
        <span id="msg-str" class="str">${msg}</span>
      </div>
    `;

    if (!_toast_view) {
      _toast_view = document.createElement('div');
      _toast_view.id = 's-toast-view';
      document.body.appendChild(_toast_view);
    }
  }

  get msg() {
    return this.getAttribute('msg') || '';
  }

  get show() {
    return this.getAttribute('show') || false;
  }

  get icon() {
    return this.getAttribute('icon') || '';
  }

  set msg(value) {
    this.setAttribute('msg', value);
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }

  connectedCallback() {
    this.toast_msg = this.shadowRoot.getElementById('msg-str');
    // this.toast_icon = this.shadowRoot.getElementById('msg-icon');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (name == 'icon') {
      if(!this.toast_icon) {
        // this.toast_msg = this.shadowRoot.getElementById('msg-icon');
      }
      if (newValue !== null) {
        this.toast_icon = newValue;
      }
    }
    if (name == 'msg') {
      if(!this.toast_msg) {
        this.toast_msg = this.shadowRoot.getElementById('msg-str');
        // let toastDiv = this.shadowRoot.getElementById('toast-content');
        // toastDiv.addEventListener('click', () => { },true);
      }
      if (newValue !== null) {
        this.toast_msg.innerText = newValue;
      }
    }
  }
  static get observedAttributes() { return ['icon', 'msg']; }

}
// let the browser know about the custom element
if (!customElements.get('s-toast')) {
  customElements.define('s-toast', Toast);

  window.SToast = {
    show: function ({ msg = '', duration = 2000, icon = null } = {}) {
      clearTimeout(_toast_timer);
      const toast = new Toast();
      toast.icon = icon;
      toast.msg = msg;
      _toast_view.appendChild(toast);
      
      _toast_timer = setTimeout(() => {
        clearTimeout(_toast_timer);
        toast.remove();
      }, duration);
    }
  }
}
