import fetch from "isomorphic-unfetch"

type Config = {
  baseUrl?: string
}

export abstract class Base {
  private baseUrl: string

  constructor(config: Config) {
    this.baseUrl = config.baseUrl || "https://f1api.dev/api"
  }

  protected async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const headers = {
      "Content-Type": "application/json",
    }
    const config = {
      ...options,
      headers,
    }

    const response = await fetch(url, config)
    if (response.ok) {
      return response.json()
    }
    throw new Error(response.statusText)
  }
}
