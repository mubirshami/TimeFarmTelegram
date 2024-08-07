import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StartingImage from "../../assets/Sheepdawg Golden.png";
import "./index.css";
import { useCtx } from "../../context/useContext";
import { db } from "../../firebase";

const LoadingAnimation = () => {
  const navigate = useNavigate();
  const { user, setUser } = useCtx();

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    if (tg.initDataUnsafe) {
      const user = tg.initDataUnsafe.user;
      setUser(user);
    }

    tg.expand();

    const loadingTimer = setTimeout(() => {
      checkUserExists();
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, [navigate]);

  const checkUserExists = () => {
    const searchUser = db.collection("users").doc(user.id);
    searchUser.get().then((doc) => {
      if (doc.exists) {
        navigate("/home");
      } else {
        navigate("/referral");
      }
    });
  };

  return (
    <motion.div
      className="loading-animation"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 5 }}
    >
      <div>
        <img
          src={StartingImage}
          alt="Game Loading"
          className="game-loading-image"
        />
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
