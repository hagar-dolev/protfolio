import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/layout/Header";
import { ThemeProvider } from "../hooks/useTheme";

// Mock the useTheme hook
jest.mock("../hooks/useTheme", () => ({
  useTheme: () => ({
    theme: "light",
    toggleTheme: jest.fn(),
  }),
}));

const renderHeader = () => {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("Header Component", () => {
  test("renders logo text", () => {
    renderHeader();
    expect(screen.getByText("Hagar Dolev")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    renderHeader();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Research")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders theme toggle button", () => {
    renderHeader();
    expect(screen.getAllByLabelText("Toggle theme")).toHaveLength(2); // One for desktop, one for mobile
  });

  test("renders hamburger menu button on mobile", () => {
    renderHeader();
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  test("opens mobile menu when hamburger is clicked", () => {
    renderHeader();
    const menuButton = screen.getByLabelText("Open menu");
    fireEvent.click(menuButton);
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
  });
});
