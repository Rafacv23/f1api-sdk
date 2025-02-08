import { BaseApiResponse } from "../../types/F1Api"

interface Season {
  championshipId: string
  championshipName: string
  url: string
  year: number
}

export interface SeasonsApiResponse extends BaseApiResponse {
  championships: Season[]
}
