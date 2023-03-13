import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Navbar from ".";

describe("Navbar", () => {
  it("renders logo and menu button on small screens", () => {
    // change window width to be small
    global.innerWidth = 500;
    fireEvent(window, new Event("resize"));

    render(<Navbar />);

    const logoElement = screen.getByText(/logo/i);
    const menuButton = screen.getByText(/menu/i);

    expect(logoElement).toBeInTheDocument();
    expect(menuButton).toBeInTheDocument();
  });

  it("renders resume and look at me buttons on large screens", () => {
    // change window width to be large
    global.innerWidth = 1024;
    fireEvent(window, new Event("resize"));

    render(<Navbar />);

    const resumeButton = screen.getByText(/resume/i);
    const lookAtMeButton = screen.getByText(/look at me/i);

    expect(resumeButton).toBeInTheDocument();
    expect(lookAtMeButton).toBeInTheDocument();
  });

  it("applies appropriate classes for responsiveness", () => {
    const navbar = render(<Navbar />);

    // assert small screen behavior
    global.innerWidth = 500;
    fireEvent(window, new Event("resize"));
    expect(navbar.container.firstChild).toHaveClass(
      "flex items-center justify-between h-16"
    );

    // assert large screen behavior
    global.innerWidth = 1024;
    fireEvent(window, new Event("resize"));
    expect(screen.getByText(/menu/i)).toHaveClass("max-sm:hidden");
  });
});
