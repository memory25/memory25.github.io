import React, {useState, useEffect, useCallback, useRef} from 'react';

interface IProps {
  imgList: string[];
}

function Carousel(props: IProps) {
  const {imgList} = props;
  const position = useRef<number[]>([0]);
  const carouselEl = useRef<HTMLDivElement | null>(null);
  const carouselTimer = useRef<NodeJS.Timeout | null>(null);
  const [imgStyle, setImgStyle] = useState(
    (): React.CSSProperties[] =>
      imgList.map(
        (src: string, i: number): React.CSSProperties => {
          position.current[i] = i;
          return {
            width: '100%',
            position: 'absolute',
            transform: `translateX(${(i - 1) * 100}%)`,
            transition: 'transform 2s, opacity 1s linear',
            zIndex: 1,
            opacity: i === 1 ? 1 : 0,
          };
        }
      )
  );
  const [imgLength] = useState(() => imgStyle.length);
  const [stop, setStop] = useState(false);
  const countStop = useRef(0);

  const tick = useCallback(
    () => {
      carouselTimer.current = setTimeout(() => {
        const newPosition: number[] = [];
        const newImgStyle = imgStyle.map(
          (style: React.CSSProperties, i: number) => {
            newPosition[i] = position.current[i === 0 ? imgLength - 1 : i - 1];
            return {
              ...style,
              transform: `translateX(${(newPosition[i] - 1) * 100}%)`,
              zIndex:
                newPosition[i] === 0 ||
                newPosition[i] === 1 ||
                newPosition[i] === 2
                  ? 1
                  : -1,
              opacity: newPosition[i] === 1 ? 1 : 0,
            };
          }
        );
        position.current = newPosition;
        setImgStyle(newImgStyle);
      }, 3000);
    },
    [imgStyle, position.current, carouselTimer.current]
  );

  useEffect(
    () => {
      if (!stop) {
        countStop.current = 0;
        tick();
      }
      return () => clearTimeout(carouselTimer.current as NodeJS.Timeout);
    },
    [imgStyle, carouselTimer.current, stop]
  );

  const onHover = useCallback(() => {
    clearTimeout(carouselTimer.current as NodeJS.Timeout);
    if (carouselEl.current) {
      const modifyStyle: React.CSSProperties[] = [
        ...carouselEl.current.childNodes,
      ].map(
        el =>
          ({
            transform: getComputedStyle(el as HTMLElement).getPropertyValue(
              'transform'
            ),
            opacity: getComputedStyle(el as HTMLElement).getPropertyValue(
              'opacity'
            ),
          } as React.CSSProperties)
      );

      if (countStop.current === 0) {
        setImgStyle(preState =>
          preState.map((style, i) => ({
            ...style,
            ...modifyStyle[i],
          }))
        );
      } else {
        setImgStyle(preState =>
          preState.map((style, i) => ({
            ...style,
            transform: `translateX(${(position.current[i] - 1) * 100}%)`,
            opacity: position.current[i] === 1 ? 1 : 0,
          }))
        );
      }
      setStop(pre => !pre);
      countStop.current += 1;
    }
  }, []);

  return (
    <div
      className="carouselWrap"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      ref={carouselEl}
    >
      {imgStyle.map((style, i) => (
        <div key={style.transform} className="carouselInner" style={style}>
          <img src={imgList[i]} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
