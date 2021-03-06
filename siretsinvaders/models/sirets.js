const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    siren: {type: Number, default: null, required: true},
    nic: {type: Number, default: null, required: true},
    siret: {type: Number, default: null, required: true, unique: true},
    statutdiffusionetablissement: {type: String},
    datecreationetablissement: {type: Date},
    trancheeffectifsetablissement: {type: String},
    anneeeffectifsetablissement: {type: Date},
    activiteprincipaleregistremetiersetablissement: {type: String},
    datederniertraitementetablissement: {type: Date},
    etablissementsiege: {type: Boolean},
    nombreperiodesetablissement: {type: Number},
    complementadresseetablissement: {type: String},
    numerovoieetablissement: {type: Number},
    indicerepetitionetablissement: {type: String},
    typevoieetablissement: {type: String},
    libellevoieetablissement: {type: String},
    codepostaletablissement: {type: Number},
    libellecommuneetablissement: {type: String},
    libellecommuneetrangeretablissement: {type: String},
    distributionspecialeetablissement: {type: String},
    codecommuneetablissement: {type: Number},
    codecedexetablissement: {type: Number},
    libellecedexetablissement: {type: String},
    codepaysetrangeretablissement: {type: String},
    libellepaysetrangeretablissement: {type: String},
    complementadresse2etablissement: {type: String},
    numerovoie2etablissement: {type: Number},
    indicerepetition2etablissement: {type: String},
    typevoie2etablissement: {type: String},
    libellevoie2etablissement: {type: String},
    codepostal2etablissement: {type: Number},
    libellecommune2etablissement: {type: String},
    libellecommuneetranger2etablissement: {type: String},
    distributionspeciale2etablissement: {type: String},
    codecommune2etablissement: {type: Number},
    codecedex2etablissement: {type: String},
    libellecedex2etablissement: {type: String},
    codepaysetranger2etablissement: {type: String},
    libellepaysetranger2etablissement: {type: String},
    datedebut: {type: Date},
    etatadministratifetablissement: {type: String},
    enseigne1etablissement: {type: String},
    enseigne2etablissement: {type: String},
    enseigne3etablissement: {type: String},
    denominationusuelleetablissement: {type: String},
    activiteprincipaleetablissement: {type: String},
    nomenclatureactiviteprincipaleetablissement: {type: String},
    caractereemployeuretablissement: {type: String}
}, {
    collection: 'sirets',
    minimize: false,
    versionKey: false,
})

module.exports = Schema