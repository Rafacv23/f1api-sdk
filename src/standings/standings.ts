import { Base } from "src/base"
import { buildQueryParams } from "src/utils"
import {
  ConstructorStandingsApiResponse,
  DriverStandingsApiResponse,
} from "./types"

const driverStandings = "drivers-championship"
const constructorStandings = "constructors-championship"

export class Standings extends Base {
  /**
   * getDriverStandings - Returns the driver standings of a specific year.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<DriverStandingsApiResponse>} Object array with the driver standings with the info of the driver and his team.
   *
   * @example
   * ```ts
   * const standings = await getDriverStandings({ year: 2023, limit: 1, offset: 0 });
   * ```
   */
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

  /**
   * getCurrentDriverStandings - Returns the driver standings of the current year.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<TeamWithDriversApiResponse>} Object array with the driver standings with the info of the driver and his team.
   *
   * @example
   * ```ts
   * const standings = await getCurrentDriverStandings({ limit: 1, offset: 0 });
   * ```
   */
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

  /**
   * getConstructorStandings - Returns the team standings of the specific year.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<ConstructorStandingsApiResponse>} Object array with the team standings with the info of the team.
   *
   * @example
   * ```ts
   * const standings = await getConstructorStandings({ year: 2023, limit: 1, offset: 0 });
   * ```
   */
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

  /**
   * getCurrentConstructorStandings - Returns the team standings of the current year.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<ConstructorStandingsApiResponse>} Object array with the team standings with the info of the team.
   *
   * @example
   * ```ts
   * const standings = await getCurrentConstructorStandings({ limit: 1, offset: 0 });
   * ```
   */
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
