import { BaseApiResponse } from "../../types/F1Api"

interface DriverStandings {
  classificationId: number
  driverId: string
  teamId: string
  points: number
  position: number
  wins: number | null
  driver: {
    name: string
    surname: string
    nationality: string
    birthday: string
    number: number | null
    shortName: string | null
    url: string
  }
  team: {
    teamId: string
    teamName: string
    country: string
    firstAppareance: number | null
    constructorsChampionships: number | null
    driversChampionships: number | null
    url: string
  }
}

export interface DriverStandingsApiResponse extends BaseApiResponse {
  season: string | number
  championshipId: string
  drivers_championship: DriverStandings[]
}

interface ConstructorStandings {
  classificationId: number
  teamId: string
  points: number
  position: number
  wins: number | null
  team: {
    teamName: string
    country: string
    firstAppareance: number | null
    constructorsChampionships: number | null
    driversChampionships: number | null
    url: string
  }
}

export interface ConstructorStandingsApiResponse extends BaseApiResponse {
  season: string | number
  championshipId: string
  constructors_championship: ConstructorStandings[]
}
