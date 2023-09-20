import Draggable from "react-draggable";
import { useEffect, useState } from "react";

export default function WelcomeWindow(props: any) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(true);

  console.log(isFullscreen);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
      props.isFullScreen(true);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setShowPopUp(false);
  };

  return (
    showPopUp && (
      <Draggable>
        <div className="floating-dialog">
          <div className="outer yosemite">
            <div className="dot red"></div>
            <div className="dot amber"></div>
            <div className="dot green"></div>
            <div className="intro-content">
              <div>
                This Page Requires a Full Screen Experience
                <div>
                  <button className="intro-btn" onClick={toggleFullscreen}>
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  );
}
