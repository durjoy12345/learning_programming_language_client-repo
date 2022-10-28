import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaMoon, FaSun } from 'react-icons/fa';
import "./ThemeSetUp.css";

const ThemeSetUp = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
          <div className={`App ${theme}`}>
              {
                  theme === "light" ? <><Button className="fs-6 border border-0" variant="outline-dark" onClick={toggleTheme}><FaMoon /></Button></> : <><Button className="fs-6 border border-0" variant="outline-light" onClick={toggleTheme}><FaSun /></Button></>
        }
      </div>
    </div>
  );
};

export default ThemeSetUp;
