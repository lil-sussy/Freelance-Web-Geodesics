import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<>
			{/* Desktop Navbar */}
			<div className={styles.navbar}>
				<div className={`${styles.item} ${styles.logoItems}`}>
					<img className={styles.logo} src={"./images/webgeodesicslogo.svg"} alt="Web Geodesics Logo" />
				</div>
				<div className={`${styles.item} ${styles.selected}`}>AI Developer</div>
				<div className={styles.item}>Web dev Agency</div>
				<div className={styles.item}>Portfolio</div>
				{/* <div className={styles.item}>ABOUT ME</div> */}
				<div className={styles.item}>Language : EN</div>
				<div className={styles.item}>Contact</div>
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
						<img className={styles.artboard} src={"./images/webgeodesicslogo.svg"} alt="Web Geodesics Logo" />
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
