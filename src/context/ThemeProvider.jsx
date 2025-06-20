import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    console.log("switched theme");

    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    console.log("Saved theme from localStorage:", savedTheme);
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to light theme if no preference is saved
      setTheme("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
