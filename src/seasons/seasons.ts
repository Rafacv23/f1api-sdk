import { Base } from "../base"
import { Season } from "./types"

const resourceName = "seasons"

export class Seasons extends Base {
  getSeasons({
    limit,
    offset,
  }: { limit?: number; offset?: number } = {}): Promise<Season[]> {
    // Crear un objeto para los parámetros de consulta
    const params: Record<string, string> = {}

    // Agregar los parámetros solo si están definidos
    if (limit !== undefined) params.limit = String(limit)
    if (offset !== undefined) params.offset = String(offset)

    // Crear la URL con parámetros de consulta usando URLSearchParams
    const queryString = new URLSearchParams(params).toString()
    const url = `/${resourceName}?${queryString}`

    return this.request(url)
  }
}
