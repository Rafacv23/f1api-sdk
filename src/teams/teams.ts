import { Base } from "src/base"
import { buildQueryParams } from "src/utils"
import {
  TeamApiResponse,
  TeamsApiResponse,
  TeamWithDriversApiResponse,
} from "./types"

const resourceName = "teams"

export class Teams extends Base {
  /**
   * getTeams - Returns all the f1 teams inside the database.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<TeamsApiResponse>} Object array with the teams.
   *
   * @example
   * ```ts
   * const teams = await getTeams({ limit: 1, offset: 0 });
   * ```
   */
  getTeams({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<TeamsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }

  /**
   * getTeam - Returns a f1 team based on his id.
   *
   * @param {string} [id] - The id of the team.
   * @returns {Promise<TeamApiResponse>} Team object.
   *
   * @example
   * ```ts
   * const team = await getTeam({ id: "ferrari"});
   * ```
   */
  getTeam({ id }: { id: string }): Promise<TeamApiResponse> {
    const url = `/${resourceName}/${id}`

    return this.request(url)
  }

  /**
   * getTeamsByYear - Returns all the f1 teams of a specific year.
   *
   * @param {number} year - The year of the season.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<TeamsApiResponse>} Object array with the teams.
   *
   * @example
   * ```ts
   * const teams = await getTeamsByYear({ year: 2023, limit: 1, offset: 0 });
   * ```
   */
  getTeamsByYear({
    year,
    limit,
    offset,
  }: {
    year: number
    limit?: number
    offset?: number
  }): Promise<TeamsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${resourceName}?${queryString}`

    return this.request(url)
  }

  /**
   * getCurrentTeams - Returns all the f1 teams of the current year.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<TeamsApiResponse>} Object array with the teams.
   *
   * @example
   * ```ts
   * const teams = await getCurrentTeams({ limit: 1, offset: 0 });
   * ```
   */
  getCurrentTeams({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<TeamsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/${resourceName}?${queryString}`

    return this.request(url)
  }

  /**
   * getTeamByYear - Returns a f1 team of a specific year based on his id.
   *
   * @param {number} [year] - Maximum number of results to return.
   * @param {string} [id] - Team id ej: ferrari.
   * @returns {Promise<TeamApiResponse>} Team object.
   *
   * @example
   * ```ts
   * const team = await getTeamByYear({ year: 2023, id: "ferrari"});
   * ```
   */
  getTeamByYear({
    year,
    id,
  }: {
    year: number
    id: string
  }): Promise<TeamApiResponse> {
    const url = `/${year}/${resourceName}/${id}`

    return this.request(url)
  }

  /**
   * getCurrentTeam - Returns a f1 team of the current year based on his id.
   *
   * @param {string} [id] - Team id ej: ferrari.
   * @returns {Promise<TeamApiResponse>} Team object.
   *
   * @example
   * ```ts
   * const team = await getCurrentTeam({ id: "ferrari"});
   * ```
   */
  getCurrentTeam({ id }: { id: string }): Promise<TeamApiResponse> {
    const url = `/current/${resourceName}/${id}`

    return this.request(url)
  }

  /**
   * getTeamByYear - Returns a f1 team with his drivers info of a specific year based on his id.
   *
   * @param {number} [year] - Maximum number of results to return.
   * @param {string} [id] - Team id ej: ferrari.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<TeamWithDriversApiResponse>} Object array with the teams.
   *
   * @example
   * ```ts
   * const teams = await getTeamByYearWithDrivers({ year: 2023, id: "ferrari", limit: 1, offset: 0 });
   * ```
   */
  getTeamByYearWithDrivers({
    year,
    id,
    limit,
    offset,
  }: {
    year: number
    id: string
    limit?: number
    offset?: number
  }): Promise<TeamWithDriversApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${resourceName}/${id}/drivers?${queryString}`

    return this.request(url)
  }

  /**
   * getCurrentTeamWithDrivers - Returns a team with his drivers based on the current year and the team id.
   *
   * @param {string} [id] - Team id ej: ferrari.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<TeamWithDriversApiResponse>} Object array with the teams.
   *
   * @example
   * ```ts
   * const teams = await getCurrentTeamWithDrivers({ id: "ferrari", limit: 1, offset: 0 });
   * ```
   */
  getCurrentTeamWithDrivers({
    id,
    limit,
    offset,
  }: {
    id: string
    limit?: number
    offset?: number
  }): Promise<TeamWithDriversApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/${resourceName}/${id}/drivers?${queryString}`

    return this.request(url)
  }
}
