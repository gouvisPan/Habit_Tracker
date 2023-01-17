import React, { CSSProperties } from "react";
import { HashLoader } from "react-spinners";
import useWindowSize from "../../hooks/useWindowSize";
import "./Spinner.scss";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Spinner = () => {
  const [height, width] = useWindowSize();

  return (
    <div className="spinner-loader">
      <HashLoader
        cssOverride={override}
        color={`${width > 1000 ? "#20c997" : "#d796aa"}`}
      />
    </div>
  );
};

export default Spinner;
