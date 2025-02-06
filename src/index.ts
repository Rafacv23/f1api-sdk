import { Base } from "./base"
import { Circuits } from "./circuits/circuits"
import { Seasons } from "./seasons/seasons"
import { applyMixins } from "./utils"

class F1Api extends Base {}
interface F1Api extends Seasons, Circuits {}

applyMixins(F1Api, [Seasons, Circuits])

export default F1Api
