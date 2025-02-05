import { SeasonsResponse } from "../types/F1Api"

export class F1Api {
  private baseUrl: string

  constructor(baseUrl: string = "https://f1api.dev/api") {
    this.baseUrl = baseUrl
  }

  async getSeasons<T>(): Promise<SeasonsResponse[]> {
    const response = await fetch(`${this.baseUrl}/seasons`)
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    return response.json()
  }
}
