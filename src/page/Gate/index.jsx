import { Header } from "@/component";
import { Main, About, Skill, Work, Contact } from "./section";

// 이미지 리스트
import LogoHtml from "@/assets/img/html5.svg";
import LogoCss from "@/assets/img/css.svg";
import LogoJs from "@/assets/img/javascript.svg";
import LogoPug from "@/assets/img/pug.svg";
import LogoReact from "@/assets/img/react.svg";

function Gate() {
  // 헤더 리스트
  const headerData = [
    { txt: "HOME" },
    { txt: "ABOUT" },
    { txt: "WORKS" },
    { txt: "CONTACT" },
  ];

  // about 리스트
  const aboutData = [
    {
      tit: "EDUCATION",
      child: [
        { year: "2018.02", txt: "해송 고등학교 졸업" },
        { year: "2020.02", txt: "신안산 대학교 졸업" },
        { year: "2021.10", txt: "그린 컴퓨터 아카데미 디지털디자인 과정 수료" },
      ],
    },
    {
      tit: "EXPERIENCE",
      child: [
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

  return (
    <>
      <Header data={headerData} />
      <Main />
      <About data={aboutData} />
      <Skill data={skillData} />
      <Work data={workData} />
      <Contact />
    </>
  );
}

export default Gate;
