import React, { useState } from "react";
import Grid from "./components/Grid";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as farLightbulb } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((prevMode) => !darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <FontAwesomeIcon
        onClick={handleDarkMode}
        icon={darkMode ? faLightbulb : farLightbulb}
        size="2x"
      />

      <h1>{darkMode ? "dark" : "light"}</h1>
      <Grid />
    </div>
  );
}

export default App;
