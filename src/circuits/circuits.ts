import { Base } from "../base"
import { buildQueryParams } from "../utils"
import { CircuitApiResponse, CircuitsApiResponse } from "./types"

const resourceName = "circuits"

export class Circuits extends Base {
  getCircuits({
    limit,
    offset,
  }: {
    limit?: number
    offset?: number
  } = {}): Promise<CircuitsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }

  getCircuit({ id }: { id: string }): Promise<CircuitApiResponse> {
    const url = `/${resourceName}/${id}`

    return this.request(url)
  }

  getCircuitsByYear({
    year,
    limit,
    offset,
  }: {
    year: number
    limit?: number
    offset?: number
  }): Promise<CircuitsApiResponse> {
    const queryString = buildQueryParams(limit, offset)
    const url = `/${year}/${resourceName}?${queryString}`

    return this.request(url)
  }
}
