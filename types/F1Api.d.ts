export interface BaseApiResponse {
  api: string
  url: string
  offset?: string | number
  limit?: string | number
  total?: number
}
