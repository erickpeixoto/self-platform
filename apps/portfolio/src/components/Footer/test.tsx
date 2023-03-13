import { render, screen } from "@testing-library/react";
import React from "react";

import Footer from "../Footer";

describe("Footer Component", () => {
  test("renders default Footer", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Footer/i);

    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass("text-white");
  });
});
