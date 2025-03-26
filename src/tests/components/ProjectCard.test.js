import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProjectCard from "../../components/projects/ProjectCard";

const mockProject = {
  id: "test-project",
  title: "Test Project",
  subtitle: "Test Subtitle",
  description: "Test Description",
  image: "/test-image.jpg",
  link: "/test-link",
  additionalImages: "/test-images",
  tags: ["test", "project"],
  category: "test-category",
  featured: true,
  date: "2024",
  location: "Test Location",
  client: "Test Client",
  year: 2024,
};

describe("ProjectCard", () => {
  it("renders project information correctly", () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    // Check if title is rendered
    expect(screen.getByText("Test Project")).toBeInTheDocument();

    // Check if subtitle is rendered
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();

    // Check if tags are rendered
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("project")).toBeInTheDocument();

    // Check if year and location are rendered
    expect(screen.getByText("2024 • Test Location")).toBeInTheDocument();
  });

  it("renders image with correct attributes", () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    const image = screen.getByAltText("Test Project");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.jpg");
  });
});
