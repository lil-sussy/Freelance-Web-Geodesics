import React, { useState, useEffect } from "react";
import { interpolatePath } from "d3-interpolate-path";

type PotatoShape = {
	color: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	startPath: string;
	endPath: string;
};

type PotatoShapeList = {
	[key: number]: PotatoShape;
};

type PotatoAnimationProps = {
	potato: PotatoShapeList;
	duration: number;
	advancement: number;
	width: number;
	height: number;
};

const PotatoAnimation: React.FC<PotatoAnimationProps> = ({ potato, duration, advancement, width, height }) => {
	const [progress, setProgress] = useState(0);
	const key = Math.floor(advancement);

	const currentShape = potato[key];
	const nextShape = potato[key + 1];

	const pathInterpolator = interpolatePath(currentShape.startPath, currentShape.endPath);
	const pathInterpolatorTransitionForward = nextShape ? interpolatePath(nextShape.startPath, nextShape.endPath) : null;

	const interpolatedPath = pathInterpolator(progress);
	const pathForward = pathInterpolatorTransitionForward ? pathInterpolatorTransitionForward(progress) : "";

	const opacity = Math.min(Math.max(1 - (advancement - key), 0), 1);
	const opacityForward = Math.min(Math.max(advancement - key, 0), 1);

	useEffect(() => {
		const start = performance.now();
		const animate = (time: number) => {
			const elapsed = time - start;
			const newProgress = (elapsed % duration) / duration;
			setProgress(newProgress);
			requestAnimationFrame(animate);
		};
		requestAnimationFrame(animate);
	}, [duration]);

	return (
		<div>
			<svg viewBox="0 0 1500 900" width={width} height={height} style={{ opacity, fill: currentShape.color, top: currentShape.top, bottom: currentShape.bottom, left: currentShape.left, right: currentShape.right }}>
				<path d={interpolatedPath} />
			</svg>
			{pathForward && nextShape && (
				<svg viewBox="0 0 1500 900" width={width} height={height} style={{ opacity: opacityForward, fill: nextShape.color, top: nextShape.top, bottom: nextShape.bottom, left: nextShape.left, right: nextShape.right }}>
					<path d={pathForward} />
				</svg>
			)}
		</div>
	);
};

export default PotatoAnimation;
