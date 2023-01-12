import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "../components/NotFound";

describe("Not Found", () => {
  const Mock404 = () => {
    return (
      <Router>
        <NotFound />
      </Router>
    );
  };

  it("should render header and 404 link", () => {
    const { getByRole, getByTitle } = render(<Mock404 />);
    const container = getByTitle(/container/i);
    const header = getByRole("heading", {
      name: /oops, there is no page like this\./i,
    });
    const link = getByRole("link", {
      name: /to home/i,
    });
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("notfound");
    expect(header).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
