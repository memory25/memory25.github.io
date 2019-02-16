import React from 'react';

interface IPropsLink {
  to: string;
  content: string;
}

const Link = ({to, content}: IPropsLink) => (
  <a href={to} rel="noopener noreferrer" target="_blank">
    {content}
  </a>
);

export default () => (
  <div id="resume">
    <div className="title">Resume</div>
    <div className="main">
      <div className="row">
        <h2>神準科技 2017/11/27 - Now</h2>
        <h3>Frontend engineer</h3>
        <p>
          幫助教學非前端同仁解決前端相關問題，其中一位從0基礎開始成功建立
          <Link to="https://www.emplustech.com/" content="公司網站" />
        </p>

        <h3>專案4 AWS Web 2018/12 - Now</h3>
        <p>負責 新的頁面、特效，以及網站整體layout結構</p>
        <p>協作人員: 前端~6位、後端~5位、PM、UI design </p>
        <p>使用 ES6、React、Flux、RESTful、Webpack、Sass</p>
        <p>此份為舊專案翻新，並加入新的feature</p>
        <p>主管答應讓我使用 React-Hooks</p>

        <h3>專案3 Embedded Web 2018/6 - 2019/2</h3>
        <p style={{color: 'red'}}>獨立負責整份專案前端部分</p>
        <p>協作人員: 後端~5位、PM、UI design</p>
        <p>使用 ES6、React、Redux、Redux-Saga、RESTful、Webpack、Sass</p>
        <p>
          自己實作了
          <Link
            to="https://github.com/memory25/myReactForm"
            content="相關component"
          />
          處裡大量Form，避免類似的樣板代碼重複
        </p>
        <p>
          寫了一個
          <Link
            to="https://github.com/memory25/myReactForm/blob/master/myBabel.js"
            content="Babel plugin"
          />
          ，想更簡化代碼(最終沒有使用)
        </p>

        <h3>專案2 Embedded Web 2018/2 - 2018/6</h3>
        <p style={{color: 'red'}}>獨立負責整份專案前端部分</p>
        <p>協作人員: 後端~ 7位、PM、UI design</p>
        <p>使用 ES6、React、Flux、RESTful、Webpack、Sass</p>

        <h3>專案1 AWS Web 2017/12</h3>
        <p>
          負責其中一個頁面，使用React、Flux、RESTful、Sass，並且串接Google Map
          API
        </p>
      </div>
      <div className="row">
        <h2>接觸前端 2017/6 - 2017/10</h2>
        <h3>積極自學</h3>
        <p>
          學習React，並實作出
          <Link
            to="https://codepen.io/Xuan411/pen/zPYVoo?editors=0010"
            content="俄羅斯方塊遊戲"
          />
          - 10月
        </p>
        <p>
          加強 CSS ， 使用純 CSS 製作
          <Link to="https://memory25.github.io/cssimg/" content="各種圖片" />
          特效- 9月
        </p>
        <p>
          學習 Bootstrap ，並試著
          <Link
            to="https://memory25.github.io/GirlDolls/"
            content="快速套版建立網站"
          />
          - 9月
        </p>
        <p>
          加強原生 JS、 熟悉Sass，使用vanilla JS實作
          <Link
            to="https://memory25.github.io/snakegame/"
            content="貪食蛇遊戲"
          />
          - 8月
        </p>
        <p>
          學習 jQuery 以及 RWD知識，根據設計稿成功製作出
          <Link
            to="https://memory25.github.io/restaurant/"
            content="靜態頁面"
          />
          - 7月
        </p>
        <p>
          學習 HTML、CSS、JavaScript，並實作出一個
          <Link to="https://memory25.github.io/calculation/" content="計算機" />
          - 6月
        </p>
      </div>
      <div className="row">
        <h2>嘉義大學畢業 2017/6</h2>
        <h3>應用數學系</h3>
      </div>
    </div>
  </div>
);
