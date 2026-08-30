import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("p-4", "text-sm");
    expect(result).toBe("p-4 text-sm");
  });

  it("handles conditional classes", () => {
    const isPrimary = true;
    const isSecondary = false;
    const result = cn("btn", isPrimary && "btn-primary", isSecondary && "btn-secondary");
    expect(result).toBe("btn btn-primary");
  });

  it("resolves conflicting tailwind classes cleanly", () => {
    const result = cn("p-4", "p-8");
    expect(result).toBe("p-8");
  });
});
