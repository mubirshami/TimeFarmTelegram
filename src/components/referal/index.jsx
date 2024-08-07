import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, query, where, doc, updateDoc, getDoc } from "firebase/firestore";
import "./index.css";

const Referral = () => {
  const [referralCode, setReferralCode] = useState("");
  const [isCodeCorrect, setIsCodeCorrect] = useState(null);
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/home");
  };

  const handleSubmit = () => {
    const codeAsNumber = Number(referralCode);
    checkCode(codeAsNumber);
    setReferralCode("");
    setIsCodeCorrect(null);
  };

  const checkCode = async (code) => {
    try {
      const searchCodeQuery = query(
        collection(db, "users"),
        where("referralCode", "==", code)
      );
      const result = await getDocs(searchCodeQuery);

      if (!result.empty) {
        setIsCodeCorrect(true);
        const userDoc = result.docs[0];
        const userRef = doc(db, "users", userDoc.id);
        await incrementInviteCount(userRef);
        navigate("/home");
      } else {
        setIsCodeCorrect(false);
        console.log("Referral code does not exist");
      }
    } catch (error) {
      console.error("Error checking referral code:", error);
      setIsCodeCorrect(false);
    }
  };

  const incrementInviteCount = async (userRef) => {
    try {
      const docSnap = await getDoc(userRef); 
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const currentInviteCount = userData.inviteCount || 0;
        await updateDoc(userRef, {
          inviteCount: currentInviteCount + 1,
        });
        console.log("Invite count updated successfully.");
      } else {
        console.log("No such document exists.");
      }
    } catch (error) {
      console.error("Error incrementing invite count:", error);
    }
  };

  return (
    <div className="referral-container">
      <div className="referral-heading">Enter Referral Code</div>
      <div className="referral-desc">
        Enter the referral code of the user who invited you. You can skip this
        step if you don't have one.
      </div>
      <div className="referral-input-container">
        <input
          type="number"
          placeholder="Enter referral code"
          className="referral-input"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
        />
        <button className="referral-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="referral-skip-button" onClick={handleSkip}>
          Skip
        </button>
      </div>
      {isCodeCorrect === true && (
        <div className="referral-success">Success!!</div>
      )}
      {isCodeCorrect === false && (
        <div className="referral-error">Incorrect Referral Code</div>
      )}
    </div>
  );
};

export default Referral;
