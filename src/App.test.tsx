import { fireEvent, render, screen, within } from "@testing-library/react";
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
    expect(screen.getByRole("link", { name: "作品" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "精选项目" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "交互媒体" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "展开 On-Call Agent" }));
    expect(screen.getAllByText("问题").length).toBeGreaterThan(0);
    expect(screen.getAllByText("构建").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /中文简历 PDF/i }).length).toBeGreaterThan(0);
    expect(
      screen
        .getAllByRole("link", { name: /中文简历 PDF/i })
        .every((link) => link.getAttribute("href") === "/Ma-Jiatong-Resume-ZH.pdf"),
    ).toBe(true);
    expect(screen.getByRole("button", { name: "切换语言为英文" })).toBeInTheDocument();
  });

  it("switches the lab mode and updates the hero focus", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Creative Tech" }));

    expect(screen.getByRole("button", { name: "Creative Tech" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText(/interactive media systems/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured lab track: Circuit Hero/i)).toBeInTheDocument();
  });

  it("filters projects by category", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Music & ML" }));

    const labGrid = screen.getByLabelText("Project laboratory");
    expect(within(labGrid).getByText("JiuGong Melody Generation")).toBeInTheDocument();
    expect(within(labGrid).getByText("Pipa AMT Evaluation")).toBeInTheDocument();
    expect(within(labGrid).queryByText("On-Call Agent")).not.toBeInTheDocument();
  });

  it("expands a project card to show problem, built, and impact details", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Expand On-Call Agent" }));

    const card = screen.getByLabelText("On-Call Agent project card");
    expect(within(card).getByText("Problem")).toBeInTheDocument();
    expect(within(card).getByText("Built")).toBeInTheDocument();
    expect(within(card).getByText("Impact")).toBeInTheDocument();
    expect(within(card).getByText(/traceable incident workflow/i)).toBeInTheDocument();
  });

  it("opens and closes a case file drawer", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Open On-Call Agent case file" }));

    const dialog = screen.getByRole("dialog", { name: "On-Call Agent case file" });
    expect(within(dialog).getByText("Case File")).toBeInTheDocument();
    expect(within(dialog).getAllByText(/retrieval, semantic recall/i).length).toBeGreaterThan(0);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("dialog", { name: "On-Call Agent case file" })).not.toBeInTheDocument();
  });

  it("exposes the primary links for works, GitHub, and resume", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /Selected Lab Work/i })).toHaveAttribute(
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
        .every((link) => link.getAttribute("href") === "/CV_Ma_Jiatong.pdf"),
    ).toBe(true);
  });

  it("renders selected works and the key portfolio sections", () => {
    render(<App />);

    for (const title of [
      "Selected Lab Work",
      "Project Laboratory",
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
