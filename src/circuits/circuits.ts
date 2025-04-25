import { Base } from "../base"
import { buildQueryParams } from "../utils"
import { CircuitApiResponse, CircuitsApiResponse } from "./types"

const resourceName = "circuits"

export class Circuits extends Base {
  /**
   * getCircuits - Returns the list of the f1 circuits.
   *
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<CircuitsApiResponse>} Object array with the circuits and his info.
   *
   * @example
   * ```ts
   * const circuits = await getCircuits({ limit: 1, offset: 0 });
   * ```
   */
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

  /**
   * getCircuit - Returns the specific circuit based on his id.
   *
   * @param {number} [id] - Circuit id, ej: spa
   * @returns {Promise<CircuitApiResponse>} Object with the circuit and his info.
   *
   * @example
   * ```ts
   * const circuit = await getCircuit({ id: "spa" });
   * ```
   */
  getCircuit({ id }: { id: string }): Promise<CircuitApiResponse> {
    const url = `/${resourceName}/${id}`

    return this.request(url)
  }

  /**
   * getCircuitsByYear - Returns the list of the f1 circuits of a specific year.
   *
   * @param {number} [year] - Year of the season.
   * @param {number} [limit] - Maximum number of results to return.
   * @param {number} [offset] - Number of results to skip.
   * @returns {Promise<CircuitsApiResponse>} Object array with the circuits and his info.
   *
   * @example
   * ```ts
   * const circuits = await getCircuitsByYear({ year: 2023, limit: 1, offset: 0 });
   * ```
   */
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
