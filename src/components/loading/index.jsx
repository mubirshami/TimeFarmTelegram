import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GameLoadingImage from "../../assets/Loading page.png";
import "./index.css";

const LoadingAnimation = () => {
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      document.getElementById("navigate-to-home").click();
    }, 3000); 
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <motion.div
      className="loading-animation"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 3 }}
    >
      <img
        src={GameLoadingImage}
        alt="Game Loading"
        className="game-loading-image"
      />
      <Link to="/home" id="navigate-to-home" style={{ display: "none" }}>Home</Link>
    </motion.div>
  );
};

export default LoadingAnimation;
