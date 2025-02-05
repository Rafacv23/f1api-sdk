interface BaseApiResponse {
  api: string
  url: string
  offset?: string | number
  limit?: string | number
  total?: number
}

interface Season {
  championshipId: string
  championshipName: string
  url: string
  year: number
}

export interface SeasonsResponse extends BaseApiResponse {}
