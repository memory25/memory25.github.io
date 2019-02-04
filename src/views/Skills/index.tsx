import React from 'react';

export default () => (
  <div id="skills">
    <div className="title">Skills & Tools</div>
    <div className="main">
      <div className="card">
        <h3>Javascript</h3>
        <ul>
          <li>熟悉 ES6, AJAX</li>
          <li>
            了解event loop、 event propagation、 new 、
            prototype、hoisting、curry、closure...
          </li>
          <li>使用Restful API與後端溝通</li>
        </ul>
      </div>

      <div className="card">
        <h3>React</h3>
        <ul>
          <li>熟悉 Lifecycle</li>
          <li>了解React Hooks</li>
          <li>了解React Events</li>
          <li>使用過Flux、Redux 管理store</li>
          <li>使用Redux-Saga 控制異步</li>
          <li>使用React-Router 進行路由控制建立SPA頁面</li>
        </ul>
      </div>

      <div className="card">
        <h3>CSS</h3>
        <ul>
          <li>使用 Sass加速開發</li>
          <li>使用過 Bootstrap</li>
          <li>能不依賴framework，進行RWD客製化</li>
          <li>能手刻許多圖形，製作各種特效、動畫</li>
          <li>能99%還原設計稿</li>
        </ul>
      </div>

      <div className="card">
        <h3>Others</h3>
        <ul>
          <li>使用過jQuery</li>
          <li>使用webpack打包、Babel轉譯ES6,7成ES5</li>
          <li>略懂Babel轉換、AST樹，曾寫過小plugin</li>
          <li>使用vscode 開發</li>
          <li>使用ESLint 搭配 Prettier確保代碼風格</li>
          <li>嘗試摸索Typescript中</li>
        </ul>
      </div>
    </div>
  </div>
);
