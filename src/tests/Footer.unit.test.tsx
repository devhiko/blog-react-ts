import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";

describe("Footer", () => {
  const MockFooter = () => {
    return (
      <Router>
        <Footer />
      </Router>
    );
  };

  it("should render Footer page", () => {
    const { getByText, getByTitle } = render(<MockFooter />);
    const ftr = getByTitle("footer");
    const footer = getByText(/Paper Blog Inc\./);
    expect(ftr).toHaveClass("footer");
    expect(footer).toBeInTheDocument();
  });
});
