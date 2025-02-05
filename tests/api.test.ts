import { describe, it, expect } from "vitest"
import F1Api from "../src"

const f1Api = new F1Api({ baseUrl: "https://f1api.dev/api" })

describe("F1Api", () => {
  it("debería obtener datos correctamente", async () => {
    const data = await f1Api.getSeasons()
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        championships: expect.arrayContaining([
          expect.objectContaining({
            championshipId: expect.any(String),
            championshipName: expect.any(String),
            url: expect.any(String),
            year: expect.any(Number),
          }),
        ]),
        limit: expect.any(Number),
        offset: expect.any(Number),
        total: expect.any(Number),
        url: expect.any(String),
      })
    )
  })
})
