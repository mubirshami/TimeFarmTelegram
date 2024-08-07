import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StartingImage from "../../assets/Sheepdawg Golden.png";
import "./index.css";
import { useCtx } from "../../context/useContext";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

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
      checkUserExists(user);
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, [navigate]);

  const checkUserExists = async (user) => {
    console.log("USER", user);
    const searchUserQuery = query(
      collection(db, "users"),
      where("id", "==", user.id)
    );
    const result = await getDocs(searchUserQuery);
    if (!result.empty) {
      console.log("User exists");
      navigate("/home");
    } else {
      navigate("/referral");
    }
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
