import "./App.scss";
import data from "./data/dataSource.json";
import { useEffect, useRef } from "react";
import { focus } from "./utils/focus";

function App() {
  const menus = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  const dockRef = useRef<any | null>(null);

  useEffect(() => {
    let icons: any = dockRef.current?.querySelectorAll(".ico");

    icons.forEach((item: any, index: any) => {
      item.addEventListener("mouseover", (e: any) => {
        focus(e.target, index, icons);
      });
      item.addEventListener("mouseleave", (e: any) => {
        icons.forEach((item: any) => {
          item.style.transform = "scale(1)  translateY(0px)";
        });
      });
    });
  }, []);

  return (
    <>
      <div className="menu-bar">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png"
            className="apple-logo"
            alt=""
          />
          {/* <span className="menus active">Finder</span>*/}
          {menus.map((menu: any) => (
            <span className="menus">{menu}</span>
          ))}
        </div>
        <div className="right">
          <div className="menu-ico">
            <img
              src="https://freepngimg.com/download/united_states/76187-sound-information-united-business-states-address-email.png"
              alt=""
              className="vol"
            />
          </div>
          <div className="menu-ico">
            <i className="fab fa-bluetooth-b"></i>
          </div>
          <div className="menu-ico">
            <i className="fas fa-battery-half"></i>
          </div>
          <div className="menu-ico">
            <i className="fas fa-wifi"></i>
          </div>
          <div className="menu-ico">
            <i className="fas fa-search"></i>
          </div>
          <div className="menu-ico">
            <img
              src="https://eshop.macsales.com/blog/wp-content/uploads/2021/03/control-center-icon.png"
              alt=""
              className="control-center"
            />
          </div>
          <div className="menu-ico">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/8e/AppleSiriIcon2017.png"
              alt=""
              className="siri"
            />
          </div>

          <div className="menu-time">Mon 31 May 05:30</div>
        </div>
      </div>

      <div className="dock" ref={dockRef}>
        <div className="dock-container">
          {data &&
            data.map((item: any, index: number) => (
              <li key={item.id} className={`li-${index + 1}`}>
                <div className="name">{item.name}</div>
                <img className="ico" src={item.imgUrl} alt="" />
              </li>
            ))}
          {/* <li className="li-bin li-15">
            <div className="name">Bin</div>
            <img
              className="ico ico-bin"
              src="https://findicons.com/files/icons/569/longhorn_objects/128/trash.png"
              alt=""
            />
          </li> */}
        </div>
      </div>
    </>
  );
}

export default App;
