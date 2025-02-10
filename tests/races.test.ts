import { describe, it, expect } from "vitest"
import { F1Api } from "../src"

const f1Api = new F1Api()

describe("Races endpoints", () => {
  // it("returns all the races of a specific year", async () => {
  //   const data = await f1Api.getRacesByYear({ year: 2024 })
  //   expect(data).toEqual(
  //     expect.objectContaining({
  //       api: expect.any(String),
  //       championship: expect.objectContaining({
  //         championshipId: expect.any(String),
  //         championshipName: expect.any(String),
  //         url: expect.any(String),
  //         year: expect.any(Number),
  //       }),
  //       races: expect.arrayContaining([
  //         expect.objectContaining({
  //           championshipId: expect.any(String),
  //           circuit: expect.objectContaining({
  //             circuitId: expect.any(String),
  //             circuitName: expect.any(String),
  //             city: expect.any(String),
  //             country: expect.any(String),
  //             url: expect.any(String),
  //           }),
  //           fast_lap: expect.toBeOneOf([
  //             expect.objectContaining({
  //               fast_lap: expect.any(String),
  //               fast_lap_driver_id: expect.any(String),
  //               fast_lap_team_id: expect.any(String),
  //             }),
  //             null,
  //           ]),
  //           laps: expect.toBeOneOf([expect.any(Number), null]),
  //           raceId: expect.any(String),
  //           raceName: expect.any(String),
  //           round: expect.any(Number),
  //           schedule: expect.objectContaining({
  //             fp1: expect.objectContaining({
  //               date: expect.any(String),
  //               time: expect.any(String),
  //             }),
  //             fp2: expect.toBeOneOf([expect.any(Object), null]),
  //             fp3: expect.toBeOneOf([expect.any(Object), null]),
  //             qualy: expect.objectContaining({
  //               date: expect.any(String),
  //               time: expect.any(String),
  //             }),
  //             race: expect.objectContaining({
  //               date: expect.any(String),
  //               time: expect.any(String),
  //             }),
  //             sprintQualy: expect.toBeOneOf([expect.any(Object), null]),
  //             sprintRace: expect.toBeOneOf([expect.any(Object), null]),
  //           }),
  //           teamWinner: expect.toBeOneOf([expect.any(Object), null]),
  //           url: expect.any(String),
  //           winner: expect.toBeOneOf([expect.any(Object), null]),
  //         }),
  //       ]),
  //       season: expect.any(String),
  //       total: 1,
  //       url: expect.any(String),
  //     })
  //   )
  // }),
  it("returns all the races of a specific year with limit and offset", async () => {
    const data = await f1Api.getRacesByYear({
      year: 2024,
      limit: 1,
      offset: 4,
    })
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        championship: expect.objectContaining({
          championshipId: expect.any(String),
          championshipName: expect.any(String),
          url: expect.any(String),
          year: expect.any(Number),
        }),
        races: expect.arrayContaining([
          expect.objectContaining({
            championshipId: expect.any(String),
            circuit: expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              city: expect.any(String),
              country: expect.any(String),
              url: expect.any(String),
            }),
            fast_lap: expect.toBeOneOf([
              expect.objectContaining({
                fast_lap: expect.any(String),
                fast_lap_driver_id: expect.any(String),
                fast_lap_team_id: expect.any(String),
              }),
              null,
            ]),
            laps: expect.toBeOneOf([expect.any(Number), null]),
            raceId: expect.any(String),
            raceName: expect.any(String),
            round: expect.any(Number),
            schedule: expect.objectContaining({
              fp1: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              fp2: expect.toBeOneOf([expect.any(Object), null]),
              fp3: expect.toBeOneOf([expect.any(Object), null]),
              qualy: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              race: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              sprintQualy: expect.toBeOneOf([expect.any(Object), null]),
              sprintRace: expect.toBeOneOf([expect.any(Object), null]),
            }),
            teamWinner: expect.toBeOneOf([expect.any(Object), null]),
            url: expect.any(String),
            winner: expect.toBeOneOf([expect.any(Object), null]),
          }),
        ]),
        season: expect.any(String),
        total: 1,
        url: expect.any(String),
      })
    )
  })
  it("returns all the races of the current year with limit and offset", async () => {
    const data = await f1Api.getCurrentRaces({ limit: 1, offset: 4 })
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        limit: 1,
        offset: 4,
        races: expect.arrayContaining([
          expect.objectContaining({
            championshipId: expect.any(String),
            circuit: expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              city: expect.any(String),
              country: expect.any(String),
              url: expect.any(String),
            }),
            fast_lap: expect.toBeOneOf([
              expect.objectContaining({
                fast_lap: expect.any(String),
                fast_lap_driver_id: expect.any(String),
                fast_lap_team_id: expect.any(String),
              }),
              null,
            ]),
            laps: expect.toBeOneOf([expect.any(Number), null]),
            raceId: expect.any(String),
            raceName: expect.any(String),
            round: expect.any(Number),
            schedule: expect.objectContaining({
              fp1: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              fp2: expect.toBeOneOf([expect.any(Object), null]),
              fp3: expect.toBeOneOf([expect.any(Object), null]),
              qualy: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              race: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              sprintQualy: expect.toBeOneOf([expect.any(Object), null]),
              sprintRace: expect.toBeOneOf([expect.any(Object), null]),
            }),
            teamWinner: expect.toBeOneOf([expect.any(Object), null]),
            url: expect.any(String),
            winner: expect.toBeOneOf([expect.any(Object), null]),
          }),
        ]),
        season: expect.any(Number),
        total: 1,
        url: expect.any(String),
      })
    )
  })
  it("returns race info by year and round", async () => {
    const data = await f1Api.getRaceInfo({ year: 2024, round: 1 })
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        season: expect.any(String),
        total: 1,
        round: expect.any(String),
        url: expect.any(String),
        championship: expect.objectContaining({
          championshipId: expect.any(String),
          championshipName: expect.any(String),
          url: expect.any(String),
          year: expect.any(Number),
        }),
        race: expect.arrayContaining([
          expect.objectContaining({
            championshipId: expect.any(String),
            circuit: expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              city: expect.any(String),
              country: expect.any(String),
              url: expect.any(String),
            }),
            fast_lap: expect.toBeOneOf([
              expect.objectContaining({
                fast_lap: expect.any(String),
                fast_lap_driver_id: expect.any(String),
                fast_lap_team_id: expect.any(String),
              }),
              null,
            ]),
            laps: expect.toBeOneOf([expect.any(Number), null]),
            raceId: expect.any(String),
            raceName: expect.any(String),
            round: expect.any(Number),
            schedule: expect.objectContaining({
              fp1: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              fp2: expect.toBeOneOf([expect.any(Object), null]),
              fp3: expect.toBeOneOf([expect.any(Object), null]),
              qualy: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              race: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              sprintQualy: expect.toBeOneOf([expect.any(Object), null]),
              sprintRace: expect.toBeOneOf([expect.any(Object), null]),
            }),
            teamWinner: expect.toBeOneOf([expect.any(Object), null]),
            url: expect.any(String),
            winner: expect.toBeOneOf([expect.any(Object), null]),
          }),
        ]),
      })
    )
  })
  it("returns race info of the next race of the current year", async () => {
    const data = await f1Api.getNextRace()
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        season: expect.any(Number),
        total: 1,
        round: expect.any(Number),
        url: expect.any(String),
        championship: expect.objectContaining({
          championshipId: expect.any(String),
          championshipName: expect.any(String),
          url: expect.any(String),
          year: expect.any(Number),
        }),
        race: expect.arrayContaining([
          expect.objectContaining({
            championshipId: expect.any(String),
            circuit: expect.objectContaining({
              circuitId: expect.any(String),
              circuitName: expect.any(String),
              city: expect.any(String),
              circuitLength: expect.any(String),
              lapRecord: expect.any(String),
              firstParticipationYear: expect.any(Number),
              corners: expect.any(Number),
              fastestLapDriverId: expect.any(String),
              fastestLapTeamId: expect.any(String),
              fastestLapYear: expect.any(Number),
              country: expect.any(String),
              url: expect.any(String),
            }),
            fast_lap: expect.any(Object),
            laps: expect.toBeOneOf([expect.any(Number), null]),
            raceId: expect.any(String),
            raceName: expect.any(String),
            round: expect.any(Number),
            schedule: expect.objectContaining({
              fp1: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              fp2: expect.toBeOneOf([expect.any(Object), null]),
              fp3: expect.toBeOneOf([expect.any(Object), null]),
              qualy: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              race: expect.objectContaining({
                date: expect.any(String),
                time: expect.any(String),
              }),
              sprintQualy: expect.toBeOneOf([expect.any(Object), null]),
              sprintRace: expect.toBeOneOf([expect.any(Object), null]),
            }),
            teamWinner: expect.toBeOneOf([expect.any(Object), null]),
            winner: expect.toBeOneOf([expect.any(Object), null]),
          }),
        ]),
      })
    )
  }),
    it("returns race info of the last race of the current year", async () => {
      const data = await f1Api.getLastRace()
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          season: expect.any(Number),
          total: 1,
          round: expect.any(Number),
          url: expect.any(String),
          championship: expect.objectContaining({
            championshipId: expect.any(String),
            championshipName: expect.any(String),
            url: expect.any(String),
            year: expect.any(Number),
          }),
          race: expect.arrayContaining([
            expect.objectContaining({
              championshipId: expect.any(String),
              circuit: expect.objectContaining({
                circuitId: expect.any(String),
                circuitName: expect.any(String),
                city: expect.any(String),
                circuitLength: expect.any(String),
                lapRecord: expect.any(String),
                firstParticipationYear: expect.any(Number),
                corners: expect.any(Number),
                fastestLapDriverId: expect.any(String),
                fastestLapTeamId: expect.any(String),
                fastestLapYear: expect.any(Number),
                country: expect.any(String),
                url: expect.any(String),
              }),
              fast_lap: expect.any(Object),
              laps: expect.toBeOneOf([expect.any(Number), null]),
              raceId: expect.any(String),
              raceName: expect.any(String),
              round: expect.any(Number),
              schedule: expect.objectContaining({
                fp1: expect.objectContaining({
                  date: expect.any(String),
                  time: expect.any(String),
                }),
                fp2: expect.toBeOneOf([expect.any(Object), null]),
                fp3: expect.toBeOneOf([expect.any(Object), null]),
                qualy: expect.objectContaining({
                  date: expect.any(String),
                  time: expect.any(String),
                }),
                race: expect.objectContaining({
                  date: expect.any(String),
                  time: expect.any(String),
                }),
                sprintQualy: expect.toBeOneOf([expect.any(Object), null]),
                sprintRace: expect.toBeOneOf([expect.any(Object), null]),
              }),
              teamWinner: expect.toBeOneOf([expect.any(Object), null]),
              winner: expect.toBeOneOf([expect.any(Object), null]),
            }),
          ]),
        })
      )
    })
})
