import { Candidato } from './candidato';
import { TipoEstudio } from './tipo-estudio';

export interface Solicitud {
  id?: number;
  candidato_id: number;
  tipo_estudio_id: number;
  estado: 'pendiente' | 'en_proceso' | 'completado';
  fecha_solicitud?: string;
  fecha_completado?: string;
  candidato?: Candidato;
  tipo_estudio?: TipoEstudio;
}
