export interface Paciente {
    id: number,
    nombre: string;
    apellido: string;
    tipo_sangre: string;
    alergias?: string;
    tutor: string;
    medicamentos?: string;
  }
  