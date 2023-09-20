import "./App.scss";
import { useState } from "react";
import Menubar from "./components/Menubar";
import Docker from "./components/Docker";
import WelcomeWindow from "./components/WelcomeWindow";

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  console.log(isFullScreen);

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
