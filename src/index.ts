import { Base } from "./base"
import { Circuits } from "./circuits/circuits"
import { Drivers } from "./drivers/drivers"
import { Seasons } from "./seasons/seasons"
import { Standings } from "./standings/standings"
import { applyMixins } from "./utils"

class F1Api extends Base {}
interface F1Api extends Seasons, Circuits, Standings, Drivers {}

applyMixins(F1Api, [Seasons, Circuits, Standings, Drivers])

export default F1Api
