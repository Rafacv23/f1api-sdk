import { Base } from "src/base"
import { buildQueryParams } from "src/utils"
import {
  DriverApiResponse,
  DriversApiResponse,
  DriversByYearWithResultsApiResponse,
} from "./types"

const resourceName = "drivers"

export class Drivers extends Base {
  /**
   * getDrivers - Returns all the f1 drivers in the database.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<DriversApiResponse>} Object array with the drivers and his info.
   *
   * @example
   * ```ts
   * const drivers = await getDrivers({ limit: 1, offset: 0 });
   * ```
   */
  getDrivers({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<DriversApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }

  /**
   * getDriversByYear - Returns all the f1 drivers of a specific year.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<DriversApiResponse>} Object array with the drivers and his info.
   *
   * @example
   * ```ts
   * const drivers = await getDriversByYear({ year: 2023, limit: 1, offset: 0 });
   * ```
   */
  getDriversByYear({
    year,
    limit,
    offset,
  }: {
    year: number
    limit?: number
    offset?: number
  }): Promise<DriversApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${resourceName}?${queryString}`

    return this.request(url)
  }

  /**
   * getDriver - Returns a specific f1 driver based on his id.
   *
   * @param {string} [id] - Driver id, ej: alonso.
   * @returns {Promise<DriverApiResponse>} Object with the driver and his info.
   *
   * @example
   * ```ts
   * const driver = await getDriver({ id: "alonso" });
   * ```
   */
  getDriver({ id }: { id: string }): Promise<DriverApiResponse> {
    const url = `/${resourceName}/${id}`

    return this.request(url)
  }

  /**
   * getCurrentDrivers - Returns all the f1 drivers of the current year.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<DriversApiResponse>} Object array with the drivers and his info.
   *
   * @example
   * ```ts
   * const drivers = await getCurrentDrivers({ limit: 1, offset: 0 });
   * ```
   */
  getCurrentDrivers({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<DriversApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/${resourceName}?${queryString}`

    return this.request(url)
  }

  /**
   * getDrivers - Returns a specific f1 driver of the current year based on his id, with his results.
   *
   * @param {string} [id] - Driver id, ej: alonso.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<DriversApiResponse>} Object array with the driver and his results info.
   *
   * @example
   * ```ts
   * const drivers = await getCurrentDriver({ id: "alonso", limit: 1, offset: 0 });
   * ```
   */
  getCurrentDriver({
    id,
    limit,
    offset,
  }: {
    id: string
    limit?: number
    offset?: number
  }): Promise<DriversByYearWithResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/${resourceName}/${id}?${queryString}`

    return this.request(url)
  }

  /**
   * getDrivers - Returns a specific f1 driver of the specific year based on his id, with his results.
   *
   * @param {string} [id] - Driver id, ej: alonso.
   * @param {number} [year] - Year of the season.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<DriversApiResponse>} Object array with the driver and his results info.
   *
   * @example
   * ```ts
   * const drivers = await getDriverByYear({ id: "alonso", year: 2023, limit: 1, offset: 0 });
   * ```
   */
  getDriverByYear({
    year,
    id,
    limit,
    offset,
  }: {
    year: number
    id: string
    limit?: number
    offset?: number
  }): Promise<DriversByYearWithResultsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${resourceName}/${id}?${queryString}`

    return this.request(url)
  }
}
