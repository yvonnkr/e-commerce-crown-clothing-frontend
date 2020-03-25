import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

// import React from "react";
// import { CustomButtonContainer } from "./CustomButton.styles";

// const CustomButton = ({ children, ...props }) => {
//   return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
// };
