export type TAcuerdo = {
  n_id_acuerdo?: number | undefined
  n_id_medio_impugnacion: number | undefined
  n_id_tipo_acuerdo: number
  d_fecha_acuerdo: string
  s_punto_acuerdo?: string
  s_numero_votos?: string
  s_url_sentencia_pdf?: string
  s_url_sentencia_doc?: string
  //-----------
  file__b64_s_url_sentencia_pdf?: string
  file__b64_s_url_sentencia_doc?: string
}
