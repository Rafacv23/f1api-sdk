import { describe, it, expect } from "vitest"
import F1Api from "../src"

const f1Api = new F1Api()

describe("Circuits endpoints", () => {
  it("returns all the f1 circuits", async () => {
    const data = await f1Api.getCircuits()
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        limit: expect.any(Number),
        offset: expect.any(Number),
        total: expect.any(Number),
        url: expect.any(String),
        circuits: expect.arrayContaining([
          expect.objectContaining({
            circuitId: expect.any(String),
            circuitName: expect.any(String),
            country: expect.any(String),
            city: expect.any(String),
            circuitLength: expect.any(Number),
            firstParticipationYear: expect.any(Number),
            numberOfCorners: expect.any(Number),
            lapRecord: expect.any(String),
            fastestLapDriverId: expect.any(String),
            fastestLapTeamId: expect.any(String),
            fastestLapYear: expect.any(Number),
            url: expect.any(String),
          }),
        ]),
      })
    )
  }),
    it("returns f1 circuits with limit and offset", async () => {
      const data = await f1Api.getCircuits({ limit: 1, offset: 1 })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: 1,
          offset: 1,
          total: expect.any(Number),
          url: expect.any(String),
          circuits: expect.arrayContaining([
            expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              country: expect.any(String),
              city: expect.any(String),
              circuitLength: expect.any(Number),
              firstParticipationYear: expect.any(Number),
              numberOfCorners: expect.any(Number),
              lapRecord: expect.any(String),
              fastestLapDriverId: expect.any(String),
              fastestLapTeamId: expect.any(String),
              fastestLapYear: expect.any(Number),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns specific f1 circuit based on his id", async () => {
      const data = await f1Api.getCircuit({ id: "monza" })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          total: 1,
          url: expect.any(String),
          circuit: expect.arrayContaining([
            expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              country: expect.any(String),
              city: expect.any(String),
              circuitLength: expect.any(Number),
              firstParticipationYear: expect.any(Number),
              numberOfCorners: expect.any(Number),
              lapRecord: expect.any(String),
              fastestLapDriverId: expect.any(String),
              fastestLapTeamId: expect.any(String),
              fastestLapYear: expect.any(Number),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 circuits by year", async () => {
      const data = await f1Api.getCircuitsByYear({ year: 2022 })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          url: expect.any(String),
          circuits: expect.arrayContaining([
            expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              country: expect.any(String),
              city: expect.any(String),
              circuitLength: expect.any(Number),
              firstParticipationYear: expect.any(Number),
              numberOfCorners: expect.any(Number),
              lapRecord: expect.any(String),
              fastestLapDriverId: expect.any(String),
              fastestLapTeamId: expect.any(String),
              fastestLapYear: expect.any(Number),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 circuits by year, with limit and offset", async () => {
      const data = await f1Api.getCircuitsByYear({
        year: 2022,
        limit: 1,
        offset: 1,
      })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: 1,
          offset: 1,
          total: 1,
          url: expect.any(String),
          circuits: expect.arrayContaining([
            expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              country: expect.any(String),
              city: expect.any(String),
              circuitLength: expect.any(Number),
              firstParticipationYear: expect.any(Number),
              numberOfCorners: expect.any(Number),
              lapRecord: expect.any(String),
              fastestLapDriverId: expect.any(String),
              fastestLapTeamId: expect.any(String),
              fastestLapYear: expect.any(Number),
              url: expect.any(String),
            }),
          ]),
        })
      )
    })
})
