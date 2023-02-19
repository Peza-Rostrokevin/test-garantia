export interface Perfil {
  id: number,
  nombre: string,
  descripcion: string
}

export interface RequestP {
  perfiles: Perfil[]
}
