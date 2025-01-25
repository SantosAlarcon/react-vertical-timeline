import React from "react";
import classNames from "classnames";
import { InView } from "react-intersection-observer";

export interface VerticalTimelineElementProps {
	children?: React.ReactNode | React.ReactNode[];
	className?: string;
	contentArrowStyle?: string;
	contentStyle?: string;
	date?: React.ReactNode;
	dateClassName?: string;
	icon?: React.ReactNode;
	iconClassName?: string;
	iconOnClick?: () => void;
	onTimelineElementClick?: () => void;
	iconStyle?: string;
	id?: string;
	position?: "left" | "right";
	style?: React.CSSProperties;
	textClassName?: string;
	visible?: boolean;
	shadowSize?: "small" | "medium" | "large";
	intersectionObserverProps?: {
		root: React.RefObject<HTMLElement>;
		rootMargin: string;
		threshold: number;
		triggerOnce: boolean;
	};
}

const VerticalTimelineElement = ({
	children = "",
	className = "",
	contentArrowStyle = null,
	contentStyle = null,
	date = "",
	dateClassName = "",
	icon = null,
	iconClassName = "",
	iconOnClick = null,
	onTimelineElementClick = null,
	iconStyle = null,
	id = "",
	position = "",
	style = null,
	textClassName = "",
	intersectionObserverProps = {
		rootMargin: "0px 0px -40px 0px",
		triggerOnce: true,
	},
	visible = false,
	shadowSize = "small", // small | medium | large
}: VerticalTimelineElementProps) => (
	<InView {...intersectionObserverProps}>
		{({ inView, ref }) => (
			<div
				ref={ref}
				id={id}
				className={classNames(className, "vertical-timeline-element", {
					"vertical-timeline-element--left": position === "left",
					"vertical-timeline-element--right": position === "right",
					"vertical-timeline-element--no-children": children === "",
				})}
				style={style}
			>
				<React.Fragment>
					<span // eslint-disable-line jsx-a11y/no-static-element-interactions
						style={iconStyle}
						onClick={iconOnClick}
						className={classNames(
							iconClassName,
							"vertical-timeline-element-icon",
							`shadow-size-${shadowSize}`, // for shadow size
							{
								"bounce-in": inView || visible,
								"is-hidden": !(inView || visible),
							},
						)}
					>
						{icon}
					</span>
					<div
						style={contentStyle}
						onClick={onTimelineElementClick}
						className={classNames(
							textClassName,
							"vertical-timeline-element-content",
							{
								"bounce-in": inView || visible,
								"is-hidden": !(inView || visible),
							},
						)}
					>
						<div
							style={contentArrowStyle}
							className="vertical-timeline-element-content-arrow"
						/>
						{children}
						<span
							className={classNames(
								dateClassName,
								"vertical-timeline-element-date",
							)}
						>
							{date}
						</span>
					</div>
				</React.Fragment>
			</div>
		)}
	</InView>
);

export default VerticalTimelineElement;
