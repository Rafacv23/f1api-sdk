import { Base } from "./base"
import { Seasons } from "./seasons/seasons"
import { applyMixins } from "./utils"

class F1Api extends Base {}
interface F1Api extends Seasons {}

applyMixins(F1Api, [Seasons])

export default F1Api
