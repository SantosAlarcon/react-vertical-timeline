import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import VerticalTimelineElement from "../src/VerticalTimelineElement";

describe("VerticalTimelineElement", () => {
	it("should render with the correct class", () => {
		render(<VerticalTimelineElement />);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline-element",
		);
	});

	it("should render with the right position class", () => {
		render(<VerticalTimelineElement position="right" />);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline-element--right",
		);
	});

	it("should add the no-children class when no children are provided", () => {
		render(<VerticalTimelineElement />);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline-element--no-children",
		);
	});

	it("should add the no-children class when only a date is provided", () => {
		render(<VerticalTimelineElement date="2018" />);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline-element--no-children",
		);
	});

	it("should not add the no-children class when children are provided", () => {
		render(
			<VerticalTimelineElement>
				<div>My Child</div>
			</VerticalTimelineElement>,
		);
		expect(screen.getByRole("presentation")).not.toHaveClass(
			"vertical-timeline-element--no-children",
		);
	});
});
