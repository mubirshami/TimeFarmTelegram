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
      const telegramUser = tg.initDataUnsafe.user;
      setUser(telegramUser);
      tg.expand();

      const loadingTimer = setTimeout(() => {
        checkUserExists(telegramUser);
      }, 5000);

      return () => clearTimeout(loadingTimer);
    }
  }, [navigate, setUser]);

  const checkUserExists = async (user) => {
    // Validate user and user.id
    if (!user || !user.id) {
      console.error("User ID is not available");
      navigate("/referral");
      return;
    }

    try {
      const searchUserQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );

      const result = await getDocs(searchUserQuery);
      if (!result.empty) {
        console.log("User exists");
        navigate("/home");
      } else {
        console.log("User does not exist");
        await addUserToDatabase(user);
      }
    } catch (error) {
      console.error("Error checking user existence:", error);
      navigate("/referral");
    }
  };

  const addUserToDatabase = async (user) => {
    try {
      await db.collection("users").add({
        id: user.id,
        referralCode: user.id,
        inviteCount: 0,
        totalSheepDawg: 0
      });
      console.log("User added to database successfully");
      navigate("/referral");
    } catch (error) {
      console.error("Error adding user to database:", error);
    }
  }

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
