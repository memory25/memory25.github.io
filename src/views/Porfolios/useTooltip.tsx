import {useState, useCallback} from 'react';

/* eslint-disable */
const isMobile = document.hasOwnProperty('ontouchstart');
// navigator.userAgent.match(/(iphone|ipad|ipod|ios|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|Webos|symbian|windows phone)/i)
/* eslint-enable */

interface ITipOptions {
  content: string;
}

interface IFunc {
  (e: React.MouseEvent): void;
}

interface IReturn {
  onMouseEnter: IFunc | undefined;
  onMouseLeave: IFunc | undefined;
  onClick: IFunc | undefined;
}

const useTooltip = (options: ITipOptions): IReturn => {
  let tooltipDiv: Element | null = document.querySelector('#myCustomTooltip');
  const [tooltipDivMain] = useState(() => {
    const div = document.createElement('div');
    div.className = 'tooltipBlock';

    /*
    div.style.position = 'absolute';
    div.style.background = 'rgb(200, 200, 200)';
    div.style.borderRadius = '5px';
    div.style.padding = '3px';
    div.style.fontSize = '1.6rem';
    div.style.color = 'rgb(1, 22, 51)';
    */
    if (!isMobile) {
      div.style.pointerEvents = 'none';
    }
    return div;
  });

  if (!tooltipDiv) {
    tooltipDiv = document.createElement('div');
    tooltipDiv.id = 'myCustomTooltip';

    document.body.appendChild(tooltipDiv);
  }

  const open = useCallback(e => {
    tooltipDivMain.innerHTML = options.content;
    const translate = `transform: translateX(${
      e.clientX >= document.body.clientWidth - 250 ? '-100%' : 0
    })`;
    tooltipDivMain.style.cssText += `; top: ${e.pageY + 10}px; left: ${e.pageX +
      10}px; ${translate};`;
    (tooltipDiv as Element).appendChild(tooltipDivMain);
  }, []);
  const close = useCallback(() => {
    tooltipDivMain.remove();
  }, []);

  const toggle = useCallback(
    e => {
      if (!tooltipDivMain.isConnected) {
        open(e);
      } else {
        close();
      }
    },
    [tooltipDivMain.isConnected]
  );

  return {
    onMouseEnter: isMobile ? undefined : open,
    onMouseLeave: isMobile ? undefined : close,
    onClick: isMobile ? toggle : undefined,
  };
};

export default useTooltip;
