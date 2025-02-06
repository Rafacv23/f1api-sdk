export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      const descriptor = Object.getOwnPropertyDescriptor(
        baseCtor.prototype,
        name
      )
      if (descriptor) {
        Object.defineProperty(derivedCtor.prototype, name, descriptor)
      }
    })
  })
}

export function buildQueryParams(limit: number, offset: number): string {
  // Crear un objeto para los parámetros de consulta
  const params: Record<string, string> = {}

  // Agregar los parámetros solo si están definidos
  if (limit !== undefined) params.limit = String(limit)
  if (offset !== undefined) params.offset = String(offset)

  const queryString = new URLSearchParams(params).toString()

  return queryString
}
