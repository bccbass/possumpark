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
      <main className="flex flex-col min-h-screen justify-between h-fit overflow-x-hidden" draggable='false'>
        <Nav
          isOpen={isOpen}
          setOpen={setOpen}
          activeID={activeID}
          setActiveID={setActiveID}
        />
        <Body activeID={activeID} />
        <ArrowNav activeID={activeID} setActiveID={setActiveID} />
        <Footer activeID={activeID} setActiveID={setActiveID} />
      </main>
    </>
  );
}

export default App;
