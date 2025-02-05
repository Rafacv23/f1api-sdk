import { describe, it, expect } from "vitest"
import F1Api from "../src"

const f1Api = new F1Api()

describe("Seasons endpoints", () => {
  it("returns all the f1 seasons", async () => {
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

  it("returns f1 seasons with limit and offset", async () => {
    const data = await f1Api.getSeasons({ limit: 1, offset: 1 })
    console.log(data)
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        url: expect.any(String),
        limit: 1,
        offset: 1,
        total: expect.any(Number),
        championships: expect.arrayContaining([
          expect.objectContaining({
            championshipId: expect.any(String),
            championshipName: expect.any(String),
            url: expect.any(String),
            year: expect.any(Number),
          }),
        ]),
      })
    )
  })
})
