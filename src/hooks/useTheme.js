import { useEffect, useState } from "react";

const themFromLocal = () => {
  return localStorage.getItem("theme") || "winter";
};

export function useTheme() {
  const [theme, setTheme] = useState(themFromLocal);
  const changeTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },[theme]);
  return { changeTheme };
}
