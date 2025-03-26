import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

const renderHome = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("Home Component", () => {
  test("renders hero section with title", () => {
    renderHome();
    expect(screen.getByText("Hagar Dolev")).toBeInTheDocument();
  });

  test("renders carousel navigation buttons", () => {
    renderHome();
    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test("changes slides when navigation buttons are clicked", () => {
    renderHome();
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);
    // Check if the second slide is visible
    expect(screen.getByText("Project 2")).toBeVisible();
  });

  test("renders about section", () => {
    renderHome();
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  test("renders featured work section", () => {
    renderHome();
    expect(screen.getByText("Featured Work")).toBeInTheDocument();
  });

  test("renders project cards", () => {
    renderHome();
    expect(screen.getAllByRole("img")).toHaveLength(2); // Two image projects
    expect(screen.getAllByRole("video")).toHaveLength(2); // Two video projects
  });
});
