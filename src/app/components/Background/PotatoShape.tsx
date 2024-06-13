import React, { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { interpolate } from "flubber";
import "./PotatoShape.scss";

export type PotatoShape = {
	index: number;
	color: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	startPath: string;
	endPath: string;
};

type PotatoShapeProps = {
	potato: PotatoShape;
	duration: number;
	advancement: number;
	width: number;
	height: number;
};

const PotatoShape = ({ potato, duration, advancement, width, height }: PotatoShapeProps) => {
	const nodeRef = useRef(null);
	const [inProp, setInProp] = useState(false);

	useEffect(() => {
		setInProp(true);
	}, [advancement]);

	const opacity = Math.min(Math.max(1 + (advancement - potato.index), 0), 1) * 0.4;
	const interpolator = interpolate(potato.startPath, potato.endPath);

	return (
		<Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
			{(state: string) => (
				<div
					ref={nodeRef}
					className="potato-wrapper"
					style={{
						top: potato.top,
						bottom: potato.bottom,
						left: potato.left,
						right: potato.right,
						color: potato.color,
					}}
				>
					<svg viewBox="0 0 1500 900" width={width} height={height} className="potato-shape" style={{ opacity }}>
						<path d={interpolator(state === "entered" ? 1 : 0)} />
					</svg>
				</div>
			)}
		</Transition>
	);
};

export default PotatoShape;
