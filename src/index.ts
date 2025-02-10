import { Base } from "./base"
import { Circuits } from "./circuits/circuits"
import { Drivers } from "./drivers/drivers"
import { Races } from "./races/races"
import { Seasons } from "./seasons/seasons"
import { Standings } from "./standings/standings"
import { Teams } from "./teams/teams"
import { applyMixins } from "./utils"

class F1Api extends Base {}
interface F1Api extends Seasons, Circuits, Standings, Drivers, Teams, Races {}

applyMixins(F1Api, [Seasons, Circuits, Standings, Drivers, Teams, Races])

// export all the classes with the methods
export { F1Api, Seasons, Circuits, Standings, Drivers, Teams, Races }

// export all the apiResponses types
export type { SeasonsApiResponse } from "./seasons/types"
export type {
  DriverStandingsApiResponse,
  ConstructorStandingsApiResponse,
} from "./standings/types"
export type { CircuitApiResponse, CircuitsApiResponse } from "./circuits/types"
export type {
  DriverApiResponse,
  DriversApiResponse,
  DriversByYearWithResultsApiResponse,
} from "./drivers/types"
export type {
  TeamApiResponse,
  TeamsApiResponse,
  TeamWithDriversApiResponse,
} from "./teams/types"
export type { RaceApiResponse, RacesApiResponse } from "./races/types"
