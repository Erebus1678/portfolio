import { Project } from "../../typings";

export const projects_data: Project[] = [
  {
    projPhoto: "/projectPhoto/port.png",
    title: "Portfolio",
    summary:
      "Yes, now you're here! Neat project written with: TypeScript, Next , React, Tailwind. I hope u enjoy this!",
    techno: [
      "/Icons/javascript.svg",
      "/Icons/typescript.svg",
      "/Icons/tailwindcss.svg",
      "/Icons/next.png",
      "/Icons/react.svg",
    ],
    link: "",
  },
  {
    projPhoto: "/projectPhoto/Marvel.png",
    title: "Marvel Info portal",
    summary:
      "Quite big edu project that started from class based components and then was refactored to function components. In this project, I used Marvel Api, for fetching practice. Also I used some modern libraries like: Helmet, Formik, React-router-dom.",
    techno: [
      "/Icons/javascript.svg",
      "/Icons/react.svg",
      "/Icons/bootstrap.svg",
    ],
    link: "https://erebus1678.github.io/marvel-info-portal/",
  },
  {
    projPhoto: "/projectPhoto/TOdo.png",
    title: "ToDo",
    summary:
      "Simple and clean TO DO project. Was made for Redux, Redux Toolkit practice. Design was taken from Figma community.",
    techno: [
      "/Icons/javascript.svg",
      "/Icons/react.svg",
      "/Icons/bootstrap.svg",
      "/Icons/css3.svg",
    ],
    link: "https://todo-cpv5dpgfb-erebus1678.vercel.app/",
  },
  {
    projPhoto: "/projectPhoto/Crud.png",
    title: "Employees list - CRUD App",
    summary:
      "My first react app that fully based on class components. Project was made for practice with CRUD operations",
    techno: [
      "/Icons/javascript.svg",
      "/Icons/react.svg",
      "/Icons/bootstrap.svg",
    ],
    link: "https://erebus1678.github.io/react-CRUD-app/",
  },
  {
    projPhoto: "/projectPhoto/Food.png",
    title: "Food delivery landing",
    summary:
      "Food delevery landing page. Written on pure JS, it has 6 cool features : Calories calculator, Cards made with classes, Forms connected to local storage with fetch, Modal window with timer and statuses, Slider, Tabs",
    techno: ["/Icons/javascript.svg", "/Icons/css3.svg"],
    link: "https://erebus1678.github.io/food-delivery/",
  },
];
