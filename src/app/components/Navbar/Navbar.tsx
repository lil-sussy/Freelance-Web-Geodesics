import React from "react";
import logo from "./webgeodesicslogo.svg"; // Ensure the path is correct for your project
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<>
			{/* Desktop Navbar */}
			<div className={styles.navbar}>
				<div className={`${styles.item} ${styles.logoItems}`}>
					<img className={styles.logo} src={logo} alt="Web Geodesics Logo" />
				</div>
				<div className={`${styles.item} ${styles.selected}`}>YAN REGOJO</div>
				<div className={styles.item}>PORTFOLIO</div>
				<div className={styles.item}>SERVICES</div>
				{/* <div className={styles.item}>ABOUT ME</div> */}
				<div className={styles.item}>CONTACT</div>
				<div className={styles.rectangle}></div>
			</div>

			{/* Mobile Navbar */}
			<div className={styles.Navbar}>
				<div className={styles.NavbarContainer}>
					<div className={styles.BurgerMenu}>
						<div className={styles.Rectangle38}></div>
						<div className={styles.Rectangle39}></div>
						<div className={styles.Rectangle40}></div>
					</div>
					<div className={styles.LogoMiddleForPhone}>
						<img className={styles.artboard} src={logo} alt="Web Geodesics Logo" />
						<div className={styles.WebGeodesics}>
							WEB
							<br />
							GEODESICS
						</div>
					</div>
					<div className={styles.Actions}>
						<Button style="primary">Contact</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
