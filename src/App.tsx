import "./App.scss";

function App() {
  return (
    <>
      <div className="menu-bar">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png"
            className="apple-logo"
            alt=""
          />
          <span className="menus active">Finder</span>
          <span className="menus">File</span>
          <span className="menus">Edit</span>
          <span className="menus">View</span>
          <span className="menus">Go</span>
          <span className="menus">Window</span>
          <span className="menus">Help</span>
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

      <div className="dock">
        <div className="dock-container">
          <li className="li-1">
            <div className="name">Finder</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
              alt=""
            />
          </li>
          <li className="li-2">
            <div className="name">Siri</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png"
              alt=""
            />
          </li>
          <li className="li-3">
            <div className="name">LaunchPad</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png"
              alt=""
            />
          </li>
          <li className="li-4">
            <div className="name">Contacts</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png"
              alt=""
            />
          </li>
          <li className="li-5">
            <div className="name">Notes</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png"
              alt=""
            />
          </li>
          <li className="li-6">
            <div className="name">Reminders</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png"
              alt=""
            />
          </li>
          <li className="li-7">
            <div className="name">Photos</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png"
              alt=""
            />
          </li>
          <li className="li-8">
            <div className="name">Messages</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853a55558a68e192ee08_messages.png"
              alt=""
            />
          </li>
          <li className="li-9">
            <div className="name">FaceTime</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png"
              alt=""
            />
          </li>
          <li className="li-10">
            <div className="name">Music</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ba0782d6ff2aca6b3_music.png"
              alt=""
            />
          </li>
          <li className="li-11">
            <div className="name">Podcasts</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853cc718ba9ede6888f9_podcasts.png"
              alt=""
            />
          </li>
          <li className="li-12">
            <div className="name">TV</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708540dd82638d7b8eda70_tv.png"
              alt=""
            />
          </li>
          <li className="li-12">
            <div className="name">App Store</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853270b5e2ccfd795b49_appstore.png"
              alt=""
            />
          </li>
          <li className="li-14">
            <div className="name">Safari</div>
            <img
              className="ico"
              src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png"
              alt=""
            />
          </li>
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
