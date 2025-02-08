import { describe, it, expect } from "vitest"
import { F1Api } from "../src"

const f1Api = new F1Api()

describe("Drivers endpoints", () => {
  it("returns all the f1 drivers", async () => {
    const data = await f1Api.getDrivers()
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        limit: expect.any(Number),
        offset: expect.any(Number),
        total: expect.any(Number),
        url: expect.any(String),
        drivers: expect.arrayContaining([
          expect.objectContaining({
            driverId: expect.any(String),
            name: expect.any(String),
            surname: expect.any(String),
            nationality: expect.any(String),
            birthday: expect.any(String),
            number: expect.toBeOneOf([expect.any(Number), null]),
            shortName: expect.toBeOneOf([expect.any(String), null]),
            url: expect.any(String),
          }),
        ]),
      })
    )
  }),
    it("returns all the f1 drivers with limit and offset", async () => {
      const data = await f1Api.getDrivers({ limit: 1, offset: 1 })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: 1,
          offset: 1,
          total: 1,
          url: expect.any(String),
          drivers: expect.arrayContaining([
            expect.objectContaining({
              driverId: expect.any(String),
              name: expect.any(String),
              surname: expect.any(String),
              nationality: expect.any(String),
              birthday: expect.any(String),
              number: expect.toBeOneOf([expect.any(Number), null]),
              shortName: expect.toBeOneOf([expect.any(String), null]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 drivers of a specific year", async () => {
      const data = await f1Api.getDriversByYear({ year: 2022 })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          url: expect.any(String),
          drivers: expect.arrayContaining([
            expect.objectContaining({
              driverId: expect.any(String),
              name: expect.any(String),
              surname: expect.any(String),
              nationality: expect.any(String),
              birthday: expect.any(String),
              number: expect.toBeOneOf([expect.any(Number), null]),
              shortName: expect.toBeOneOf([expect.any(String), null]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 drivers of a specific year with limit and offset", async () => {
      const data = await f1Api.getDriversByYear({
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
          drivers: expect.arrayContaining([
            expect.objectContaining({
              driverId: expect.any(String),
              name: expect.any(String),
              surname: expect.any(String),
              nationality: expect.any(String),
              birthday: expect.any(String),
              number: expect.toBeOneOf([expect.any(Number), null]),
              shortName: expect.toBeOneOf([expect.any(String), null]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 driver based on his id", async () => {
      const data = await f1Api.getDriver({ id: "alonso" })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          total: 1,
          url: expect.any(String),
          driver: expect.arrayContaining([
            expect.objectContaining({
              driverId: expect.any(String),
              name: expect.any(String),
              surname: expect.any(String),
              nationality: expect.any(String),
              birthday: expect.any(String),
              number: expect.toBeOneOf([expect.any(Number), null]),
              shortName: expect.toBeOneOf([expect.any(String), null]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 drivers of the current year", async () => {
      const data = await f1Api.getCurrentDrivers()
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          url: expect.any(String),
          drivers: expect.arrayContaining([
            expect.objectContaining({
              driverId: expect.any(String),
              name: expect.any(String),
              surname: expect.any(String),
              nationality: expect.any(String),
              birthday: expect.any(String),
              number: expect.toBeOneOf([expect.any(Number), null]),
              shortName: expect.toBeOneOf([expect.any(String), null]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 drivers of the current year with limit and offset", async () => {
      const data = await f1Api.getCurrentDrivers({ limit: 1, offset: 1 })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: 1,
          offset: 1,
          total: 1,
          url: expect.any(String),
          drivers: expect.arrayContaining([
            expect.objectContaining({
              driverId: expect.any(String),
              name: expect.any(String),
              surname: expect.any(String),
              nationality: expect.any(String),
              birthday: expect.any(String),
              number: expect.toBeOneOf([expect.any(Number), null]),
              shortName: expect.toBeOneOf([expect.any(String), null]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 driver of the current year based on his id", async () => {
      const data = await f1Api.getCurrentDriver({ id: "alonso" })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          season: expect.any(Number),
          championshipId: expect.any(String),
          url: expect.any(String),
          driver: expect.objectContaining({
            driverId: expect.any(String),
            name: expect.any(String),
            surname: expect.any(String),
            nationality: expect.any(String),
            birthday: expect.any(String),
            number: expect.toBeOneOf([expect.any(Number), null]),
            shortName: expect.toBeOneOf([expect.any(String), null]),
            url: expect.any(String),
          }),
          team: expect.objectContaining({
            teamId: expect.any(String),
            teamName: expect.any(String),
            teamNationality: expect.any(String),
            firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
            constructorsChampionships: expect.toBeOneOf([
              expect.any(Number),
              null,
            ]),
            driversChampionships: expect.toBeOneOf([expect.any(Number), null]),
            url: expect.any(String),
          }),
          results: expect.arrayContaining([
            expect.objectContaining({
              race: expect.objectContaining({
                raceId: expect.any(String),
                name: expect.any(String),
                round: expect.any(Number),
                date: expect.any(String),
                circuit: expect.objectContaining({
                  circuitId: expect.any(String),
                  name: expect.any(String),
                  country: expect.any(String),
                  city: expect.any(String),
                  length: expect.any(Number),
                  lapRecord: expect.any(String),
                  fastestLapDriverId: expect.any(String),
                  fastestLapTeamId: expect.any(String),
                  fastestLapYear: expect.any(Number),
                  numberOfCorners: expect.any(Number),
                  firstParticipationYear: expect.any(Number),
                }),
              }),
              result: expect.objectContaining({
                finishingPosition: expect.any(Number),
                gridPosition: expect.any(Number),
                raceTime: expect.any(String),
                pointsObtained: expect.any(Number),
                retired: expect.toBeOneOf([expect.any(Boolean), null]),
              }),
              sprintResult: expect.toBeOneOf([expect.any(Object), null]),
            }),
          ]),
        })
      )
    }),
    it("returns a f1 driver based on a year and his id", async () => {
      const data = await f1Api.getDriverByYear({
        year: 2022,
        id: "hamilton",
      })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          season: expect.any(String),
          championshipId: expect.any(String),
          url: expect.any(String),
          driver: expect.objectContaining({
            driverId: expect.any(String),
            name: expect.any(String),
            surname: expect.any(String),
            nationality: expect.any(String),
            birthday: expect.any(String),
            number: expect.toBeOneOf([expect.any(Number), null]),
            shortName: expect.toBeOneOf([expect.any(String), null]),
            url: expect.any(String),
          }),
          team: expect.objectContaining({
            teamId: expect.any(String),
            teamName: expect.any(String),
            teamNationality: expect.any(String),
            firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
            constructorsChampionships: expect.toBeOneOf([
              expect.any(Number),
              null,
            ]),
            driversChampionships: expect.toBeOneOf([expect.any(Number), null]),
            url: expect.any(String),
          }),
          results: expect.arrayContaining([
            expect.objectContaining({
              race: expect.objectContaining({
                raceId: expect.any(String),
                name: expect.any(String),
                round: expect.any(Number),
                date: expect.any(String),
                circuit: expect.objectContaining({
                  circuitId: expect.any(String),
                  name: expect.any(String),
                  country: expect.any(String),
                  city: expect.any(String),
                  length: expect.any(Number),
                  lapRecord: expect.any(String),
                  fastestLapDriverId: expect.any(String),
                  fastestLapTeamId: expect.any(String),
                  fastestLapYear: expect.any(Number),
                  numberOfCorners: expect.any(Number),
                  firstParticipationYear: expect.any(Number),
                }),
              }),
              result: expect.objectContaining({
                finishingPosition: expect.any(Number),
                gridPosition: expect.any(Number),
                raceTime: expect.any(String),
                pointsObtained: expect.any(Number),
                retired: expect.toBeOneOf([expect.any(Boolean), null]),
              }),
              sprintResult: expect.toBeOneOf([expect.any(Object), null]),
            }),
          ]),
        })
      )
    })
  it("returns a specific f1 driver of the current year based on his id, with limit and offset", async () => {
    const data = await f1Api.getCurrentDriver({
      id: "alonso",
      limit: 1,
      offset: 1,
    })
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        limit: 1,
        offset: 1,
        total: 1,
        season: expect.any(Number),
        championshipId: expect.any(String),
        url: expect.any(String),
        driver: expect.objectContaining({
          driverId: expect.any(String),
          name: expect.any(String),
          surname: expect.any(String),
          nationality: expect.any(String),
          birthday: expect.any(String),
          number: expect.toBeOneOf([expect.any(Number), null]),
          shortName: expect.toBeOneOf([expect.any(String), null]),
          url: expect.any(String),
        }),
        team: expect.objectContaining({
          teamId: expect.any(String),
          teamName: expect.any(String),
          teamNationality: expect.any(String),
          firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
          constructorsChampionships: expect.toBeOneOf([
            expect.any(Number),
            null,
          ]),
          driversChampionships: expect.toBeOneOf([expect.any(Number), null]),
          url: expect.any(String),
        }),
        results: expect.arrayContaining([
          expect.objectContaining({
            race: expect.objectContaining({
              raceId: expect.any(String),
              name: expect.any(String),
              round: expect.any(Number),
              date: expect.any(String),
              circuit: expect.objectContaining({
                circuitId: expect.any(String),
                name: expect.any(String),
                country: expect.any(String),
                city: expect.any(String),
                length: expect.any(Number),
                lapRecord: expect.any(String),
                fastestLapDriverId: expect.any(String),
                fastestLapTeamId: expect.any(String),
                fastestLapYear: expect.any(Number),
                numberOfCorners: expect.any(Number),
                firstParticipationYear: expect.any(Number),
              }),
            }),
            result: expect.objectContaining({
              finishingPosition: expect.any(Number),
              gridPosition: expect.any(Number),
              raceTime: expect.any(String),
              pointsObtained: expect.any(Number),
              retired: expect.toBeOneOf([expect.any(Boolean), null]),
            }),
            sprintResult: expect.toBeOneOf([expect.any(Object), null]),
          }),
        ]),
      })
    )
  }),
    it("returns a f1 driver based on a year and his id, with limit and offset", async () => {
      const data = await f1Api.getDriverByYear({
        year: 2022,
        id: "hamilton",
        limit: 1,
        offset: 1,
      })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: 1,
          offset: 1,
          total: 1,
          season: expect.any(String),
          championshipId: expect.any(String),
          url: expect.any(String),
          driver: expect.objectContaining({
            driverId: expect.any(String),
            name: expect.any(String),
            surname: expect.any(String),
            nationality: expect.any(String),
            birthday: expect.any(String),
            number: expect.toBeOneOf([expect.any(Number), null]),
            shortName: expect.toBeOneOf([expect.any(String), null]),
            url: expect.any(String),
          }),
          team: expect.objectContaining({
            teamId: expect.any(String),
            teamName: expect.any(String),
            teamNationality: expect.any(String),
            firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
            constructorsChampionships: expect.toBeOneOf([
              expect.any(Number),
              null,
            ]),
            driversChampionships: expect.toBeOneOf([expect.any(Number), null]),
            url: expect.any(String),
          }),
          results: expect.arrayContaining([
            expect.objectContaining({
              race: expect.objectContaining({
                raceId: expect.any(String),
                name: expect.any(String),
                round: expect.any(Number),
                date: expect.any(String),
                circuit: expect.objectContaining({
                  circuitId: expect.any(String),
                  name: expect.any(String),
                  country: expect.any(String),
                  city: expect.any(String),
                  length: expect.any(Number),
                  lapRecord: expect.any(String),
                  fastestLapDriverId: expect.any(String),
                  fastestLapTeamId: expect.any(String),
                  fastestLapYear: expect.any(Number),
                  numberOfCorners: expect.any(Number),
                  firstParticipationYear: expect.any(Number),
                }),
              }),
              result: expect.objectContaining({
                finishingPosition: expect.any(Number),
                gridPosition: expect.any(Number),
                raceTime: expect.any(String),
                pointsObtained: expect.any(Number),
                retired: expect.toBeOneOf([expect.any(Boolean), null]),
              }),
              sprintResult: expect.toBeOneOf([expect.any(Object), null]),
            }),
          ]),
        })
      )
    })
})
