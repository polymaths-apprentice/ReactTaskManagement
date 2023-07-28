import { render } from "@testing-library/react";
import HomeComponent from "./HomeComponent";

jest.mock("../TaskFiltersAndInformation/TaskInformation", () => () => (
  <div>Mocked TaskInformation</div>
));
jest.mock("../TaskCategorySection/TaskCategorySection", () => () => (
  <div>Mocked CategorySection</div>
));

test("renders home component with nested components", () => {
  const { getByText } = render(<HomeComponent />);

  const taskInfoElement = getByText(/Mocked TaskInformation/i);
  expect(taskInfoElement).toBeInTheDocument();

  const categorySectionElement = getByText(/Mocked CategorySection/i);
  expect(categorySectionElement).toBeInTheDocument();
});
