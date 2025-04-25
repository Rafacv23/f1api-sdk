import { Base } from "src/base"
import { buildQueryParams } from "src/utils"
import {
  Fp1ResultsApiResponse,
  Fp2ResultsApiResponse,
  Fp3ResultsApiResponse,
  QualyResultsApiResponse,
  SprintQualyResultsApiResponse,
  SprintRaceResultsApiResponse,
  RaceResultsApiResponse,
} from "./types"

export class Results extends Base {
  /**
   * getFp1Results - Returns fp1 results of a race, based on the year and round.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [round] - Round of the race.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<Fp1ResultsApiResponse>} Object array with the fp1 results of the race.
   *
   * @example
   * ```ts
   * const results = await getFp1Results({ year: 2023, round: 1, limit: 1, offset: 0 });
   * ```
   */
  getFp1Results({
    year,
    round,
    limit,
    offset,
  }: {
    year: number
    round: number
    limit?: number
    offset?: number
  }): Promise<Fp1ResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/fp1?${queryString}`

    return this.request(url)
  }

  /**
   * getLastFp1Results - Returns fp1 results of the last race, of the current season.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<Fp1ResultsApiResponse>} Object array with the fp1 results of the race.
   *
   * @example
   * ```ts
   * const results = await getLastFp1Results({ limit: 1, offset: 0 });
   * ```
   */
  getLastFp1Results({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<Fp1ResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/fp1?${queryString}`

    return this.request(url)
  }

  /**
   * getFp2Results - Returns fp2 results of a race, based on the year and round.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [round] - Round of the race.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<Fp2ResultsApiResponse>} Object array with the fp2 results of the race.
   *
   * @example
   * ```ts
   * const results = await getFp2Results({ year: 2023, round: 1, limit: 1, offset: 0 });
   * ```
   */
  getFp2Results({
    year,
    round,
    limit,
    offset,
  }: {
    year: number
    round: number
    limit?: number
    offset?: number
  }): Promise<Fp2ResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/fp2?${queryString}`

    return this.request(url)
  }

  /**
   * getLastFp2Results - Returns fp2 results of the last race, of the current season.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<Fp2ResultsApiResponse>} Object array with the fp2 results of the race.
   *
   * @example
   * ```ts
   * const results = await getLastFp2Results({ limit: 1, offset: 0 });
   * ```
   */
  getLastFp2Results({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<Fp2ResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/fp2?${queryString}`

    return this.request(url)
  }

  /**
   * getFp3Results - Returns fp3 results of a race, based on the year and round.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [round] - Round of the race.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<Fp3ResultsApiResponse>} Object array with the fp3 results of the race.
   *
   * @example
   * ```ts
   * const results = await getFp3Results({ year: 2023, round: 1, limit: 1, offset: 0 });
   * ```
   */
  getFp3Results({
    year,
    round,
    limit,
    offset,
  }: {
    year: number
    round: number
    limit?: number
    offset?: number
  }): Promise<Fp3ResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/fp3?${queryString}`

    return this.request(url)
  }

  /**
   * getLastFp3Results - Returns fp3 results of a the last race, of the current season.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<Fp3ResultsApiResponse>} Object array with the fp3 results of the race.
   *
   * @example
   * ```ts
   * const results = await getLastFp3Results({ limit: 1, offset: 0 });
   * ```
   */
  getLastFp3Results({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<Fp3ResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/fp3?${queryString}`

    return this.request(url)
  }

  /**
   * getQualyResults - Returns qualy results of a race, based on the year and round.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [round] - Round of the race.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<QualyResultsApiResponse>} Object array with the qualy results of the race.
   *
   * @example
   * ```ts
   * const results = await getQualyResults({ year: 2023, round: 1, limit: 1, offset: 0 });
   * ```
   */
  getQualyResults({
    year,
    round,
    limit,
    offset,
  }: {
    year: number
    round: number
    limit?: number
    offset?: number
  }): Promise<QualyResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/qualy?${queryString}`

    return this.request(url)
  }

  /**
   * getLastQualyResults - Returns qualy results of the last race, of the current season.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<QualyResultsApiResponse>} Object array with the qualy results of the race.
   *
   * @example
   * ```ts
   * const results = await getLastQualyResults({ limit: 1, offset: 0 });
   * ```
   */
  getLastQualyResults({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<QualyResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/qualy?${queryString}`

    return this.request(url)
  }

  /**
   * getRaceResults - Returns race results of a race, based on the year and round.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [round] - Round of the race.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<RaceResultsApiResponse>} Object array with the race results of the race.
   *
   * @example
   * ```ts
   * const results = await getRaceResults({ year: 2023, round: 1, limit: 1, offset: 0 });
   * ```
   */
  getRaceResults({
    year,
    round,
    limit,
    offset,
  }: {
    year: number
    round: number
    limit?: number
    offset?: number
  }): Promise<RaceResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/race?${queryString}`

    return this.request(url)
  }

  /**
   * getLastRaceResults - Returns race results of the last race, of the current season.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<RaceResultsApiResponse>} Object array with the race results of the race.
   *
   * @example
   * ```ts
   * const results = await getLastRaceResults({ limit: 1, offset: 0 });
   * ```
   */
  getLastRaceResults({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<RaceResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/race?${queryString}`

    return this.request(url)
  }

  /**
   * getSprintRaceResults - Returns sprint results of a race, based on the year and round.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [round] - Round of the race.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<SprintRaceResultsApiResponse>} Object array with the sprint race results of the race.
   *
   * @example
   * ```ts
   * const results = await getSprintRaceResults({ year: 2023, round: 1, limit: 1, offset: 0 });
   * ```
   */
  getSprintRaceResults({
    year,
    round,
    limit,
    offset,
  }: {
    year: number
    round: number
    limit?: number
    offset?: number
  }): Promise<SprintRaceResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/sprint/race?${queryString}`

    return this.request(url)
  }

  /**
   * getLastSprintRaceResults - Returns sprint results of the last race, of the current season.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<SprintRaceResultsApiResponse>} Object array with the sprint race results of the race.
   *
   * @example
   * ```ts
   * const results = await getLastSprintRaceResults({ limit: 1, offset: 0 });
   * ```
   */
  getLastSprintRaceResults({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<SprintRaceResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/sprint/race?${queryString}`

    return this.request(url)
  }

  /**
   * getSprintQualyResults - Returns sprint qualy results of a race, based on the year and round.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [round] - Round of the race.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<SprintQualyResultsApiResponse>} Object array with the sprint qualy results of the race.
   *
   * @example
   * ```ts
   * const results = await getSprintQualyResults({ year: 2023, round: 1, limit: 1, offset: 0 });
   * ```
   */
  getSprintQualyResults({
    year,
    round,
    limit,
    offset,
  }: {
    year: number
    round: number
    limit?: number
    offset?: number
  }): Promise<SprintQualyResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/sprint/qualy?${queryString}`

    return this.request(url)
  }

  /**
   * getLastSprintQualyResults - Returns sprint qualy results of the last race, of the current season.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<SprintQualyResultsApiResponse>} Object array with the sprint qualy results of the race.
   *
   * @example
   * ```ts
   * const results = await getLastSprintQualyResults({ limit: 1, offset: 0 });
   * ```
   */
  getLastSprintQualyResults({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<SprintQualyResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/sprint/qualy?${queryString}`

    return this.request(url)
  }
}
