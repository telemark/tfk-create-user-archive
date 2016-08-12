'use strict'

const envs = process.env

module.exports = {
  p360: {
    user: envs.P360WS_USER || 'domain/user', // username
    password: envs.P360WS_PASSWORD || 'password', // passord
    baseUrl: envs.P360WS_BASEURL || 'http://tfk-fh-siweb01t.login.top.no:8088/SI.WS.Core/SIF/'
  },
  dsf: {
    url: envs.DSF_URL || 'http://ws-test.infotorg.no/xml/ErgoGroup/DSFMasseoppslag1_4/2015-08-10/DSFMasseoppslag1_4.wsdl',
    namespaceBrukersesjon: envs.DSF_NAMESPACE || 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
    distribusjonskanal: envs.DSF_DISTRIBUSJON || 'PTP',
    systemnavn: envs.DSF_SYSTEMNAVN || '360-import',
    brukernavn: envs.DSF_BRUKERNAVN || 'BRUKER',
    passord: envs.DSF_PASSORD || 'PASSWORD'
  }
}
