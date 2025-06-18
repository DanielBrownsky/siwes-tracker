import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
    const navigate = useNavigate(); 

    const quotes =[
        {text: "Every log you write is proof you're growing.", author: "SIWES Guide" },
        { text: "Your SIWES journey is a story worth tracking.", author: "SIWES Mentor" },
        { text: "Tiny steps during SIWES lead to giant leaps after school.", author: "Intern Whispere"},
        { text: "Discipline today, opportunities tomorrow.", author: "Daily Drive"},
        { text: "Growth is silent but powerful - keep logging.", author: "Quiet Achiever"},
        { text: "You're not behind, you're just in progress.", author: "Progress Tracker"},
        { text: "Every week is a new chance to shine.", author: "Weekly Wonder" },
        { text: "The habits you build today become your strength tomorrow.", author: "SIWES Mentor" },
        { text: "Even slow progress is better than no progress.", author: "Consistency Coach" },
        { text: "Discipline during SIWES is your competitive edge.", author: "Intern Lead" },
        { text: "Show up, log in, stand out.", author: "Work Ethic Daily" },
        { text: "Your logs are your legacy.", author: "Reflective Intern" },
        { text: "Faithfulness in the little is what prepares you for the big.", author: "Growth Devotional" },
        { text: "progress is not perfection - just keep moving.", author: "Daily Intern Fuel" },
        { text: "Make your training count, even if no one's watching.", author: "Inner Drive" },
        { text: "Real value is built when no one is clapping.", author: "Humble Hustler" },
        { text: "What you plant during SIWES, you'll harvest after school.", author: "Seed Time Journal" },
    ]

    const [quote, setQuote] = useState({text: "" , author: "" })
    const [count, setCount] = useState(312);

    useEffect(() => {
    const updateQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);
    };

    updateQuote(); 

    const interval = setInterval(updateQuote, 10000);

    return () => clearInterval(interval);
}, []);


    useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3)); 
    }, 20000); 
    return () => clearInterval(interval);
  }, []);

    const handleStart = () => {
        // firebase firestore logic
        navigate("/auth");
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
        <p className="tagline">
            “Your SIWES journey starts here 🚀”<br />
            Stay organized, track your progress, and make every week count.
            <br /><br />
            Work with friends using <strong>Team Collaboration Mode</strong> — perfect for group SIWES projects!
        </p>


        <div className="quote-box">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.author}</p>
        </div>

        <div className="counter-box">
            🎓 <strong>{count}+</strong> students are tracking their SIWES with us!
        </div>
       
        <button className="start-button" onClick={handleStart}>Get Started</button>
       </motion.div>
    );
}

export default Home;