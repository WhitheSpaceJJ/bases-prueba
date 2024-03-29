// Importamos los routers de cada entidad
const routerDemanda = require('./demanda')
const routerDenuncia = require('./denuncia')
const routerEscolaridad = require('./escolaridad')
const routerEstadoProcesal = require('./estado_procesal')
const routerEtnia = require('./etnia')
const routerImputado = require('./imputado')
const routerJuez = require('./juez')
const routerJuzgado = require('./juzgado')
const routerOcupacion = require('./ocupacion')
const routerParticipante = require('./participante')
const routerProcesoJudicial = require('./proceso_judicial')
const routerPromovente = require('./promovente')

// Exportamos los routers para que puedan ser utilizados en otras partes de la aplicación
module.exports = {
  routerDemanda,
  routerDenuncia,
  routerEscolaridad,
  routerEstadoProcesal,
  routerEtnia,
  routerImputado,
  routerJuez,
  routerJuzgado,
  routerOcupacion,
  routerParticipante,
  routerProcesoJudicial,
  routerPromovente
}