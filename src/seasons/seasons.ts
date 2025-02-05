import { Base } from "../base"
import { Season } from "./types"

const resourceName = "seasons"

export class Seasons extends Base {
  getSeasons(): Promise<Season[]> {
    return this.request(`/${resourceName}`)
  }
}
