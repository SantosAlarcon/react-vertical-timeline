import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import VerticalTimeline from "../src/VerticalTimeline";

describe("VerticalTimeline", () => {
	beforeEach(() => {
		document.addEventListener("DOMContentLoaded", () => {
			// Aquí puedes acceder a document de forma segura
			console.log(document.body);
		});
	});

	it("should have the vertical-timeline classname", () => {
		render(
			<VerticalTimeline>
				<div>test1</div>
				<div>test2</div>
			</VerticalTimeline>,
		);
		expect(screen.getByRole("presentation")).toHaveClass("vertical-timeline");
	});

	it("should have the vertical-timeline--animate classname", () => {
		render(
			<VerticalTimeline>
				<div>test1</div>
				<div>test2</div>
			</VerticalTimeline>,
		);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline--animate",
		);
	});

	it("should not have the vertical-timeline--animate classname", () => {
		render(
			<VerticalTimeline animate={false}>
				<div>test1</div>
				<div>test2</div>
			</VerticalTimeline>,
		);
		expect(screen.getByRole("presentation")).not.toHaveClass(
			"vertical-timeline--animate",
		);
	});

	it("should have the vertical-timeline--two-columns classname by default", () => {
		render(
			<VerticalTimeline>
				<div>test1</div>
				<div>test2</div>
			</VerticalTimeline>,
		);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline--two-columns",
		);
	});

	it("should have the vertical-timeline--two-columns classname with layout=2-columns", () => {
		render(
			<VerticalTimeline layout="2-columns">
				<div>test1</div>
				<div>test2</div>
			</VerticalTimeline>,
		);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline--two-columns",
		);
	});

	it("should have the vertical-timeline--one-column-left classname with layout=1-column-left", () => {
		render(
			<VerticalTimeline layout="1-column-left">
				<div>test1</div>
				<div>test2</div>
			</VerticalTimeline>,
		);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline--one-column-left",
		);
	});

	it("should have the vertical-timeline--one-column-left classname by default with layout=1-column", () => {
		render(
			<VerticalTimeline layout="1-column">
				<div>test1</div>
				<div>test2</div>
			</VerticalTimeline>,
		);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline--one-column-left",
		);
	});

	it("should have the vertical-timeline--one-column-right classname with layout=1-column-right", () => {
		render(
			<VerticalTimeline layout="1-column-right">
				<div>test1</div>
				<div>test2</div>
			</VerticalTimeline>,
		);
		expect(screen.getByRole("presentation")).toHaveClass(
			"vertical-timeline--one-column-right",
		);
	});
});
