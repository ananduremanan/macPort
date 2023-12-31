export default function Menubar() {
  const menus = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  return (
    <div className="menu-bar">
      <div className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png"
          className="apple-logo"
          alt=""
        />
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
  );
}
