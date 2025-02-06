import { describe, it, expect } from "vitest"
import F1Api from "../src"

const f1Api = new F1Api()

describe("Standings endpoints", () => {
  it("returns driver standings for a specific year", async () => {
    const data = await f1Api.getDriverStandings({ year: 2022 })
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        limit: expect.any(Number),
        offset: expect.any(Number),
        total: expect.any(Number),
        season: expect.any(String),
        championshipId: expect.any(String),
        url: expect.any(String),
        drivers_championship: expect.arrayContaining([
          expect.objectContaining({
            classificationId: expect.any(Number),
            driverId: expect.any(String),
            teamId: expect.any(String),
            points: expect.any(Number),
            position: expect.any(Number),
            wins: expect.toBeOneOf([expect.any(Number), null]),
            driver: expect.objectContaining({
              name: expect.any(String),
              surname: expect.any(String),
              nationality: expect.any(String),
              birthday: expect.any(String),
              number: expect.any(Number),
              shortName: expect.any(String),
              url: expect.any(String),
            }),
            team: expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              country: expect.any(String),
              firstAppareance: expect.any(Number),
              constructorsChampionships: expect.any(Number),
              driversChampionships: expect.any(Number),
              url: expect.any(String),
            }),
          }),
        ]),
      })
    )
  }),
    it("returns driver standings for a specific year with limit and offset", async () => {
      const data = await f1Api.getDriverStandings({
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
          season: expect.any(String),
          championshipId: expect.any(String),
          url: expect.any(String),
          drivers_championship: expect.arrayContaining([
            expect.objectContaining({
              classificationId: expect.any(Number),
              driverId: expect.any(String),
              teamId: expect.any(String),
              points: expect.any(Number),
              position: expect.any(Number),
              wins: expect.toBeOneOf([expect.any(Number), null]),
              driver: expect.objectContaining({
                name: expect.any(String),
                surname: expect.any(String),
                nationality: expect.any(String),
                birthday: expect.any(String),
                number: expect.any(Number),
                shortName: expect.any(String),
                url: expect.any(String),
              }),
              team: expect.objectContaining({
                teamId: expect.any(String),
                teamName: expect.any(String),
                country: expect.any(String),
                firstAppareance: expect.any(Number),
                constructorsChampionships: expect.any(Number),
                driversChampionships: expect.any(Number),
                url: expect.any(String),
              }),
            }),
          ]),
        })
      )
    }),
    it("returns driver standings for the current year", async () => {
      const data = await f1Api.getCurrentDriverStandings()
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          season: expect.any(Number),
          championshipId: expect.any(String),
          url: expect.any(String),
          drivers_championship: expect.arrayContaining([
            expect.objectContaining({
              classificationId: expect.any(Number),
              driverId: expect.any(String),
              teamId: expect.any(String),
              points: expect.any(Number),
              position: expect.any(Number),
              wins: expect.toBeOneOf([expect.any(Number), null]),
              driver: expect.objectContaining({
                name: expect.any(String),
                surname: expect.any(String),
                nationality: expect.any(String),
                birthday: expect.any(String),
                number: expect.any(Number),
                shortName: expect.any(String),
                url: expect.any(String),
              }),
              team: expect.objectContaining({
                teamId: expect.any(String),
                teamName: expect.any(String),
                country: expect.any(String),
                firstAppareance: expect.any(Number),
                constructorsChampionships: expect.any(Number),
                driversChampionships: expect.any(Number),
                url: expect.any(String),
              }),
            }),
          ]),
        })
      )
    }),
    it("returns driver standings for the current year with limit and offset", async () => {
      const data = await f1Api.getCurrentDriverStandings({
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
          drivers_championship: expect.arrayContaining([
            expect.objectContaining({
              classificationId: expect.any(Number),
              driverId: expect.any(String),
              teamId: expect.any(String),
              points: expect.any(Number),
              position: expect.any(Number),
              wins: expect.toBeOneOf([expect.any(Number), null]),
              driver: expect.objectContaining({
                name: expect.any(String),
                surname: expect.any(String),
                nationality: expect.any(String),
                birthday: expect.any(String),
                number: expect.any(Number),
                shortName: expect.any(String),
                url: expect.any(String),
              }),
              team: expect.objectContaining({
                teamId: expect.any(String),
                teamName: expect.any(String),
                country: expect.any(String),
                firstAppareance: expect.any(Number),
                constructorsChampionships: expect.any(Number),
                driversChampionships: expect.any(Number),
                url: expect.any(String),
              }),
            }),
          ]),
        })
      )
    }),
    it("returns constructor standings for a specific year", async () => {
      const data = await f1Api.getConstructorStandings({ year: 2022 })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          season: expect.any(String),
          championshipId: expect.any(String),
          url: expect.any(String),
          constructors_championship: expect.arrayContaining([
            expect.objectContaining({
              classificationId: expect.any(Number),
              teamId: expect.any(String),
              points: expect.any(Number),
              position: expect.any(Number),
              wins: expect.toBeOneOf([expect.any(Number), null]),
              team: expect.objectContaining({
                teamName: expect.any(String),
                country: expect.any(String),
                firstAppareance: expect.any(Number),
                constructorsChampionships: expect.any(Number),
                driversChampionships: expect.any(Number),
                url: expect.any(String),
              }),
            }),
          ]),
        })
      )
    }),
    it("returns constructor standings for a specific year with limit and offset", async () => {
      const data = await f1Api.getConstructorStandings({
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
          season: expect.any(String),
          championshipId: expect.any(String),
          url: expect.any(String),
          constructors_championship: expect.arrayContaining([
            expect.objectContaining({
              classificationId: expect.any(Number),
              teamId: expect.any(String),
              points: expect.any(Number),
              position: expect.any(Number),
              wins: expect.toBeOneOf([expect.any(Number), null]),
              team: expect.objectContaining({
                teamName: expect.any(String),
                country: expect.any(String),
                firstAppareance: expect.any(Number),
                constructorsChampionships: expect.any(Number),
                driversChampionships: expect.any(Number),
                url: expect.any(String),
              }),
            }),
          ]),
        })
      )
    }),
    it("returns constructor standings for the current year", async () => {
      const data = await f1Api.getCurrentConstructorStandings()
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          season: expect.any(Number),
          championshipId: expect.any(String),
          url: expect.any(String),
          constructors_championship: expect.arrayContaining([
            expect.objectContaining({
              classificationId: expect.any(Number),
              teamId: expect.any(String),
              points: expect.any(Number),
              position: expect.any(Number),
              wins: expect.toBeOneOf([expect.any(Number), null]),
              team: expect.objectContaining({
                teamName: expect.any(String),
                country: expect.any(String),
                firstAppareance: expect.any(Number),
                constructorsChampionships: expect.any(Number),
                driversChampionships: expect.any(Number),
                url: expect.any(String),
              }),
            }),
          ]),
        })
      )
    }),
    it("returns constructor standings for the current year with limit and offset", async () => {
      const data = await f1Api.getCurrentConstructorStandings({
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
          constructors_championship: expect.arrayContaining([
            expect.objectContaining({
              classificationId: expect.any(Number),
              teamId: expect.any(String),
              points: expect.any(Number),
              position: expect.any(Number),
              wins: expect.toBeOneOf([expect.any(Number), null]),
              team: expect.objectContaining({
                teamName: expect.any(String),
                country: expect.any(String),
                firstAppareance: expect.any(Number),
                constructorsChampionships: expect.any(Number),
                driversChampionships: expect.any(Number),
                url: expect.any(String),
              }),
            }),
          ]),
        })
      )
    })
})
