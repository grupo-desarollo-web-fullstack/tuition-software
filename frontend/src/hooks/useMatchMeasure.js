import { useEffect, useState } from "react";

export default function useMatchMeasure(measure, action) {
  if (!measure || !action) return null;
  const getMatch = () => {
    if (action === "min") return window.innerWidth >= measure;
    if (action === "max") return window.innerWidth <= measure;
  };
  const [isMatchMeasure, setIsMatchMeasure] = useState(getMatch);
  useEffect(() => {
    const handleResize = () => setIsMatchMeasure(getMatch);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMatchMeasure;
}
