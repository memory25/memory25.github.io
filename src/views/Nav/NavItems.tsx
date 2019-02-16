import React from 'react';

const navHightLightStyle: React.CSSProperties = {
  color: '#fff',
};

interface IPropsNavItem {
  onClick(e: React.MouseEvent): void;
  itemCons: {
    [key: string]: string;
  };
  curArea: string;
}

export default function NavItem({itemCons, onClick, curArea}: IPropsNavItem) {
  return (
    <>
      {Object.keys(itemCons).map(alias => (
        <li key={alias}>
          <a
            href={`#${alias}`}
            onClick={onClick}
            style={curArea === `#${alias}` ? navHightLightStyle : undefined}
          >
            {itemCons[alias]}
          </a>
        </li>
      ))}
    </>
  );
}
