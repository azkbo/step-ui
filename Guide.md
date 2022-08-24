# Web Components

## 基础语法


#### 使用槽 (slot) 创建一个模板

### 生命周期回调

定义在自定义元素的类定义中的特殊回调函数，影响其行为：

connectedCallback：当自定义元素第一次被连接到文档 DOM 时被调用。
disconnectedCallback：当自定义元素与文档 DOM 断开连接时被调用。
adoptedCallback：当自定义元素被移动到新文档时被调用。
attributeChangedCallback：当自定义元素的一个属性被增加、移除或更改时被调用。

// 注意如果需要在元素属性变化后，触发 attributeChangedCallback 函数。可以通过 observedAttributes() 函数,返回一个包含了需要监听的属性名称数组;
static get observedAttributes() {return ['w', 'l']; } 
```
class Column extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // const container = document.createElement('div');
    // container.classList.add('s-layout');
    // container.innerHTML = `
    //   <style>
    //     :host {
    //       display: flex;
    //       background-color: violet;
    //     }
    //   </style>
    //   <slot></slot>
    // `;
    // shadow.appendChild(container);

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

  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback(e) {}
  static get observedAttributes() {return ['your', 'name'];} 
}

if (!customElements.get('s-column')) {
  customElements.define('s-column', Column);
}
```