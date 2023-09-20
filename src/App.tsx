import "./App.scss";
import { useState, useEffect } from "react";
import Menubar from "./components/Menubar";
import Docker from "./components/Docker";
import WelcomeWindow from "./components/WelcomeWindow";

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    confirm(
      "This Page is under Development and not optimised for Mobiles. Continue Anyway?"
    );
  }, []);

  return (
    <>
      <WelcomeWindow
        isFullScreen={(value: boolean) => setIsFullScreen(value)}
      />
      {isFullScreen && (
        <>
          <Menubar />
          <Docker />
        </>
      )}
    </>
  );
}

export default App;
