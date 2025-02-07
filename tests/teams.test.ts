import { describe, it, expect } from "vitest"
import F1Api from "../src"

const f1Api = new F1Api()

describe("Teams endpoints", () => {
  it("returns all the f1 teams", async () => {
    const data = await f1Api.getTeams()
    expect(data).toEqual(
      expect.objectContaining({
        api: expect.any(String),
        url: expect.any(String),
        limit: expect.any(Number),
        offset: expect.any(Number),
        total: expect.any(Number),
        teams: expect.arrayContaining([
          expect.objectContaining({
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
        ]),
      })
    )
  }),
    it("returns all the f1 teams with limit and offset", async () => {
      const data = await f1Api.getTeams({ limit: 1, offset: 1 })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          limit: 1,
          offset: 1,
          total: 1,
          teams: expect.arrayContaining([
            expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              teamNationality: expect.any(String),
              firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
              constructorsChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              driversChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 team based on his id", async () => {
      const data = await f1Api.getTeam({ id: "mclaren" })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          total: 1,
          team: expect.arrayContaining([
            expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              teamNationality: expect.any(String),
              firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
              constructorsChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              driversChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 teams, based on a year", async () => {
      const data = await f1Api.getTeamsByYear({ year: 2022 })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          teams: expect.arrayContaining([
            expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              teamNationality: expect.any(String),
              firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
              constructorsChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              driversChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 teams, based on a year, with limit and offset", async () => {
      const data = await f1Api.getTeamsByYear({
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
          teams: expect.arrayContaining([
            expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              teamNationality: expect.any(String),
              firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
              constructorsChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              driversChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 teams, of the current year", async () => {
      const data = await f1Api.getCurrentTeams()
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          limit: expect.any(Number),
          offset: expect.any(Number),
          total: expect.any(Number),
          teams: expect.arrayContaining([
            expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              teamNationality: expect.any(String),
              firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
              constructorsChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              driversChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns all the f1 teams, of the current year, with limit and offset", async () => {
      const data = await f1Api.getCurrentTeams({
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
          teams: expect.arrayContaining([
            expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              teamNationality: expect.any(String),
              firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
              constructorsChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              driversChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 team based on his id, and a specific year", async () => {
      const data = await f1Api.getTeamByYear({ year: 2022, id: "mclaren" })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          total: 1,
          team: expect.arrayContaining([
            expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              teamNationality: expect.any(String),
              firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
              constructorsChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              driversChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 team based on his id, and a the current year", async () => {
      const data = await f1Api.getCurrentTeam({ id: "mclaren" })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          total: 1,
          team: expect.arrayContaining([
            expect.objectContaining({
              teamId: expect.any(String),
              teamName: expect.any(String),
              teamNationality: expect.any(String),
              firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
              constructorsChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              driversChampionships: expect.toBeOneOf([
                expect.any(Number),
                null,
              ]),
              url: expect.any(String),
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 team based on his id with his drivers, and a the specific year", async () => {
      const data = await f1Api.getTeamByYearWithDrivers({
        id: "mclaren",
        year: 2022,
      })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          total: expect.any(Number),
          limit: expect.any(Number),
          season: expect.any(String),
          teamId: expect.any(String),
          team: expect.objectContaining({
            teamId: expect.any(String),
            teamName: expect.any(String),
            country: expect.any(String),
            //firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
            constructorsChampionships: expect.toBeOneOf([
              expect.any(Number),
              null,
            ]),
            driversChampionships: expect.toBeOneOf([expect.any(Number), null]),
            url: expect.any(String),
          }),
          drivers: expect.arrayContaining([
            expect.objectContaining({
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
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 team based on his id with his drivers, and a the specific year, with limit and offset", async () => {
      const data = await f1Api.getTeamByYearWithDrivers({
        id: "mclaren",
        year: 2022,
        limit: 1,
        offset: 1,
      })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          total: 1,
          limit: expect.any(String),
          season: expect.any(String),
          teamId: expect.any(String),
          team: expect.objectContaining({
            teamId: expect.any(String),
            teamName: expect.any(String),
            country: expect.any(String),
            //firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
            constructorsChampionships: expect.toBeOneOf([
              expect.any(Number),
              null,
            ]),
            driversChampionships: expect.toBeOneOf([expect.any(Number), null]),
            url: expect.any(String),
          }),
          drivers: expect.arrayContaining([
            expect.objectContaining({
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
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 team based on his id with his drivers, and a the current year", async () => {
      const data = await f1Api.getCurrentTeamWithDrivers({
        id: "mclaren",
      })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          total: expect.any(Number),
          limit: expect.any(Number),
          season: expect.any(Number),
          teamId: expect.any(String),
          team: expect.objectContaining({
            teamId: expect.any(String),
            teamName: expect.any(String),
            country: expect.any(String),
            //firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
            constructorsChampionships: expect.toBeOneOf([
              expect.any(Number),
              null,
            ]),
            driversChampionships: expect.toBeOneOf([expect.any(Number), null]),
            url: expect.any(String),
          }),
          drivers: expect.arrayContaining([
            expect.objectContaining({
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
            }),
          ]),
        })
      )
    }),
    it("returns a specific f1 team based on his id with his drivers, and a the current year, with limit and offset", async () => {
      const data = await f1Api.getCurrentTeamWithDrivers({
        id: "mclaren",
        limit: 1,
        offset: 1,
      })
      expect(data).toEqual(
        expect.objectContaining({
          api: expect.any(String),
          url: expect.any(String),
          total: 1,
          limit: expect.any(String),
          season: expect.any(Number),
          teamId: expect.any(String),
          team: expect.objectContaining({
            teamId: expect.any(String),
            teamName: expect.any(String),
            country: expect.any(String),
            //firstAppeareance: expect.toBeOneOf([expect.any(Number), null]),
            constructorsChampionships: expect.toBeOneOf([
              expect.any(Number),
              null,
            ]),
            driversChampionships: expect.toBeOneOf([expect.any(Number), null]),
            url: expect.any(String),
          }),
          drivers: expect.arrayContaining([
            expect.objectContaining({
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
            }),
          ]),
        })
      )
    })
})
