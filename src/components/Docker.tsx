import data from "../data/dataSource.json";
import { useEffect, useRef } from "react";
import { focus } from "../utils/focus";

export default function Docker() {
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
    <div className="dock" ref={dockRef}>
      <div className="dock-container">
        {data &&
          data.map((item: any, index: number) => (
            <li key={item.id} className={`li-${index + 1}`}>
              <div className="name">{item.name}</div>
              <img className="ico" src={item.imgUrl} alt="" />
            </li>
          ))}
      </div>
    </div>
  );
}
