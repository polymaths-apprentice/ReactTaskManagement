// App.test.js
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import App from "./App";

jest.mock("./Components/Starting/LoadingComponent/Loading", () => () => (
  <div>Loading Component Mock</div>
));

jest.mock("./Components/Starting/AppRoutes/AppRoutes", () => () => (
  <div>AppRoutes Mock</div>
));

test("renders Loading component when loading", () => {
  const { getByText } = render(<App />);
  const loadingElement = getByText(/Loading Component Mock/i);
  expect(loadingElement).toBeInTheDocument();
});

test("renders AppRoutes when not loading", async () => {
  const { getByText } = render(<App />);
  await waitForElementToBeRemoved(() => getByText(/Loading Component Mock/i));
  const appRoutesElement = getByText(/AppRoutes Mock/i);
  expect(appRoutesElement).toBeInTheDocument();
});
