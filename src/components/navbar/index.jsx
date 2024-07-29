import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { FaHouse } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { RiTrophyFill } from "react-icons/ri";
import { PiCoinsFill } from "react-icons/pi";
import { IoWallet } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul className="list">
          <li>
            <div className="list-item" onClick={() => navigate("/home")}>
              {/* <img
                src="https://img-tap-miniapp.chrono.tech/svg/icon-home.svg"
                alt="tab-icon"
              /> */}
              <FaHouse/>
              Home
            </div>
          </li>
          <li>
            <div className="list-item" onClick={() => navigate("/tasks")}>
              {/* <img
                src="https://img-tap-miniapp.chrono.tech/svg/icon-tasks.svg"
                alt="tab-icon"
              /> */}
              <FaClipboardCheck/>
              Tasks
            </div>
          </li>
          <li>
            <div className="list-item" onClick={() => navigate("/frens")}>
              {/* <img
                data-v-84cf6f89=""
                src="https://img-tap-miniapp.chrono.tech/svg/icon-friends.svg"
                alt="tab-icon"
              /> */}
              <FaUserGroup/>
              Frens
            </div>
          </li>
          <li>
            <div className="list-item" onClick={() => navigate("/activity")}>
              {/* <img
                src="https://img-tap-miniapp.chrono.tech/svg/icon-activity.svg"
                alt="tab-icon"
              /> */}
              <RiTrophyFill/>
              Activity
            </div>
          </li>
          <li>
            <div className="list-item" onClick={() => navigate("/earn")}>
              {/* <img
                src="https://img-tap-miniapp.chrono.tech/svg/ph_coins-fill.svg"
                alt="tab-icon"
              /> */}
              <PiCoinsFill/>
              Earn
            </div>
          </li>
          <li>
            <div className="list-item" onClick={() => navigate("/wallet")}>
              {/* <img
                data-v-84cf6f89=""
                src="https://img-tap-miniapp.chrono.tech/svg/icon-wallet.svg"
                alt="tab-icon"
              /> */}
              <IoWallet/>
              Wallet
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
