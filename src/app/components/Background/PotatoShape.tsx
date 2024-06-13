import React, { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { interpolate } from "flubber";
import { useAnimation } from "../AnimationContext";
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

const PotatoShape: React.FC<PotatoShapeProps> = ({ potato, duration, advancement, width, height }) => {
    const { cursorPosition } = useAnimation();
    const nodeRef = useRef<HTMLDivElement>(null);
    const [inProp, setInProp] = useState(false);
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        setInProp(true);
    }, [advancement]);

    const remToPx = (rem: string | undefined) => {
        if (!rem) return 0;
        const fontSize = getComputedStyle(document.documentElement).fontSize;
        return parseFloat(rem) * parseFloat(fontSize);
    };

    const pxToRem = (px: number) => {
        const fontSize = getComputedStyle(document.documentElement).fontSize;
        return px / parseFloat(fontSize);
    };

    const calculateFleeingPosition = (potato: PotatoShape, cursorPosition: { x: number; y: number }) => {
        const topPx = remToPx(potato.top);
        const leftPx = remToPx(potato.left);
        const potatoCenter = {
            x: leftPx + width / 2,
            y: topPx + height / 2,
        };

        const directionVector = {
            x: potatoCenter.x - cursorPosition.x,
            y: potatoCenter.y - cursorPosition.y,
        };

        const length = Math.sqrt(directionVector.x ** 2 + directionVector.y ** 2);
        const normalizedVector = {
            x: directionVector.x / length,
            y: directionVector.y / length,
        };

        const fleeDistance = 50; // Distance to flee
        return {
            top: `${pxToRem(topPx + normalizedVector.y * fleeDistance)}rem`,
            left: `${pxToRem(leftPx + normalizedVector.x * fleeDistance)}rem`,
            bottom: potato.bottom,
            right: potato.right,
        };
    };

    useEffect(() => {
        const node = nodeRef.current;

        if (!node) return;

        const updatePosition = () => {
            const newPosition = calculateFleeingPosition(potato, cursorPosition);

            node.style.top = newPosition.top;
            node.style.left = newPosition.left;
            node.style.bottom = newPosition.bottom;
            node.style.right = newPosition.right;

            requestRef.current = requestAnimationFrame(updatePosition);
        };

        requestRef.current = requestAnimationFrame(updatePosition);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [cursorPosition, potato, width, height]);

    const opacity = Math.min(Math.max(1 + (advancement - potato.index), 0), 1) * 0.4;
    // const interpolator = interpolate(potato.startPath, potato.endPath);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
            {(state: string) => (
                <div
                    ref={nodeRef}
                    className="potato-wrapper"
                    style={{
                        color: potato.color,
                        top: potato.top,
                        bottom: potato.bottom,
                        left: potato.left,
                        right: potato.right,
                    }}
                >
                    <svg viewBox="0 0 1500 900" width={width} height={height} className="potato-shape" style={{ opacity }}>
                        <path d={potato.startPath} />
                        {/* <path d={interpolator(state === "entered" ? 1 : 0)} /> */}
                    </svg>
                </div>
            )}
        </Transition>
    );
};

export default PotatoShape;
