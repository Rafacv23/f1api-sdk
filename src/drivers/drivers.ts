import { Base } from "src/base"
import { buildQueryParams } from "src/utils"
import {
  DriverApiResponse,
  DriversApiResponse,
  DriversByYearWithResultsApiResponse,
} from "./types"

const resourceName = "drivers"

export class Drivers extends Base {
  // returns all the f1 drivers in the database
  getDrivers({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<DriversApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }

  // returns all the f1 drivers of a specific year
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

  // returns a specific f1 driver based on his id
  getDriver({ id }: { id: string }): Promise<DriverApiResponse> {
    const url = `/${resourceName}/${id}`

    return this.request(url)
  }

  // returns all the f1 drivers of the current year
  getCurrentDrivers({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<DriversApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/${resourceName}?${queryString}`

    return this.request(url)
  }

  // returns a specific f1 driver of the current year based on his id, with his results
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

  // returns a f1 driver based on a year and his id, with his results
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
