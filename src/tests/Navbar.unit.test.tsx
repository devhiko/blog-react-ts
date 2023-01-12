import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  const MockNavbar = () => {
    return (
      <Router>
        <Navbar />
      </Router>
    );
  };

  it("should render navbar and links in it", () => {
    const { getByRole, getAllByRole, getByTitle } = render(<MockNavbar />);
    const nav = getByTitle("nav");
    const links = getByRole("list");
    const linkItems = getAllByRole("link");
    expect(links).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass("navbar");
    expect(linkItems).toHaveLength(3);
    expect(linkItems[0]).toHaveAttribute("href", "/about");
  });
});
