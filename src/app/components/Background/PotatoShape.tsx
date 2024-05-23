import React, { useEffect, useState } from "react";
import { interpolatePath } from "d3-interpolate-path";
import { easeCubicInOut } from "d3-ease";
import { transition } from "d3-transition";
import PropTypes from "prop-types";
import style from "./PotatoShape.module.scss";

type PotatoShapeProps = {
	potato: any; // replace 'any' with the actual type
	duration: number;
	advancement: number;
	width: number;
	height: number;
};

const PotatoShape = ({ potato, duration, advancement, width, height }: PotatoShapeProps) => {
	const [key, setKey] = useState(Math.floor(advancement));
	const [interpolatedPath, setInterpolatedPath] = useState(potato[key].startPath);
	const [pathForward, setPathForward] = useState(potato[key + 1]?.startPath);
	const [opacity, setOpacity] = useState(Math.min(Math.max(1 - (advancement - key), 0), 1));
	const [opacityForward, setOpacityForward] = useState(Math.min(Math.max(advancement - key, 0), 1));

	useEffect(() => {
		const pathInterpolator = interpolatePath(potato[key].startPath, potato[key].endPath);
		const pathInterpolatorTransitionForward = interpolatePath(potato[key + 1]?.startPath, potato[key + 1]?.endPath);

		const t = transition()
			.duration(duration)
			.ease(easeCubicInOut)
			.on("start", () => {
				setKey(Math.floor(advancement));
			})
			.on("end", () => {
				setKey(Math.floor(advancement));
			})
			.tween("attr:d", () => {
				return (t: number) => {
					setInterpolatedPath(pathInterpolator(t));
					setPathForward(pathInterpolatorTransitionForward(t));
				};
			});

		t.end();
	}, [advancement, duration, key, potato]);

	useEffect(() => {
		setOpacity(Math.min(Math.max(1 - (advancement - key), 0), 1));
		setOpacityForward(Math.min(Math.max(advancement - key, 0), 1));
	}, [advancement, key]);

	return (
		<div>
			<svg viewBox="0 0 1500 900" width={width} height={height} style={{ opacity, fill: potato[key].color, top: potato[key].top, bottom: potato[key].bottom, left: potato[key].left, right: potato[key].right }}>
				<path d={interpolatedPath} />
			</svg>
			{pathForward && (
				<svg viewBox="0 0 1500 900" width={width} height={height} style={{ opacity: opacityForward, fill: potato[key + 1]?.color, top: potato[key + 1].top, bottom: potato[key + 1].bottom, left: potato[key + 1].left, right: potato[key + 1].right }}>
					<path d={pathForward} />
				</svg>
			)}
		</div>
	);
};

PotatoShape.propTypes = {
	potato: PropTypes.object.isRequired,
	duration: PropTypes.number.isRequired,
	advancement: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export default PotatoShape;
