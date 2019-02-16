import React, {useCallback, useEffect, useState} from 'react';
import scrollToView from './scrollToView';
import NavItems from './NavItems';

const navStickyStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
};

const NavItemCons = {
  home: 'Home',
  personal: 'Personal',
  resume: 'Resume',
  skills: 'Skills',
  portfolio: 'Portfolio',
  contact: 'Contact',
};

export default () => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const [curArea, setCurArea] = useState<string>('#home');

  const judgeHightLight = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const appEl = document.querySelector('#app') as HTMLElement;
    const {
      home,
      personal,
      resume,
      skills,
      portfolio,
      contact,
    } = appEl.children as any; // HTMLElement
    if (currentScrollPos >= contact.offsetTop) {
      setCurArea('#contact');
    } else if (currentScrollPos >= portfolio.offsetTop) {
      setCurArea('#portfolio');
    } else if (currentScrollPos >= skills.offsetTop) {
      setCurArea('#skills');
    } else if (currentScrollPos >= resume.offsetTop) {
      setCurArea('#resume');
    } else if (currentScrollPos >= personal.offsetTop) {
      setCurArea('#personal');
    } else if (currentScrollPos >= home.offsetTop) {
      setCurArea('#home');
    }
  }, []);

  const scrollEvent = useCallback(() => {
    if (
      window.pageYOffset >=
      (document.querySelector('#home') as Element).clientHeight
    ) {
      setSticky(true);
    } else {
      setSticky(false);
    }
    judgeHightLight();
  }, []);
  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);
  const locate = useCallback(scrollToView, []);
  return (
    <div id="nav" style={isSticky ? navStickyStyle : undefined}>
      <ul>
        <NavItems itemCons={NavItemCons} onClick={locate} curArea={curArea} />
      </ul>
    </div>
  );
};
