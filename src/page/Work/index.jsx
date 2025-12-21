import { useState } from "react";

import { Header, Card } from "@/component";
import { useLayerPopup } from "@/hook/useLayerPopup";
import { POP_0001 } from "@/popup";

// 헤더 리스트
const headerData = [
  { txt: "All" },
  { txt: "Pc" },
  { txt: "Responsive" },
  { txt: "Design" },
];

const workData = [
  {
    tit: "프로젝트1",
    tag: "Web",
    year: "2024",
    img: "https://images.unsplash.com/photo-1762361962969-9e1484e8c8b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "프로젝트 설명 설명 ",
    openId: "pop_001",
    type: 1,
  },
  {
    tit: "프로젝트1",
    tag: "Web",
    year: "2024",
    img: "https://images.unsplash.com/photo-1762361962969-9e1484e8c8b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "프로젝트 설명 설명 ",
    isClose: true,
    type: 2,
  },
  {
    tit: "프로젝트1",
    tag: "Web",
    year: "2024",
    img: "https://images.unsplash.com/photo-1762361962969-9e1484e8c8b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "프로젝트 설명 설명 ",
    type: 3,
    href: "#",
  },
];

export default function index() {
  const [filter, setFilter] = useState(0);

  const clickHeader = (index) => {
    setFilter(index);
  };
  const { onOpen } = useLayerPopup();

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header
            data={headerData}
            className="header-work"
            clickEvt={clickHeader}
          />
          <div className="workpage">
            <ul className="workpage__list">
              {workData.map((item, num) => {
                if (filter !== 0 && filter !== item.type) return null;

                return (
                  <li className="workpage__item" key={num}>
                    <Card
                      className="workpage__card"
                      num={num + 1}
                      tit={item.tit}
                      tag={item.tag}
                      year={item.year}
                      img={item.img}
                      href={item.href ? item.href : false}
                      {...(item.href ||
                      (!item.onClick && !item.href && !item.openId)
                        ? {}
                        : {
                            onClick: () => {
                              item.openId && onOpen(item.openId);
                              item.onClick && item.onClick();
                            },
                          })}
                      isClose={item.isClose}
                    >
                      {item.desc}
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <POP_0001 />
    </>
  );
}
