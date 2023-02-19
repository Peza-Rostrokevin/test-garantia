export interface Usuario {
  id?: number,
  username: string,
  password: string;
  correo: string,
  telefono: number,
  perfil_id?: number
}

export interface RequestU {
  success: boolean,
  users: Usuario[]
}
