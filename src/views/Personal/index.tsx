import React from 'react';
import Carousel from './Carousel';
import imgList from './imgList';
import Pikachu from './Pika';

export default () => (
  <div id="personal">
    <div className="title">Personal</div>
    <div className="main">
      <Pikachu />
      <Carousel imgList={imgList} />
      <div className="aboutMe">
        <p>我是莊逸軒(Sam)，來自高雄。</p>
        <p>
          2016年畢業於嘉義大學應用數學系，在就學期間學校培養了我很多關於數理邏輯方面的思考能力，並且我也因為興趣而去選修程式相關科目，進而培養了我對程式的熱情，畢業後尤其對前端網頁特別有興趣所以積極的自學HTML5、CSS3、jQuery、RWD、SASS、JS…等開發前端相關知識。
        </p>
        <p>
          在自學期間，我為自己的學習安排許多階段，從模仿別人設計好的網頁到做出屬於自己的網站，從去觀摩別人的程式到一行一行做出屬於自己的遊戲，在實作的過程中我發現了許多細節與BUG，或許那些BUG是可以被忽略的，但我總希望可以把它做到最好而努力尋找解決的辦法，或許那些細節並不是那麼重要，但秉持著一股熱情與對自己期許，我希望自己做出的作品不是只為了應付面試與門檻，我希望自己的作品可以盡可能的細膩且完整，希望自己可以更好、更進步。
        </p>
        <p>
          對我而言網頁程式的製作就像一座富含寶藏的雄偉山嶺，我期許自己能夠秉持著熱情努力的往上攀爬，學習更多知識的寶藏，提升自己的價值並讓生活更充實精彩。
        </p>
      </div>
    </div>
  </div>
);
