import React from "react";

export default function Header({ data }) {
  console.log(data);
  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="header__txt">PORTFOLIO</h1>
        <div className="header__list">
          <ul className="header-list">
            {data.map((item, num) => {
              return (
                <li className="header-list__item" key={num}>
                  <button className="header-list__btn">{item.txt}</button>
                </li>
              );
            })}
          </ul>
          <span className="header-list__line" />
        </div>
      </div>
    </header>
  );
}
