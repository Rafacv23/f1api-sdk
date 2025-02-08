import { Base } from "./base"
import { Circuits } from "./circuits/circuits"
import { Drivers } from "./drivers/drivers"
import { Seasons } from "./seasons/seasons"
import { Standings } from "./standings/standings"
import { Teams } from "./teams/teams"
import { applyMixins } from "./utils"

class F1Api extends Base {}
interface F1Api extends Seasons, Circuits, Standings, Drivers, Teams {}

applyMixins(F1Api, [Seasons, Circuits, Standings, Drivers, Teams])

export { F1Api, Seasons, Circuits, Standings, Drivers, Teams }
