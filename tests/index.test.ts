import { describe, test, expect } from "bun:test";
describe("ip-whitelist-gateway", () => {
  test("module loads", async () => { const m = await import("./index"); expect(m).toBeDefined(); });
});
