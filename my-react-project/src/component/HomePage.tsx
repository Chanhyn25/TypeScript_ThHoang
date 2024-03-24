import React, { useEffect, useState } from "react";

const Hompage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toType = ["Nguyễn Thị Hạnh", "Nguyễn Yến Nhi"];

  useEffect(() => {
    let timer = 0;
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(toType[loopNum].substring(0, text.length - 1));
        setTypingSpeed(100);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(toType[loopNum].substring(0, text.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && text === toType[loopNum]) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "Nguyễn") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(200);
    }

    if (loopNum >= toType.length) {
      setLoopNum(0);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, toType]);

  return (
    <div className="content">
      {/* <h1>{text}</h1> */}
    </div>
  );
};

export default Hompage;
