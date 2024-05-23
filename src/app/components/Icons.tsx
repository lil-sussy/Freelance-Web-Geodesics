import React from "react";
import arrow from "./arrow.svg"; // Ensure the path is correct for your project
import styles from "./Icons.module.scss";

const Arrow = () => {
	return (
		<div className={styles.Frame57}>
			<img className={styles.Vector} src={arrow} alt="arrow" />
		</div>
	);
};

export { Arrow };
