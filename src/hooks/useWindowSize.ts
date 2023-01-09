import React, { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
};

export default useWindowSize;