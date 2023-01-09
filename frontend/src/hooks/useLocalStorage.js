import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue, isSuscribe = true) {
  const [initial, setInitial] = useState(true);
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return item;
    }
  });
  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    try {
      if (typeof valueToStore === "object") {
        localStorage.setItem(key, JSON.stringify(valueToStore));
        return;
      }
      localStorage.setItem(key, valueToStore);
    } catch {
      localStorage.setItem(key, valueToStore);
    }
  };
  const removeValue = () => {
    localStorage.removeItem(key);
  };
  useEffect(() => {
    if (isSuscribe) {
      const handleStorage = (e) => {
        const { newValue } = e;
        setInitial(false);
        if (!newValue) setStoredValue(undefined);
      };
      window.addEventListener("storage", handleStorage);
      return () => window.removeEventListener("storage", handleStorage);
    }
  }, []);
  return [
    storedValue,
    setValue,
    {
      initial,
      removeValue,
    },
  ];
}
