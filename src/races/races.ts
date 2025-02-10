import { Base } from "../base"
import { buildQueryParams } from "../utils"
import { RaceApiResponse, RacesApiResponse } from "./types"

export class Races extends Base {
  // returns all the races of a specific year
  getRacesByYear({
    year,
    limit,
    offset,
  }: {
    year: number
    limit?: number
    offset?: number
  }): Promise<RacesApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}?${queryString}`

    return this.request(url)
  }

  // retruns all the races of the current year
  getCurrentRaces({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<RacesApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current?${queryString}`

    return this.request(url)
  }

  // returns details of a specific race based on the year and the round
  getRaceInfo({
    year,
    round,
  }: {
    year: number
    round: number
  }): Promise<RaceApiResponse> {
    const url = `/${year}/${round}`

    return this.request(url)
  }

  // returns info of the last race of the current season
  getLastRace(): Promise<RaceApiResponse> {
    const url = `/current/last`

    return this.request(url)
  }

  // returns info of the next race of the current season
  getNextRace(): Promise<RaceApiResponse> {
    const url = `/current/next`

    return this.request(url)
  }
}
