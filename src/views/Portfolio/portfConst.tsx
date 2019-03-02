import restaurant from '../../images/restaurant.jpg';
import calcuimg from '../../images/calcuimg.png';
import snake from '../../images/snake.png';
import cssimg from '../../images/cssimg.png';
import girlDolls from '../../images/girlDolls.png';
import battlegame from '../../images/battlegame.png';
import purecssgame from '../../images/purecssgame.png';
import ajaxPractice from '../../images/kaohsiungdisasterquery.png';
import personv1 from '../../images/personv1-jquery.png';
import comment from '../../images/comment.png';

interface IPortf {
  [portfName: string]: {
    src: string;
    description: string;
    link: string;
    theme: string;
  };
}

interface IDescription {
  title: string;
  date: string;
  purpose: string;
  used: string;
}

const generateDes = ({title, date, purpose, used}: IDescription): string => `
  <h3>${title}</h3>
  <p>${date}</p>
  <p>${purpose}</p>
  <p style='color:red'>${used}</p>
`;

const portf: IPortf = {
  purecssgame: {
    src: purecssgame,
    description: generateDes({
      title: '沒有JS，靠CSS踩地雷',
      date: '2017/12',
      purpose: '挑戰沒有使用JS做遊戲',
      used: 'HTML、CSS、checkbox、radio',
    }),
    link: 'https://memory25.github.io/cssgame/',
    theme: 'CSS遊戲',
  },
  personal: {
    src: personv1,
    description: generateDes({
      title: 'v1舊版網站',
      date: '2017/10',
      purpose: '產出個人介紹網',
      used: 'jQuery、Sass',
    }),
    link: 'https://memory25.github.io/person-jquery/',
    theme: 'v1舊版網站，v2本站為React hooks',
  },
  battlegame: {
    src: battlegame,
    description: generateDes({
      title: '俄羅斯方塊',
      date: '2017/10',
      purpose: '練習熟悉React',
      used: 'React',
    }),
    link: 'https://codepen.io/Xuan411/pen/zPYVoo?editors=0010',
    theme: '俄羅斯方塊',
  },
  comment: {
    src: comment,
    description: generateDes({
      title: '留言板',
      date: '2017/10',
      purpose: '練習熟悉React',
      used: 'React、localStorage',
    }),
    link: 'https://codepen.io/Xuan411/pen/QqYovz',
    theme: '留言板',
  },
  cssimg: {
    src: cssimg,
    description: generateDes({
      title: 'CSS圖片',
      date: '2017/9',
      purpose: '使用Sass製作圖形，練習熟悉CSS',
      used: 'Sass(Compass)',
    }),
    link: 'https://memory25.github.io/cssimg/',
    theme: 'CSS圖片',
  },
  ajaxPractice: {
    src: ajaxPractice,
    description: generateDes({
      title: '政府開放資料',
      date: '2017/9',
      purpose: '練習串API',
      used: 'AJAX、XHR',
    }),
    link: 'https://memory25.github.io/kaohsiungdisasterquery/',
    theme: 'AJAX練習',
  },
  girlDolls: {
    src: girlDolls,
    description: generateDes({
      title: '快速建立網站',
      date: '2017/9',
      purpose: '使用Bootstrap製作網站',
      used: 'Bootstrap、HTML',
    }),
    link: 'https://memory25.github.io/GirlDolls/',
    theme: 'Bootstrap',
  },
  snake: {
    src: snake,
    description: generateDes({
      title: '貪食蛇遊戲',
      date: '2017/8',
      purpose: '練習熟悉Javascript、Sass',
      used: 'vanilla JS、Sass(Compass)、HTML',
    }),
    link: 'https://memory25.github.io/snakegame/',
    theme: '貪食蛇',
  },
  restaurant: {
    src: restaurant,
    description: generateDes({
      title: '漢堡餐廳',
      date: '2017/7',
      purpose: '根據設計稿製作RWD網站頁面，練習熟悉切版',
      used: 'jQuery、CSS、HTML',
    }),
    link: 'https://memory25.github.io/restaurant/',
    theme: '漢堡餐廳',
  },
  calcuimg: {
    src: calcuimg,
    description: generateDes({
      title: '計算機',
      date: '2017/6',
      purpose: '練習熟悉Javascript',
      used: 'vanilla JS、CSS、HTML',
    }),
    link: 'https://memory25.github.io/calculation/',
    theme: '計算機',
  },
};

export default portf;
