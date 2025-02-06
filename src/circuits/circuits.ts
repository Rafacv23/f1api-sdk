import { Base } from "../base"
import { buildQueryParams } from "../utils"
import { Circuit } from "./types"

const resourceName = "circuits"

export class Circuits extends Base {
  getCircuits({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  } = {}): Promise<Circuit[]> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }

  getCircuit(id: string): Promise<Circuit> {
    const url = `/${resourceName}/${id}`

    return this.request(url)
  }
}
