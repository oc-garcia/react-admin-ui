import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

export const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title.toUpperCase()}</span>
          {item.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className="listItem">
              <img src={listItem.icon} alt={listItem.title} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
