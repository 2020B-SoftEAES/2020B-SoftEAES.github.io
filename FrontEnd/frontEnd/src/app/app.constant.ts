export class AppConstant {
  static readonly MENSAJE_ERROR_CONEXION_SERVIDOR = 'Comuníquese con soporte técnico.';
  static readonly MENSAGE_ACTUALIAZCION_CORRECTO = 'Actualizado correctamente.';
  static readonly MENSAGE_ERROR_ACTUALIZAR = 'Error al actualizar.';
  static readonly MENSAGE_CREADO_CORRECTO = 'Creado correctamente.';
  static readonly MENSAGE_ERROR_CREAR = 'Error al crear.';
  static readonly MENSAGE_ELIMINAR_CORRECTO = 'Eliminado correctamente.';
  static readonly MENSAGE_ERROR_ELIMINAR = 'Error al eliminar.';
  static readonly MENSAGE_OBTENER_DATOS = 'Error al obtener los datos, intente nuevamente!';
  static readonly MENSAGE_LLENAR_FORMULARIO = 'Ingrese toda la información referente al formulario.';

  // TIPO DE USUARIO
  static readonly ID_TIPO_USUARIO_ADMINISTRADOR = 1;
  static readonly ID_TIPO_USUARIO_INSTRUCTOR = 2;
  static readonly ID_TIPO_USUARIO_ESTUDIANTE = 3;

  static readonly EXAMEN_ESTADO_HABILITADO = 1;

  // ROLES ESTATICOS A NIVEL DE FRONTEND
  static readonly CODIGO_MODULO_ESTUDIANTE = 'MOES';
  static readonly CODIGO_MODULO_INSTRUCTOR = 'MOIN';
  static readonly CODIGO_MODULO_EXAMEN = 'MOEX';
  static readonly CODIGO_MODULO_EXAMEN_RENDIDO = 'MOEXREN';
  static readonly CODIGO_MODULO_SIMULADOR = 'MOSI';

  static readonly CODIGO_TIPO_USUARIO_ADIMINSTRADOR = 'ADM1';
  static readonly CODIGO_TIPO_USUARIO_ESTUDIANTE = 'ADM3';
  static readonly CODIGO_TIPO_USUARIO_INSTRUCTOR = 'ADM2';
  static readonly ROL_ADMINISTRADOR = [
    AppConstant.CODIGO_MODULO_ESTUDIANTE,
    AppConstant.CODIGO_MODULO_INSTRUCTOR,
    AppConstant.CODIGO_MODULO_EXAMEN,
    AppConstant.CODIGO_MODULO_EXAMEN_RENDIDO,
    AppConstant.CODIGO_MODULO_SIMULADOR
  ];
  static readonly ROL_ESTUDIANTE = [
    AppConstant.CODIGO_MODULO_EXAMEN_RENDIDO,
    AppConstant.CODIGO_MODULO_SIMULADOR
  ];
  static readonly ROL_INSTRUCTOR = [
    AppConstant.CODIGO_MODULO_ESTUDIANTE,
    AppConstant.CODIGO_MODULO_EXAMEN
  ];
}
