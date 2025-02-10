import { Base } from "src/base"
import { buildQueryParams } from "src/utils"

export class Results extends Base {
  //retrieves fp1 results of a race, based on the year and round
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
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/fp1?${queryString}`

    return this.request(url)
  }

  //retrieves fp1 results of the last race of the current season
  getLastFp1Results({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/fp1?${queryString}`

    return this.request(url)
  }

  //retrieves fp2 results of a race, based on the year and round
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
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/fp2?${queryString}`

    return this.request(url)
  }

  //retrieves fp2 results of the last race of the current season
  getLastFp2Results({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/fp2?${queryString}`

    return this.request(url)
  }

  //retrieves fp3 results of a race, based on the year and round
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
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/fp3?${queryString}`

    return this.request(url)
  }

  //retrieves fp3 results of the last race of the current season
  getLastFp3Results({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/fp3?${queryString}`

    return this.request(url)
  }

  // retrieves qualifying results of a race, based on the year and round
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
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/qualy?${queryString}`

    return this.request(url)
  }

  //retrieves qualifying results of the last race of the current season
  getLastQualyResults({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/qualy?${queryString}`

    return this.request(url)
  }

  //retrieves race results of a race, based on the year and round
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
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/race?${queryString}`

    return this.request(url)
  }

  //retrieves race results of the last race of the current season
  getLastRaceResults({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/race?${queryString}`

    return this.request(url)
  }

  //retrieves sprint results of a race, based on the year and round
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
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/sprint/race?${queryString}`

    return this.request(url)
  }

  //retrieves sprint results of the last race of the current season
  getLastSprintRaceResults({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/sprint/race?${queryString}`

    return this.request(url)
  }

  //retrieves sprint qualy results of a race, based on the year and round
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
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${round}/sprint/qualy?${queryString}`

    return this.request(url)
  }

  //retrieves sprint qualy results of the last race of the current season
  getLastSprintQualyResults({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  }): Promise<any> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/last/sprint/qualy?${queryString}`

    return this.request(url)
  }
}
