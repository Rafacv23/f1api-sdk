import { BaseApiResponse } from "types/F1Api"

interface Team {
  teamId: string
  teamName: string
  teamNationality: string
  firstAppeareance: number
  constructorsChampionships: number | null
  driversChampionships: number | null
  url: string
}

interface Driver {
  driverId: string
  name: string
  surname: string
  nationality: string
  birthday: string
  number: number | null
  shortName: string | null
  url: string
}
export interface TeamsApiResponse extends BaseApiResponse {
  teams: Team[]
}

export interface TeamApiResponse extends BaseApiResponse {
  team: Team[]
}

export interface TeamWithDriversApiResponse extends BaseApiResponse {
  season: string | number
  teamId: string
  team: Team
  drivers: Driver[]
}
