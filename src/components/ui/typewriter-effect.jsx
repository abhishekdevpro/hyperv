// "use client";

// import { cn } from "@/lib/utils";
// import { motion, stagger, useAnimate, useInView } from "motion/react";
// import { useEffect } from "react";

// export const TypewriterEffect = ({
//   words,
//   className,
//   cursorClassName
// }) => {
//   // split text inside of words into array of characters
//   const wordsArray = words.map((word) => {
//     return {
//       ...word,
//       text: word.text ? word.text.split("") : [],
//     };
//   });

//   const [scope, animate] = useAnimate();
//   const isInView = useInView(scope);
//   useEffect(() => {
//     if (isInView) {
//       animate("span", {
//         display: "inline-block",
//         opacity: 1,
//         width: "fit-content",
//       }, {
//         duration: 0.3,
//         delay: stagger(0.1),
//         ease: "easeInOut",
//       });
//     }
//   }, [isInView]);

//   const renderWords = () => {
//     return (
//       <motion.div ref={scope} className="inline">
//         {wordsArray.map((word, idx) => {
//           return (
//             <div key={`word-${idx}`} className="inline-block">
//               {word.text.map((char, index) => (
//                 <motion.span
//                   initial={{}}
//                   key={`char-${index}`}
//                   className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}>
//                   {char}
//                 </motion.span>
//               ))}
//             </div>
//           );
//         })}
//       </motion.div>
//     );
//   };
//   return (
//     <div
//       className={cn(
//         "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
//         className
//       )}>
//       {renderWords()}
//       <motion.span
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
//           cursorClassName
//         )}></motion.span>
//     </div>
//   );
// };

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName
// }) => {
//   // split text inside of words into array of characters
//   const wordsArray = words.map((word) => {
//     return {
//       ...word,
//       text: word.text ? word.text.split("") : [],
//     };
//   });
//   const renderWords = () => {
//     return (
//       <div>
//         {wordsArray.map((word, idx) => {
//           return (
//             <div key={`word-${idx}`} className="inline-block">
//               {word.text.map((char, index) => (
//                 <span
//                   key={`char-${index}`}
//                   className={cn(`dark:text-white text-black `, word.className)}>
//                   {char}
//                 </span>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className={cn("flex space-x-1 my-6", className)}>
//       <motion.div
//         className="overflow-hidden pb-2"
//         initial={{
//           width: "0%",
//         }}
//         whileInView={{
//           width: "fit-content",
//         }}
//         transition={{
//           duration: 2,
//           ease: "linear",
//           delay: 1,
//         }}>
//         <div
//           className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
//           style={{
//             whiteSpace: "nowrap",
//           }}>
//           {renderWords()}{" "}
//         </div>{" "}
//       </motion.div>
//       <motion.span
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.8,

//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
//           cursorClassName
//         )}></motion.span>
//     </div>
//   );
// };

"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  // Original implementation unchanged
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text ? word.text.split("") : [],
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate("span", {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      }, {
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeInOut",
      });
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}>
                  {char}
                </motion.span>
              ))}
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  loop = true,
  typeSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 1000
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingPaused, setIsTypingPaused] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex]?.text || "";
    
    if (isTypingPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsTypingPaused(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      
      return () => clearTimeout(pauseTimeout);
    }
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        // Remove a character
        setCurrentText(prev => prev.slice(0, -1));
        
        // If we've deleted everything
        if (currentText.length === 0) {
          setIsDeleting(false);
          // Move to next word
          setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        // The current word we're typing
        const fullWord = word;
        
        // If we haven't typed the full word yet
        if (currentText.length < fullWord.length) {
          // Add the next character
          setCurrentText(prev => fullWord.substring(0, prev.length + 1));
        } 
        // If we've completed typing the word
        else if (currentText === fullWord) {
          // Pause before starting to delete
          setIsTypingPaused(true);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, isTypingPaused, typeSpeed, deleteSpeed, delayBetweenWords]);

  // Find the current word object
  const currentWord = words[currentWordIndex] || {};
  
  return (
    <div className={cn("flex items-center", className)}>
      <span className={cn("", currentWord.className)}>
        {currentText}
      </span>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}></motion.span>
    </div>
  );
};