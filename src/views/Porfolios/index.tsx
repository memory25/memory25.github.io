import React from 'react';
import useTooltip from './useTooltip';
import porfsConst from './porfsConst';

interface IPorf {
  src: string;
  description: string;
  link: string;
  theme: string;
}

interface IPorfs {
  [porfName: string]: IPorf;
}

interface IPorBox extends IPorf {
  index: number;
}

function PorBox(props: IPorBox): JSX.Element {
  const {src, description, theme, link, index} = props;
  const tooltip = useTooltip({content: description});
  const isEven: boolean = index % 2 === 0;

  return (
    <div className="porBox" {...tooltip}>
      <div className="porBoxUp">
        <img className={isEven ? 'mirror' : 'zoomIn'} src={src} alt="" />
        {isEven && (
          <>
            <h1>{theme}</h1>
            <a href={link}>Go!</a>
          </>
        )}
      </div>
      <div className="porBoxDown">
        <img className={isEven ? 'zoomIn' : 'mirror'} src={src} alt="" />
        {!isEven && (
          <>
            <h1>{theme}</h1>
            <a href={link}>Go!</a>
          </>
        )}
      </div>
    </div>
  );
}

const generatePor = (porfs: IPorfs): JSX.Element[] =>
  Object.values(porfs).map((porf: IPorf, i: number) => (
    <PorBox {...porf} index={i} />
  ));

export default () => (
  <div id="porfolios">
    <div className="title">Porfolios</div>
    <div className="main">{generatePor(porfsConst)}</div>
  </div>
);
