import { BaseApiResponse } from "types/F1Api"

interface Circuit {
  circuitId: string
  circuitName: string
  country: string
  city: string
  circuitLength: number
  firstParticipationYear: number
  numberOfCorners: number
  lapRecord: string
  fastestLapDriverId: string
  fastestLapTeamId: string
  fastestLapYear: number
  url: string
}

export interface CircuitApiResponse extends BaseApiResponse {
  circuit: Circuit[]
}
export interface CircuitsApiResponse extends BaseApiResponse {
  circuits: Circuit[]
}
