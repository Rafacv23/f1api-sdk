import { BaseApiResponse } from "../../types/F1Api"

interface Driver {
  driverId: string
  name: string
  surname: string
  nationality: string
  birthday: string
  number: number | null
  shortName: string
  url: string
}

interface Team {
  teamId: string
  teamName: string
  teamNationality: string
  firstAppeareance: number | null
  constructorsChampionships: number | null
  driversChampionships: number | null
  url: string
}

interface SprintResult {
  finishingPosition: number
  gridPosition: number
  raceTime: string
  pointsObtained: number
  retired: boolean | null
}

interface Result {
  race: {
    raceId: string
    name: string
    round: number
    date: string
    circuit: {
      circuitId: string
      name: string
      country: string
      city: string
      length: number
      lapRecord: string
      fastestLapDriverId: string
      fastestLapTeamId: string
      fastestLapYear: number
      numberOfCorners: number
      firstParticipationYear: number
    }
  }
  result: {
    finishingPosition: number
    gridPosition: number
    raceTime: string
    pointsObtained: number
    retired: boolean | null
  }
  sprintResult: SprintResult | null
}

export interface DriversApiResponse extends BaseApiResponse {
  drivers: Driver[]
}

export interface DriverApiResponse extends BaseApiResponse {
  driver: Driver[]
}

export interface DriversByYearWithResultsApiResponse extends BaseApiResponse {
  season: string | number
  championshipId: string
  driver: Driver
  team: Team
  results: Result[]
}
