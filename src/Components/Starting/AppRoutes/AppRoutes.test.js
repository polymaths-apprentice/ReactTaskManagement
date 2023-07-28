import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

jest.mock("../../NavbarComponent/NavBar", () => () => <div>Mocked NavBar</div>);
jest.mock("../../HomeComponent/HomeComponent", () => () => (
  <div>
    Mocked HomeComponent
    <div>Mocked TaskInformation</div>
    <div>Mocked CategorySection</div>
  </div>
));
jest.mock("../../Form/Create Task/CreateTask", () => () => (
  <div>Mocked CreateTask</div>
));

jest.mock("../../Form/Edit tasks/EditTask", () => () => (
  <div>Mocked EditTask</div>
));

test("renders AppRoutes with NavBar and home route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/home"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const navBarElement = getByText(/Mocked NavBar/i);
  expect(navBarElement).toBeInTheDocument();

  const homeElement = getByText(/Mocked HomeComponent/i);
  expect(homeElement).toBeInTheDocument();

  const taskInfoElement = getByText(/Mocked TaskInformation/i);
  expect(taskInfoElement).toBeInTheDocument();

  const categorySectionElement = getByText(/Mocked CategorySection/i);
  expect(categorySectionElement).toBeInTheDocument();
});

test("renders AppRoutes with NavBar and create task route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/create"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const navBarElement = getByText(/Mocked NavBar/i);
  expect(navBarElement).toBeInTheDocument();

  const createTaskElement = getByText(/Mocked CreateTask/i);
  expect(createTaskElement).toBeInTheDocument();
});

test("renders AppRoutes with NavBar and edit task route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/edit/123"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const navBarElement = getByText(/Mocked NavBar/i);
  expect(navBarElement).toBeInTheDocument();

  const editTaskElement = getByText(/Mocked EditTask/i);
  expect(editTaskElement).toBeInTheDocument();
});
