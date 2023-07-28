import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // To extend Jest's expect with additional matchers
import Loading from "./Loading";

describe("Loading Component", () => {
  it("should render the loading message", () => {
    const { getByText } = render(<Loading />);

    const mainHeading = getByText(/Your Ultimate Task Management Solution!/i);
    expect(mainHeading).toBeInTheDocument();

    const paragraphContent = getByText(
      /Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis obcaecati aliquid ex/i
    );
    expect(paragraphContent).toBeInTheDocument();

    const mainDiv = getByText(
      /Your Ultimate Task Management Solution!/i
    ).parentElement;
    expect(mainDiv).toHaveClass("mainDiv");
  });
});
