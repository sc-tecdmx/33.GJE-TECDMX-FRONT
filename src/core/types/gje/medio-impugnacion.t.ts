import type { TAcuerdo } from './acuerdo.t'
import type { TAutoridadResposable } from './autoridad-responsable.t'
import type { TTematica } from './tematica.t'

export type TMedioImpugnacion = {
  n_id_medio_impugnacion: number
  n_id_medio_impugnacion_principal?: number
  // Sección 1. Expediente
  //--1
  s_expediente: string
  s_expediente_principal?: string
  s_url_sentencia_doc?: string
  s_url_sentencia_pdf?: string
  //--2
  d_fecha_recepcion?: string
  d_hora_recepcion?: string
  n_id_tipo_medio?: number
  //--3
  s_acto_impugnado?: string
  s_tipo_acto_impugnado?: string
  s_parte_actora?: string
  // a_autoridades_demadadas: TAutoridadResposable[] TODO. Momenteneamente
  n_id_autoridad_responsable?: number
  s_tercer_interesado?: string
  //--4
  n_id_ponencia_instructora?: number
  n_id_ponencia_returno?: number
  a_tematicas?: TTematica[]
  //--5
  a_acuerdos?: TAcuerdo[]

  //-- 9
  s_sintesis?: string
  s_url_infografia_pdf?: string
}
