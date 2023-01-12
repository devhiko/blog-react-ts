import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";

describe("Home", () => {
  const MockHome = () => {
    return (
      <Router>
        <Home />
      </Router>
    );
  };

  it("should render Home page", () => {
    const { debug, getByRole, getByTitle } = render(<MockHome />);
    debug();
    const home = getByTitle("home");
    const header = getByRole("heading", { name: /all blogs/i });
    expect(home).toHaveClass("blogs");
    expect(header).toBeInTheDocument();
  });
});
