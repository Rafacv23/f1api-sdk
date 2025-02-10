import { Base } from "src/base"
import { buildQueryParams } from "src/utils"
import {
  ConstructorStandingsApiResponse,
  DriverStandingsApiResponse,
} from "./types"

const driverStandings = "drivers-championship"
const constructorStandings = "constructors-championship"

export class Standings extends Base {
  getDriverStandings({
    year,
    limit,
    offset,
  }: {
    year: number
    limit?: number
    offset?: number
  }): Promise<DriverStandingsApiResponse> {
    const queryParams = buildQueryParams(limit, offset)

    const url = `/${year}/${driverStandings}?${queryParams}`

    return this.request(url)
  }

  getCurrentDriverStandings({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  } = {}): Promise<DriverStandingsApiResponse> {
    const queryParams = buildQueryParams(limit, offset)

    const url = `/current/${driverStandings}?${queryParams}`

    return this.request(url)
  }

  getConstructorStandings({
    year,
    limit,
    offset,
  }: {
    year: number
    limit?: number
    offset?: number
  }): Promise<ConstructorStandingsApiResponse> {
    const queryParams = buildQueryParams(limit, offset)

    const url = `/${year}/${constructorStandings}?${queryParams}`

    return this.request(url)
  }

  getCurrentConstructorStandings({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  } = {}): Promise<ConstructorStandingsApiResponse> {
    const queryParams = buildQueryParams(limit, offset)

    const url = `/current/${constructorStandings}?${queryParams}`

    return this.request(url)
  }
}
