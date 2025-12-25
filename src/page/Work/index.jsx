import { useState } from "react";

import { Header, Card } from "@/component";
import { useLayerPopup } from "@/hook/useLayerPopup";
import {
  POP_HANSUNG,
  POP_SPEEDFLOOR,
  POP_XCONE,
  POP_ISD,
  POP_ARKWORLD,
  POP_ALICECAR,
  POP_ALICECAMPING,
  POP_RICHGOLP,
  POP_DAINRMC,
} from "@/popup";

import Hansung from "@/assets/img/thumb_001.jpg";
import SpeedFloor from "@/assets/img/thumb_002.jpg";
import Xcone from "@/assets/img/thumb_003.jpg";
import Isd from "@/assets/img/thumb_004.jpg";
import Arkworld from "@/assets/img/thumb_005.png";
import Repai from "@/assets/img/thumb_006.jpg";
import AliceCar from "@/assets/img/thumb_007.jpg";
import AliceCamping from "@/assets/img/thumb_008.jpg";
import Thelogy from "@/assets/img/thumb_009.jpg";
import RichGolp from "@/assets/img/thumb_010.jpg";
import DainRmc from "@/assets/img/thumb_011.jpg";
import Sodam from "@/assets/img/thumb_012.jpg";
import NowEat from "@/assets/img/thumb_013.png";
import KRating from "@/assets/img/thumb_014.png";
import Posco from "@/assets/img/thumb_016.jpg";
import Suseok from "@/assets/img/thumb_015.png";
import DongaSocio from "@/assets/img/thumb_017.jpg";
import Chammed from "@/assets/img/thumb_018.jpg";
import JB from "@/assets/img/thumb_019.png";
import DongaHr from "@/assets/img/thumb_020.png";
import Mirae from "@/assets/img/thumb_021.png";
import BGSS from "@/assets/img/thumb_022.png";
import Lotte from "@/assets/img/thumb_023.png";
import Yonsei from "@/assets/img/thumb_024.png";
import ReactGuide from "@/assets/img/thumb_025.png";

// 헤더 리스트
const headerData = [
  { txt: "All" },
  { txt: "Pc / Mo" },
  { txt: "Responsive" },
  { txt: "Design" },
  { txt: "Proposal / Study" },
];

