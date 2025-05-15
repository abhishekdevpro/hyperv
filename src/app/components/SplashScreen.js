"use client";
import { useState, useEffect } from "react";

export default function SplashScreen({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="loader"></div>
        <h1>
          Welcome to <span>Hyper V Solutions</span>
        </h1>
        <style jsx>{`
          .splash-screen {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #4facfe, rgb(199, 0, 254));
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
          }

          .loader {
            border: 6px solid rgba(255, 255, 255, 0.3);
            border-top: 6px solid white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
          }

          h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin: 0;
          }

          h1 span {
            color: #ffdd57;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
