import { useState } from "react";

import { Header, Card } from "@/component";
import { useLayerPopup } from "@/hook/useLayerPopup";
import {
  POP_HANSUNG,
  POP_SPEEDFLOOR,
  POP_XCONE,
  POP_ISD,
  POP_ARKWORLD,
} from "@/popup";

import Hansung from "@/assets/img/thumb_001.jpg";
import SpeedFloor from "@/assets/img/thumb_002.jpg";
import Xcone from "@/assets/img/thumb_003.jpg";
import Isd from "@/assets/img/thumb_004.jpg";
import Arkworld from "@/assets/img/thumb_005.png";

// 헤더 리스트
const headerData = [
  { txt: "All" },
  { txt: "Pc" },
  { txt: "Responsive" },
  { txt: "Design" },
];

const workData = [
  {
    tit: "ARK WORLD",
    tag: "Responsive Web / Full page",
    year: "2022.01 ~ 02",
    img: Arkworld,
    desc: "홍보 웹사이트 / UI 디자인 및 퍼블리싱 단독 수행 ",
    openId: "pop_arkworld",
    isClose: true,
    type: [2, 3],
  },
  {
    tit: "ISD",
    tag: "Responsive Web",
    year: "2022.01 / 2022.02 / 2022.03",
    img: Isd,
    desc: "자사 홈페이지 메인 리뉴얼 / UI 디자인 및 퍼블리싱 단독 수행 ",
    openId: "pop_isd",
    isClose: true,
    type: [2, 3],
  },
  {
    tit: "XCONE",
    tag: "Responsive Web",
    year: "2021.11 ~ 2022.01",
    img: Xcone,
    desc: "미디어 제작 자회사 브랜드 웹사이트 / UI 디자인 및 퍼블리싱 단독 수행 ",
    openId: "pop_xcone",
    isClose: true,
    type: [2, 3],
  },
  {
    tit: "SPEED FLOOR",
    tag: "Responsive Web",
    year: "2021.11 ~ 12",
    img: SpeedFloor,
    desc: "화물 차량 판매 기업 브랜드 웹사이트 / UI 디자인 및 퍼블리싱 단독 수행 ",
    openId: "pop_speedfloor",
    isClose: true,
    type: [2, 3],
  },
  {
    tit: "한성기업",
    tag: "Responsive Web",
    year: "2021.10 ~ 12",
    img: Hansung,
    desc: "건설 기업 브랜드 웹사이트 / UI 디자인 및 퍼블리싱 단독 수행",
    openId: "pop_hansung",
    type: [2, 3],
  },
  // {
  //   tit: "프로젝트1",
  //   tag: "Web",
  //   year: "2024",
  //   img: "https://images.unsplash.com/photo-1762361962969-9e1484e8c8b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   desc: "프로젝트 설명 설명 ",
  //   type: 3,
  //   href: "#",
  // },
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
                if (filter !== 0 && !item.type.includes(filter)) return null;

                return (
                  <li className="workpage__item" key={num}>
                    <Card
                      className="workpage__card"
                      num={workData.length - num}
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
                      isSubPage
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
      <POP_HANSUNG />
      <POP_SPEEDFLOOR />
      <POP_XCONE />
      <POP_ISD />
      <POP_ARKWORLD />
    </>
  );
}
