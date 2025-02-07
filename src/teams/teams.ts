import { Base } from "src/base"
import { buildQueryParams } from "src/utils"
import { Team } from "./types"

const resourceName = "teams"

export class Teams extends Base {
  // returns all the f1 teams in the database
  getTeams({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<Team[]> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }

  //returns a f1 team based on his id
  getTeam({ id }: { id: string }): Promise<Team> {
    const url = `/${resourceName}/${id}`

    return this.request(url)
  }

  //returns all the f1 teams of a specific year
  getTeamsByYear({
    year,
    limit,
    offset,
  }: {
    year: number
    limit?: number
    offset?: number
  }): Promise<Team[]> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${resourceName}?${queryString}`

    return this.request(url)
  }

  //returns all the f1 teams of the curren year
  getCurrentTeams({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<Team[]> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/${resourceName}?${queryString}`

    return this.request(url)
  }

  // returns a team based on a year and his id
  getTeamByYear({ year, id }: { year: number; id: string }): Promise<Team> {
    const url = `/${year}/${resourceName}/${id}`

    return this.request(url)
  }

  // returns a team based on the current year and his id
  getCurrentTeam({ id }: { id: string }): Promise<Team> {
    const url = `/current/${resourceName}/${id}`

    return this.request(url)
  }

  //returns a team with his drivers based on a year and the team id
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
  }): Promise<Team> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${resourceName}/${id}/drivers?${queryString}`

    return this.request(url)
  }

  // returns a team with his drivers based on the current year and the team id
  getCurrentTeamWithDrivers({
    id,
    limit,
    offset,
  }: {
    id: string
    limit?: number
    offset?: number
  }): Promise<Team> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/current/${resourceName}/${id}/drivers?${queryString}`

    return this.request(url)
  }
}
