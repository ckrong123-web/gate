import { useRef, useEffect, useState } from "react";
import { Header } from "@/component";
import { Main, About, Skill, Work, Contact } from "./section";

// 이미지 리스트
import LogoHtml from "@/assets/img/html5.svg";
import LogoCss from "@/assets/img/css.svg";
import LogoJs from "@/assets/img/javascript.svg";
import LogoPug from "@/assets/img/pug.svg";
import LogoReact from "@/assets/img/react.svg";
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
    tit: "프로젝트1",
    tag: "Web",
    year: "2024",
    img: "https://images.unsplash.com/photo-1762361962969-9e1484e8c8b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "프로젝트 설명 설명 ",
  },
  {
    tit: "프로젝트1",
    tag: "Web",
    year: "2024",
    img: "https://images.unsplash.com/photo-1762361962969-9e1484e8c8b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "프로젝트 설명 설명 ",
  },
  {
    tit: "프로젝트1",
    tag: "Web",
    year: "2024",
    img: "https://images.unsplash.com/photo-1762361962969-9e1484e8c8b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "프로젝트 설명 설명 ",
  },
  {
    tit: "프로젝트1",
    tag: "Web",
    year: "2024",
    img: "https://images.unsplash.com/photo-1762361962969-9e1484e8c8b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "프로젝트 설명 설명 ",
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
