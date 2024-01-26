import { useRef, useState } from "react";
import { Slide } from "@mui/material";
import { Catalog } from "./pages/Catalog";
import { Letter } from "./pages/Letter";
import "./App.css";

function App() {
  const containerRef = useRef(null);
  const [isShowingCatalog, setIsShowingCatalog] = useState(false);

  return (
    <div className="App" ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction="down"
        in={!isShowingCatalog}
        mountOnEnter
        unmountOnExit
      >
        <Letter
          toggleIsShowting={setIsShowingCatalog.bind(null, !isShowingCatalog)}
        />
      </Slide>

      <Slide
        container={containerRef.current}
        direction="up"
        in={isShowingCatalog}
        mountOnEnter
        unmountOnExit
      >
        <Catalog
          toggleIsShowting={setIsShowingCatalog.bind(null, !isShowingCatalog)}
        />
      </Slide>
    </div>
  );
}

export default App;
