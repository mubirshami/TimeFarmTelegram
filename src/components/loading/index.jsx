// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import StartingImage from "../../assets/Sheepdawg Golden.png";
// import "./index.css";

// const LoadingAnimation = () => {
//   useEffect(() => {
//     const loadingTimer = setTimeout(() => {
//       document.getElementById("navigate-to-home").click();
//     }, 3000); 
//     return () => clearTimeout(loadingTimer);
//   }, []);

//   return (
//     <motion.div
//       className="loading-animation"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0.5 }}
//       transition={{ duration: 3 }}
//     >
//       <img
//         src={StartingImage}
//         alt="Game Loading"
//         className="game-loading-image"
//       />
//       <Link to="/home" id="navigate-to-home" style={{ display: "none" }}>Home</Link>
//     </motion.div>
//   );
// };

// export default LoadingAnimation;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StartingImage from "../../assets/Sheepdawg Golden.png";
import "./index.css";

const LoadingAnimation = ({ alreadyUser }) => {
  const [showReferral, setShowReferral] = useState(!alreadyUser);
  const navigate = useNavigate();

  useEffect(() => {
    let loadingTimer;
    if (alreadyUser || !showReferral) {
      loadingTimer = setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
    return () => clearTimeout(loadingTimer);
  }, [alreadyUser, showReferral, navigate]);

  const handleSkip = () => {
    setShowReferral(false);
  };

  const handleSubmit = () => {
    setShowReferral(false);
  };

  return (
    <div className="loading-animation">
      {showReferral ? (
        <div className="referral-container">
          <div className="referral-heading">Enter Referral Code</div>
          <div className="referral-desc">
            Enter the referral code of the user who invited you. You can skip this step if you don't have one.
          </div>
          <div className="referral-input-container">
            <input
              type="text"
              placeholder="Enter referral code"
              className="referral-input"
            />
            <button className="referral-button" onClick={handleSubmit}>Submit</button>
            <button className="referral-skip-button" onClick={handleSkip}>Skip</button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 3 }}
        >
          <img
            src={StartingImage}
            alt="Game Loading"
            className="game-loading-image"
          />
        </motion.div>
      )}
    </div>
  );
};

export default LoadingAnimation;
