import React from 'react';
import useTooltip from './useTooltip';
import portfConst from './portfConst';

interface IPortf {
  src: string;
  description: string;
  link: string;
  theme: string;
}

interface IPortfs {
  [porfName: string]: IPortf;
}

interface IPorBox extends IPortf {
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
            <a href={link} rel="noopener noreferrer" target="_blank">
              Go!
            </a>
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

const generatePor = (portfs: IPortfs): JSX.Element[] =>
  Object.values(portfs).map((portf: IPortf, i: number) => (
    <PorBox key={portf.link} {...portf} index={i} />
  ));

export default () => (
  <div id="portfolio">
    <div className="title">Portfolio</div>
    <div className="main">{generatePor(portfConst)}</div>
  </div>
);
