import { useRef, useEffect, useState } from "react";
import { Header } from "@/component";
import { Main, About, Skill, Work, Contact } from "./section";

// 이미지 리스트
import LogoHtml from "@/assets/img/html5.svg";
import LogoCss from "@/assets/img/css.svg";
import LogoJs from "@/assets/img/javascript.svg";
import LogoPug from "@/assets/img/pug.svg";
import LogoReact from "@/assets/img/react.svg";

import Posco from "@/assets/img/thumb_016.jpg";
import Suseok from "@/assets/img/thumb_015.png";
import DongaSocio from "@/assets/img/thumb_017.jpg";
import Yonsei from "@/assets/img/thumb_024.png";
import Lotte from "@/assets/img/thumb_023.png";

// 헤더 리스트
const headerData = [
  { txt: "HOME" },
  { txt: "ABOUT" },
  { txt: "SKILL" },
  { txt: "WORKS" },
  { txt: "CONTACT" },
];

// about 리스트
const aboutData = [
  {
    tit: "EDUCATION & CERTIFICATIONS",
    child: [
      { year: "2018.02", txt: "해송 고등학교 졸업" },
      { year: "2020.02", txt: "신안산 대학교 졸업" },
      { year: "2020.03", txt: "GTQ 그래픽기술자격 1급 취득" },
      { year: "2021.07", txt: "웹디자인개발기능사 취득" },
      { year: "2021.10", txt: "그린 컴퓨터 아카데미 디지털디자인 과정 수료" },
    ],
  },
  {
    tit: "EXPERIENCE",
    child: [
      {
        year: "2020.05 ~ 2020.11",
        txt: "SN그래픽스 | 사원",
        subTxt: "Editional Design",
      },
      {
        year: "2021.10 ~ 2022.08",
        txt: "이즈디 | 사원",
        subTxt: "Web Design & Publishing",
      },
      {
        year: "2022.08 ~ now",
        txt: "프레임아웃 | 주임",
        subTxt: "UX Design Office Publishing Part",
      },
    ],
    during: true,
  },
  {
    tit: "AWARD-WINNING PROJECTS",
    child: [
      {
        year: "2023",
        txt: "KRating",
        subTxt: "금융연계서비스분야 대상",
      },
      {
        year: "2024",
        txt: "수석문화재단",
        subTxt: "사회공헌분야 대상",
      },
      {
        year: "2024",
        txt: "동아쏘시오홀딩스",
        subTxt: "중견기업-제조분야 최우수상",
      },
      {
        year: "2025",
        txt: "연세소식",
        subTxt: "웹진분야 대상",
      },
      {
        year: "2025",
        txt: "롯데월드 어드벤처",
        subTxt: "레저/스포츠분야 대상 | 문화/레포츠분야 대상",
      },
    ],
    colSpan: true,
  },
];

// skill 리스트
const skillData = [
  {
    name: "HTML5",
    sub: "Markup",
    img: LogoHtml,
  },
  {
    name: "CSS(SCSS)",
    sub: "Styling",
    img: LogoCss,
  },
  {
    name: "JavaScript",
    sub: "Logic",
    img: LogoJs,
  },
  {
    name: "Pug",
    sub: "Templating",
    img: LogoPug,
  },
  {
    name: "React",
    sub: "Components",
    img: LogoReact,
  },
];

const workData = [
  {
    tit: "롯데월드 차세대",
    tag: "Responsive Web / App",
    year: "2025",
    img: Lotte,
    href: "https://www.lotteworld.com/",
  },
  {
    tit: "연세소식",
    tag: "Responsive Web",
    year: "2024",
    img: Yonsei,
    href: "https://news.yonsei.ac.kr/",
  },
  {
    tit: "동아 쏘시오홀딩스",
    tag: "Responsive Web",
    year: "2024",
    img: DongaSocio,
    href: "https://www.donga.co.kr/main/main?lang=ko",
  },
  {
    tit: "수석문화재단",
    tag: "Responsive Web",
    year: "2024",
    img: Suseok,
    href: "https://foundation.donga.co.kr/main/main",
  },
  {
    tit: "포스코FLOW 스마트 물류통합 플랫폼",
    tag: "PC",
    year: "2023",
    img: Posco,
    href: "https://smartportal.poscoflow.com/cpc01p-web-portal/cpc01p0100.html",
  },
];

function Gate() {
  const sectionRefs = useRef([]);

  const setRef = (sec, index) => {
    sectionRefs.current[index] = sec;
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const watchSection = new IntersectionObserver(
      (sec) => {
        sec.forEach((sec) => {
          if (sec.isIntersecting) {
            setActiveIndex(sectionRefs.current.indexOf(sec.target));
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
    );

    sectionRefs.current.forEach((sec) => sec && watchSection.observe(sec));

    return () => watchSection.disconnect();
  }, []);

  const scrTo = (index) => {
    const lastSec = index === sectionRefs.current.length - 1;
    if (lastSec) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

    const sectionTop = sectionRefs.current[index]?.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Header
          data={headerData}
          activeIndex={activeIndex}
          clickEvt={scrTo}
          scrollHeader
        />
        <Main
          ref={(sec) => setRef(sec, 0)}
          className={activeIndex === 0 && "active"}
        />
        <About
          data={aboutData}
          ref={(sec) => setRef(sec, 1)}
          className={activeIndex === 1 && "active"}
        />
        <Skill
          data={skillData}
          ref={(sec) => setRef(sec, 2)}
          className={activeIndex === 2 && "active"}
        />
        <Work
          data={workData}
          ref={(sec) => setRef(sec, 3)}
          className={activeIndex === 3 && "active"}
        />
        <Contact
          ref={(sec) => setRef(sec, 4)}
          clickEvt={() => scrTo(0)}
          className={activeIndex === 4 && "active"}
        />
      </div>
    </div>
  );
}

export default Gate;
