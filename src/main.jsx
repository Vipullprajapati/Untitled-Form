import React from "react";
import { createRoot } from "react-dom/client";
// import { IconBrandGithub } from "@tabler/icons-react";
import "./index.css";
import Home from "./pages/home";


const appEl = document.querySelector("#app");
const root = createRoot(appEl);
root.render(
  <React.StrictMode>
    {/* <h1>Hello World</h1> */}
    {/* // <Duster /> <IconBrandGithub /> */}
    <Home />
  </React.StrictMode>,
);



// function Duster() {
//   return <h1 className="mb-10 bg-red-500 text-5xl text-white">Hello World</h1>;
// }
