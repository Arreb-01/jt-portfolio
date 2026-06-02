import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("JT portfolio", () => {
  it("renders the public JT identity without exposing the real name on the page", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "JT" })).toBeInTheDocument();
    expect(screen.getByText("AI Application Builder")).toBeInTheDocument();
    expect(screen.getByText("Digital Media Technologist")).toBeInTheDocument();
    expect(
      screen.getByText(/I build creative AI tools, interactive systems/),
    ).toBeInTheDocument();
    expect(screen.queryByText(/我关注 AI 工具/)).not.toBeInTheDocument();
  });

  it("switches between English and Chinese with one button", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /switch language to chinese/i }));

    expect(screen.getByText(/我关注 AI 工具、交互系统与数据驱动的创意项目/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "切换语言为英文" })).toBeInTheDocument();
  });

  it("exposes the primary links for works, GitHub, and resume", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /Selected Works/i })).toHaveAttribute(
      "href",
      "#selected-works",
    );
    expect(
      screen
        .getAllByRole("link", { name: /GitHub/i })
        .some((link) => link.getAttribute("href") === "https://github.com/Arreb-01"),
    ).toBe(true);
    expect(
      screen
        .getAllByRole("link", { name: /Resume PDF/i })
        .some((link) => link.getAttribute("href") === "/JT-Resume.pdf"),
    ).toBe(true);
  });

  it("renders selected works and the key portfolio sections", () => {
    render(<App />);

    for (const title of [
      "Selected Works",
      "AI & ML Projects",
      "Interactive Media",
      "Research & Recognition",
    ]) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }

    for (const project of [
      "On-Call Agent",
      "AI Sourcing",
      "Circuit Hero",
      "RAG Shopping Guide",
    ]) {
      expect(screen.getAllByText(project).length).toBeGreaterThan(0);
    }
  });
});
