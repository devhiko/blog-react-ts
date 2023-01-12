import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "../components/Contact";

describe("Contact", () => {
  const MockContact = () => {
    return (
      <Router>
        <Contact />
      </Router>
    );
  };

  it("should render Contact page", () => {
    const { getByText, getByTitle } = render(<MockContact />);
    const contact = getByTitle("contact");
    const chead = getByText(/Contact Us/);
    expect(contact).toHaveClass("contact");
    expect(chead).toBeInTheDocument();
  });
});
