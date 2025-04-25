import { Base } from "../base"
import { SeasonsApiResponse } from "./types"
import { buildQueryParams } from "../utils"

const resourceName = "seasons"

export class Seasons extends Base {
  /**
   * getSeasons - Returns the list of the f1 seasons.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<SeasonsApiResponse>} Object array with the seasons and his info.
   *
   * @example
   * ```ts
   * const seasons = await getSeasons({ limit: 1, offset: 0 });
   * ```
   */
  getSeasons({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<SeasonsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }
}
