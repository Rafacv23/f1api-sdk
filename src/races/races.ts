import { Base } from "../base"
import { buildQueryParams } from "../utils"
import { RaceApiResponse, RacesApiResponse } from "./types"

export class Races extends Base {
  /**
   * getRacesByYear - returns all the races of a specific year.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<RacesApiResponse>} Object array with the races and his info.
   *
   * @example
   * ```ts
   * const races = await getRacesByYear({ year: 2023, limit: 1, offset: 0 });
   * ```
   */
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

  /**
   * getCurrentRaces - returns all the races of the current year.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<RacesApiResponse>} Object array with the races and his info.
   *
   * @example
   * ```ts
   * const races = await getCurrentRaces({ limit: 1, offset: 0 });
   * ```
   */
  getCurrentRaces({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<RacesApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current?${queryString}`

    return this.request(url)
  }

  /**
   * getRaceInfo - returns details of a specific race based on the year and the round.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [round] - Round of the race.
   * @returns {Promise<RaceApiResponse>} Object with the race info.
   *
   * @example
   * ```ts
   * const race = await getRaceInfo({ year: 2023, round: 1 });
   * ```
   */
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

  /**
   * getLastRace - returns info of the last race (completed) of the current year.
   *
   * @returns {Promise<RaceApiResponse>} Object array with the races and his info.
   *
   * @example
   * ```ts
   * const race = await getLastRace();
   * ```
   */
  getLastRace(): Promise<RaceApiResponse> {
    const url = `/current/last`

    return this.request(url)
  }

  /**
   * getNextRace - returns info of the next race of the calendar of the current year.
   *
   * @returns {Promise<RaceApiResponse>} Object array with the races and his info.
   *
   * @example
   * ```ts
   * const race = await getNextRace();
   * ```
   */
  getNextRace(): Promise<RaceApiResponse> {
    const url = `/current/next`

    return this.request(url)
  }
}
