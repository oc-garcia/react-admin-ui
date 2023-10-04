import "./navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>React Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://github.com/oc-garcia.png" alt="" />
          <span>Octávio</span>
        </div>
        <img src="/settings.svg" alt="settings" className="icon" />
      </div>
    </div>
  );
};
