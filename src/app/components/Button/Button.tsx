import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ style, children }: { style: "primary" | "" | ""; children: React.ReactNode }) => {
	return <NextUIButton className={styles[style]}>{children}</NextUIButton>;
};

Button.propTypes = {
	style: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
	children: PropTypes.node.isRequired,
};

export default Button;
