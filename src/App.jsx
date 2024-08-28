import { useState } from "react";
import Nav from "./components/Nav";
import ArrowNav from "./components/ArrowNav";
import Body from "./components/Body";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [activeID, setActiveID] = useState(0);

  return (
    <>
      <Nav
        isOpen={isOpen}
        setOpen={setOpen}
        activeID={activeID}
        setActiveID={setActiveID}
      />
      <Body activeID={activeID} />
      <ArrowNav activeID={activeID} setActiveID={setActiveID} />
      <Footer />
    </>
  );
}

export default App;
