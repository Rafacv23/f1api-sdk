import fetch from "isomorphic-unfetch"

export abstract class Base {
  private baseUrl: string

  constructor() {
    this.baseUrl = "https://f1api.dev/api"
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

    try {
      const response = await fetch(url, config)
      if (response.ok) {
        return response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}