const workData = [
  {
    tit: "롯데월드 차세대",
    tag: "Responsive Web / App",
    year: "2024.11 ~ 2025.09",
    img: Lotte,
    desc: "다국어프로젝트 / 퍼블리싱 참여 / AWARD-WINNING - 레저/스포츠분야 대상 | 문화/레포츠분야 대상",
    href: "https://www.lotteworld.com/",
    type: [1, 2],
  },
  {
    tit: "연세소식",
    tag: "Responsive Web",
    year: "2024.09 ~ 11",
    img: Yonsei,
    desc: "퍼블리싱 단독 수행 / AWARD-WINNING - 웹진분야 대상",
    href: "https://news.yonsei.ac.kr/",
    type: [2],
  },
  {
    tit: "리액트 컴포넌트",
    tag: "Study",
    img: ReactGuide,
    desc: "리액트(NEXT & TypeScript) 기반 컴포넌트 가이드",
    href: "https://ckrong123-web.github.io/next-component/",
    type: [4],
  },
  {
    tit: "밝은세상안과 리뉴얼",
    tag: "PC & MO",
    year: "2024.07 ~ 09",
    img: BGSS,
    desc: "다국어프로젝트 / 퍼블리싱 참여",
    href: "https://iloveeye.com/index.do",
    type: [1],
  },
  {
    tit: "미래엔 중고등 가상실험실",
    tag: "교과서",
    year: "2024.04",
    img: Mirae,
    desc: "교과서 / 퍼블리싱 참여",
    href: "https://m.m-teacher.co.kr/pages/high/bbs/list.mrn/TBM-m5qjheyn-46G0J1g8Uj",
    type: [1],
  },
  {
    tit: "동아HR",
    tag: "Responsive Web",
    year: "2024.03 ~ 04",
    img: DongaHr,
    desc: "채용 사이트 / 퍼블리싱 참여",
    href: "https://talent.dongasocio.com/kr/main",
    type: [2],
  },
  {
    tit: "전북은행 쏙 뱅크",
    tag: "App",
    year: "2024.02",
    img: JB,
    desc: "퍼블리싱 참여",
    type: [1],
  },
  {
    tit: "동아 참메드 (영문)",
    tag: "Responsive Web",
    year: "2024.01 ~ 02",
    img: Chammed,
    desc: "영문 다국어 작업 / 퍼블리싱 참여",
    href: "https://www.donga-chammed.com/en/main",
    type: [2],
  },
  {
    tit: "동아 쏘시오홀딩스",
    tag: "Responsive Web",
    year: "2023.10 ~ 2024.01",
    img: DongaSocio,
    desc: "기업 소개 웹 사이트 / 퍼블리싱 참여 / AWARD-WINNING - 중견기업-제조분야 최우수상",
    href: "https://www.donga.co.kr/main/main?lang=ko",
    type: [2],
  },
  {
    tit: "수석문화재단",
    tag: "Responsive Web",
    year: "2023.10 ~ 2024.01",
    img: Suseok,
    desc: "재단 소개 웹 사이트 / 퍼블리싱 참여 / AWARD-WINNING - 사회공헌분야 대상",
    href: "https://foundation.donga.co.kr/main/main",
    type: [2],
  },
  {
    tit: "포스코FLOW 스마트 물류통합 플랫폼",
    tag: "PC",
    year: "2023.03 ~ 08",
    img: Posco,
    desc: "IBSheet 사용(그리드 시스템) / 퍼블리싱 참여",
    href: "https://smartportal.poscoflow.com/cpc01p-web-portal/cpc01p0100.html",
    type: [1],
  },
  {
    tit: "케이레이팅",
    tag: "PC & Mo / Web Accessibility Project",
    year: "2022.11 ~ 12",
    img: KRating,
    desc: "웹 접근성 프로젝트 / 퍼블리싱 참여 / AWARD-WINNING - 금융연계서비스분야 대상",
    href: "https://www.krating.co.kr/main.do",
    type: [1],
  },
  {
    tit: "나우잇뮤직컴퍼니",
    tag: "Responsive Web",
    year: "2022.10 ~ 11",
    img: NowEat,
    desc: "음악 교육 플랫폼 웹사이트 / 퍼블리싱 단독 수행",
    href: "https://www.noweatmusic.com/",
    type: [2],
  },
  {
    tit: "다인RMC",
    tag: "Responsive Web",
    year: "2022.06 ~ 07",
    img: DainRmc,
    desc: "건설 및 부동산 기업 브랜드 웹사이트 / UI 디자인 및 퍼블리싱 단독 수행",
    openId: "pop_dainrmc",
    type: [2, 3],
  },
  {
    tit: "소담목재",
    tag: "Responsive Web",
    year: "2022.05 ~ 06",
    img: Sodam,
    desc: "목재 쇼핑몰 / 퍼블리싱 참여",
    href: "https://sodamdiy.co.kr/",
    type: [2],
  },
  {
    tit: "리치골프 아카데미",
    tag: "Responsive Web",
    year: "2022.04 ~ 06",
    img: RichGolp,
    desc: "골프 학원 웹사이트 / UI 디자인 및 퍼블리싱 단독 수행",
    isClose: true,
    openId: "pop_richgolp",
    type: [2, 3],
  },
  {
    tit: "신학과 사상",
    tag: "Responsive Web",
    year: "2022.04 ~ 06",
    img: Thelogy,
    desc: "학회 웹사이트 / 퍼블리싱 참여",
    href: "https://xn--vb0bj78a2b13ju10b.kr/",
    type: [2, 3],
  },
  {
    tit: "앨리스 카라반 캠핑",
    tag: "Responsive Web",
    year: "2022.03 ~ 06",
    img: AliceCamping,
    desc: "캠핑장 안내 웹사이트 / UI 디자인 및 퍼블리싱 단독 수행",
    isClose: true,
    openId: "pop_alicecamping",
    type: [2, 3],
  },
  {
    tit: "앨리스 렌터카",
    tag: "Responsive Web",
    year: "2022.03 ~ 06",
    img: AliceCar,
    desc: "렌터카 기업 웹사이트 / UI 디자인 및 퍼블리싱 단독 수행",
    openId: "pop_alicecar",
    type: [2, 3],
  },
  {
    tit: "Repai",
    tag: "PC & Mo",
    year: "2022.01 ~ 07",
    img: Repai,
    desc: "쇼핑몰 / 퍼블리싱 단독 수행 ",
    isClose: true,
    type: [1],
  },
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
      <POP_ALICECAR />
      <POP_ALICECAMPING />
      <POP_RICHGOLP />
      <POP_DAINRMC />
    </>
  );
}
