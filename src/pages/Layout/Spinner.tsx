import React, { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  position: "fixed",
  top: "50%",
  left: "50%",
};

const Spinner = () => {
  return <HashLoader cssOverride={override} color="#845ef7" />;
};

export default Spinner;
