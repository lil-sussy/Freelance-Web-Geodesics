import React, { useState, useEffect } from "react";
import { interpolatePath } from "d3-interpolate-path";
import { useSpring, animated } from "react-spring";


export type PotatoShapeList = {
    [key: number]: {
      color: string,
      top?: string,
      right?: string,
      bottom?: string,
      left?: string,
      startPath: string;
      endPath: string;
    }
  }

type PotatoShapeProps = {
  potato: PotatoShapeList, // replace 'any' with the actual type
  duration: number,
  advancement: number,
  width: number,
  height: number
};

const PotatoShape = ({ potato, duration, advancement, width, height }: PotatoShapeProps) => {
	const [key, setKey] = useState(Math.floor(advancement));
	const [progress, setProgress] = useSpring(() => ({
		value: 0,
		config: { duration: duration },
		onRest: () => setProgress({ value: 0 }),
	}));

	useEffect(() => {
		setKey(Math.floor(advancement));
	}, [advancement]);

	const pathInterpolator = interpolatePath(potato[key].startPath, potato[key].endPath);
	const pathInterpolatorTransitionForward = interpolatePath(potato[key + 1]?.startPath, potato[key + 1]?.endPath);

	const interpolatedPath = pathInterpolator(progress.value);
	const pathForward = pathInterpolatorTransitionForward(progress.value);

	const opacity = Math.min(Math.max(1 - (advancement - key), 0), 1);
	const opacityForward = Math.min(Math.max(advancement - key, 0), 1);

	return (
		<>
			<animated.svg
				viewBox="0 0 1500 900"
				width={width}
				height={height}
				style={{
					opacity,
					fill: potato[key].color,
					position: "absolute",
					top: potato[key].top,
					bottom: potato[key].bottom,
					left: potato[key].left,
					right: potato[key].right,
				}}
			>
				<path d={interpolatedPath} />
			</animated.svg>
			{potato[key + 1] && (
				<animated.svg
					viewBox="0 0 1500 900"
					width={width}
					height={height}
					style={{
						opacity: opacityForward,
						fill: potato[key + 1].color,
						position: "absolute",
						top: potato[key + 1].top,
						bottom: potato[key + 1].bottom,
						left: potato[key + 1].left,
						right: potato[key + 1].right,
					}}
				>
					<path d={pathForward} />
				</animated.svg>
			)}
		</>
	);
};

export default PotatoShape;
