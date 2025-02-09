import { describe, it, expect } from "vitest"
import { F1Api } from "../src"

const f1Api = new F1Api()

describe("Races endpoints", () => {
  //   it("returns all the races of a specific year", async () => {
  //     const data = await f1Api.getRacesByYear({ year: 2022 })
  //     expect(data).toEqual(
  //       expect.objectContaining({
  //         api: expect.any(String),
  //         url: expect.any(String),
  //         limit: expect.any(Number),
  //         offset: expect.any(Number),
  //         total: expect.any(Number),
  //         season: expect.any(String),
  //         championship: expect.objectContaining({
  //           championshipId: expect.any(String),
  //           championshipName: expect.any(String),
  //           url: expect.any(String),
  //           year: expect.any(Number),
  //         }),
  //         races: expect.arrayContaining([
  //           expect.objectContaining({
  //             raceId: expect.any(String),
  //             championshipId: expect.any(String),
  //             raceName: expect.any(String),
  //             schedule: expect.objectContaining({
  //               race: expect.objectContaining({
  //                 date: expect.any(String),
  //                 time: expect.any(String),
  //               }),
  //               qualy: expect.objectContaining({
  //                 date: expect.any(String),
  //                 time: expect.any(String),
  //               }),
  //               fp1: expect.objectContaining({
  //                 date: expect.any(String),
  //                 time: expect.any(String),
  //               }),
  //               fp2: expect.toBeOneOf([
  //                 expect.objectContaining({
  //                   date: expect.any(String),
  //                   time: expect.any(String),
  //                 }),
  //                 null,
  //               ]),
  //               fp3: expect.toBeOneOf([
  //                 expect.objectContaining({
  //                   date: expect.any(String),
  //                   time: expect.any(String),
  //                 }),
  //                 null,
  //               ]),
  //               sprintQualy: expect.toBeOneOf([
  //                 expect.objectContaining({
  //                   date: expect.any(String),
  //                   time: expect.any(String),
  //                 }),
  //                 null,
  //               ]),
  //               sprintRace: expect.toBeOneOf([
  //                 expect.objectContaining({
  //                   date: expect.any(String),
  //                   time: expect.any(String),
  //                 }),
  //                 null,
  //               ]),
  //             }),
  //laps: expect.toBeOneOf([expect.any(Number), null]),
  // round: expect.any(Number),
  //             url: expect.any(String),
  //             fast_lap: expect.objectContaining({
  //               fast_lap: expect.any(String),
  //               fast_lap_driver_id: expect.any(String),
  //               fast_lap_team_id: expect.any(String),
  //             }),
  //             circuit: expect.objectContaining({
  //               circuitId: expect.any(String),
  //               circuitName: expect.any(String),
  //               country: expect.any(String),
  //               city: expect.any(String),
  //               circuitLength: expect.any(String),
  //               lapRecord: expect.any(String),
  //               firstParticipationYear: expect.any(Number),
  //               corners: expect.any(Number),
  //               fastestLapDriverId: expect.any(String),
  //               fastestLapTeamId: expect.any(String),
  //               fastestLapYear: expect.any(Number),
  //               url: expect.any(String),
  //             }),
  //             winner: expect.toBeOneOf([
  //               expect.objectContaining({
  //                 driverId: expect.any(String),
  //                 name: expect.any(String),
  //                 surname: expect.any(String),
  //                 country: expect.any(String),
  //                 birthday: expect.any(String),
  //                 number: expect.any(Number),
  //                 shortName: expect.any(String),
  //                 url: expect.any(String),
  //               }),
  //               null,
  //             ]),
  //             teamWinner: expect.toBeOneOf([
  //               expect.objectContaining({
  //                 teamId: expect.any(String),
  //                 teamName: expect.any(String),
  //                 country: expect.any(String),
  //                 firstAppeareance: expect.any(Number),
  //                 constructorsChampionships: expect.any(Number),
  //                 driversChampionships: expect.any(Number),
  //                 url: expect.any(String),
  //               }),
  //               null,
  //             ]),
  //           }),
  //         ]),
  //       })
  //     )
  //   }),
  it("returns all the races of a specific year with limit and offset", async () => {
    const data = await f1Api.getRacesByYear({
      year: 2022,
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
        season: expect.any(String),
        championship: expect.objectContaining({
          championshipId: expect.any(String),
          championshipName: expect.any(String),
          url: expect.any(String),
          year: expect.any(Number),
        }),
        races: expect.arrayContaining([
          expect.objectContaining({
            raceId: expect.any(String),
            championshipId: expect.any(String),
            raceName: expect.any(String),
            schedule: expect.objectContaining({
              race: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              qualy: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              fp1: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              fp2: expect.objectContaining({
                date: expect.toBeOneOf([expect.any(String), null]),
                time: expect.toBeOneOf([expect.any(String), null]),
              }),
              fp3: expect.objectContaining({
                date: expect.toBeOneOf([expect.any(String), null]),
                time: expect.toBeOneOf([expect.any(String), null]),
              }),
              sprintQualy: expect.objectContaining({
                date: expect.toBeOneOf([expect.any(String), null]),
                time: expect.toBeOneOf([expect.any(String), null]),
              }),
              sprintRace: expect.objectContaining({
                date: expect.toBeOneOf([expect.any(String), null]),
                time: expect.toBeOneOf([expect.any(String), null]),
              }),
            }),
            laps: expect.toBeOneOf([expect.any(Number), null]),
            round: expect.any(Number),
            url: expect.any(String),
            fast_lap: expect.toBeOneOf([
              expect.objectContaining({
                fast_lap: expect.any(String),
                fast_lap_driver_id: expect.any(String),
                fast_lap_team_id: expect.any(String),
              }),
              null,
            ]),
            circuit: expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              country: expect.any(String),
              city: expect.any(String),
              circuitLength: expect.any(String),
              lapRecord: expect.any(String),
              firstParticipationYear: expect.any(Number),
              corners: expect.any(Number),
              fastestLapDriverId: expect.any(String),
              fastestLapTeamId: expect.any(String),
              fastestLapYear: expect.any(Number),
              url: expect.any(String),
            }),
            winner: expect.toBeOneOf([expect.any(Object), null]),
            teamWinner: expect.toBeOneOf([expect.any(Object), null]),
          }),
        ]),
      })
    )
  })
})
