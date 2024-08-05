import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";
import TaskIcon from "@mui/icons-material/Task";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentIcon from "@mui/icons-material/Payment";
import HouseIcon from "@mui/icons-material/House";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveIcon = () => {
    switch (location.pathname) {
      case "/home":
        return "Home";
      case "/tasks":
        return "Tasks";
      case "/frens":
        return "Buddies";
      case "/activity":
        return "Activity";
      case "/earn":
        return "Earn";
      case "/wallet":
        return "Wallet";
      default:
        return "Home";
    }
  };

  const activeIcon = getActiveIcon();

  return (
    <div>
      <nav>
        <ul className="list">
          <li>
            <div
              className={`list-item ${activeIcon === "Home" ? "selected" : ""}`}
              onClick={() => navigate("/home")}
            >
              <HouseIcon />
              Home
            </div>
          </li>
          <li>
            <div
              className={`list-item ${
                activeIcon === "Tasks" ? "selected" : ""
              }`}
              onClick={() => navigate("/tasks")}
            >
              <TaskIcon />
              Tasks
            </div>
          </li>
          <li>
            <div
              className={`list-item ${
                activeIcon === "Buddies" ? "selected" : ""
              }`}
              onClick={() => navigate("/frens")}
            >
              <GroupsIcon />
              Buddies
            </div>
          </li>
          {/* <li>
            <div
              className={`list-item ${
                activeIcon === "Activity" ? "selected" : ""
              }`}
              onClick={() => navigate("/activity")}
            >
              <EmojiEventsIcon />
              Activity
            </div>
          </li>
          <li>
            <div
              className={`list-item ${activeIcon === "Earn" ? "selected" : ""}`}
              onClick={() => navigate("/earn")}
            >
              <MonetizationOnIcon />
              Earn
            </div>
          </li> */}
          <li>
            <div
              className={`list-item ${
                activeIcon === "Wallet" ? "selected" : ""
              }`}
              onClick={() => navigate("/wallet")}
            >
              <PaymentIcon />
              Wallet
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
