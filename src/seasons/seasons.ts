import { Base } from "../base"
import { SeasonsApiResponse } from "./types"
import { buildQueryParams } from "../utils"

const resourceName = "seasons"

export class Seasons extends Base {
  getSeasons({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<SeasonsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }
}
