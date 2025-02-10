import { describe, it, expect } from "vitest"
import { F1Api } from "../src"

const f1Api = new F1Api()

describe("Results endpoints", () => {
  //   it("returns fp1 results for a given year and round", async () => {
  //     const data = await f1Api.getFp1Results({ year: 2024, round: 1 })
  //     expect(data).toEqual(
  //       expect.objectContaining({
  //         api: expect.any(String),
  //         url: expect.any(String),
  //         limit: expect.any(Number),
  //         offset: expect.any(Number),
  //         total: expect.any(Number),
  //         season: expect.toBeOneOf([expect.any(String), expect.any(Number)]),
  //         races: expect.arrayContaining([
  //           expect.objectContaining({
  //             round: expect.toBeOneOf([expect.any(String), expect.any(Number)]),
  //             fp1Date: expect.any(String),
  //             fp1Time: expect.any(String),
  //             url: expect.any(String),
  //             raceId: expect.any(String),
  //             raceName: expect.any(String),
  //             circuit: expect.any(Object),
  //             fp1Results: expect.arrayContaining([
  //               expect.objectContaining({
  //                 fp1Id: expect.any(Number),
  //                 driverId: expect.any(String),
  //                 teamId: expect.any(String),
  //                 time: expect.any(String),
  //                 driver: expect.any(Object),
  //                 team: expect.any(Object),
  //               }),
  //             ]),
  //           }),
  //         ]),
  //       })
  //     )
  //   }),
  it("returns fp1 results for a given year and roun, with limit and offset", async () => {
    const data = await f1Api.getFp1Results({
      year: 2024,
      round: 1,
      limit: 1,
      offset: 1,
    })
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        url: expect.any(String),
        limit: 1,
        offset: 1,
        total: 1,
        season: expect.toBeOneOf([expect.any(String), expect.any(Number)]),
        races: expect.arrayContaining([
          expect.objectContaining({
            round: expect.toBeOneOf([expect.any(String), expect.any(Number)]),
            fp1Date: expect.any(String),
            fp1Time: expect.any(String),
            url: expect.any(String),
            raceId: expect.any(String),
            raceName: expect.any(String),
            circuit: expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              country: expect.any(String),
              city: expect.any(String),
              circuitLenth: expect.any(String),
              lapRecord: expect.any(String),
              firstParticipationYear: expect.any(Number),
              corners: expect.any(Number),
              fastestLapDriverId: expect.any(String),
              fastestLapTeamId: expect.any(String),
              fastestLapYear: expect.any(Number),
              url: expect.any(String),
            }),
            fp1Results: expect.arrayContaining([
              expect.objectContaining({
                fp1Id: expect.any(Number),
                driverId: expect.any(String),
                teamId: expect.any(String),
                time: expect.any(String),
                driver: expect.objectContaining({
                  driverId: expect.any(String),
                  name: expect.any(String),
                  surname: expect.any(String),
                  nationality: expect.any(String),
                  number: expect.any(Number),
                  shortName: expect.any(String),
                  birthday: expect.any(String),
                  url: expect.any(String),
                }),
                team: expect.objectContaining({
                  teamId: expect.any(String),
                  teamName: expect.any(String),
                  nationality: expect.any(String),
                  firstAppareance: expect.any(Number),
                  constructorsChampionships: expect.any(Number),
                  driversChampionships: expect.any(Number),
                  url: expect.any(String),
                }),
              }),
            ]),
          }),
        ]),
      })
    )
  })
})
