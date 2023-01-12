import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../components/About";

describe("About", () => {
  const MockAbout = () => {
    return (
      <Router>
        <About />
      </Router>
    );
  };

  it("should render About page", () => {
    const { getByText, getByTitle } = render(<MockAbout />);
    const about = getByTitle("about");
    const lorem = getByText(/Lorem ipsum/);
    expect(about).toHaveClass("about");
    expect(lorem).toBeInTheDocument();
  });
});
