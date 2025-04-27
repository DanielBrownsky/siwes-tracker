import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
    const navigate = useNavigate(); 

    const handleStart = () => {
        const hasSetup = localStorage.getItem("siwesStartDate") && localStorage.getItem("siwesDuration");
        navigate(hasSetup ? "/dashboard" : "/setup");
    };

    return (
       <motion.div
        className="home-container"
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 3}}
        transition={{duration: 2, ease:"easeInOut"}}>
        <motion.h1 className="logo"
            initial={{opacity: 1, y:55}}
            animate={{opacity: 3, y: 6}}
            transition={{duration: 3, ease: "circOut"}}>SIWES Tracker</motion.h1>
        <p className="tagline">👋 Welcome, SIWES Student!</p>
        <p className="tagline">
            Track your industrial training progress
        </p>
        <button className="start-button" onClick={handleStart}>Get Started</button>
       </motion.div>
    );
}

export default Home;