// @ts-check
import { test, expect } from "@playwright/test";
import config from "../../src/config/index.js";

test.describe("Testeo de la ruta matricula", async function () {
  test("GET /", async ({ request }) => {
    const res = await request.get("/matricula", {
      headers: {
        Authorization: `Bearer ${config.tokenUserTest}`,
      },
    });
    expect(res.ok()).toBeTruthy();
  });
  test("POST /", async ({ request }) => {
    const res = await request.post("/matricula", {
      headers: {
        Authorization: `Bearer ${config.tokenUserTest}`,
      },
      data: {
        estudiante_id: 15,
        curso_id: 6,
      },
    });
    expect(res.ok()).toBeTruthy();
  });
});
