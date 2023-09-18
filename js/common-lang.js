const dictionaryFR = {
    'Ndsr' : 'Aucun palier requis',
    'Fd' : 'Première plongée',
    'Sd' : 'Seconde plongée',
    'Tsdipbttfsr' : 'Cette plongée successive est interdite par les tables pour des raisons de sécurité.',
    'Dadvmbp' : 'Les valeurs de profondeur et de durée doivent être positives.',
    'Rif' : 'Interval de référence pour',
    'Rrncf' : 'Coefficient d\'azote résiduel de référence pour',
    'Rdf' : 'Profondeur de référence pour',
    'Sdi' : 'Majoration de la seconde plongée',
    'Rduf' : 'Durée de référence pour',
    'Tintftd' : 'Il n\'y a pas de table pour cette profondeur.',
    'Tdtdneitt' : 'La durée de plongée (:1:min) n\'existe pas dans la table des :2:m.',
    'GPSfxmitxmt' : 'GPS pour :1: minutes dans la table des :2: mètres',
    'minutes' : 'minutes',
    'meters' : 'mètres',
    'min' : 'min',
    'm' : 'm',
    'Depth' : 'Profondeur',
    'Duration' : 'Durée',
    'Si' : 'Interval de surface',
    'Calculate' : 'Calculer',
    'alert' : 'Ce calculateur est basé sur les tables de plongée MN90-FFESSM. Bien qu\'un grand soin soit apporté ' +
        'au résultat du calcul, il peut y avoir des erreurs dans les résultats, ce calculateur ne constitue en aucun cas une substitution ' +
        'à l\'utilisation d\'un ordinateur de plongée, d\'une lecture de tables ou de tout autre matériel de sécurité. ' +
        'Ne pas l\'utiliser pour plonger.'
}

const dictionaryEN = {
    'Ndsr' : 'No dive stop required',
    'Fd' : 'First dive',
    'Sd' : 'Second dive',
    'Tsdipbttfsr' : 'This successive dive is prohibited by the tables for security reasons.',
    'Dadvmbp' : 'Depth and duration values must be positives.',
    'Rif' : 'Reference interval for',
    'Rrncf' : 'Reference residual nitrogen coefficient for',
    'Rdf' : 'Reference depth for',
    'Sdi' : 'Second dive increase',
    'Rduf' : 'Reference duration for',
    'Tintftd' : 'There is no table for this depth.',
    'Tdtdneitt' : 'This dive time (:1:min) does not exist in the :2:m table.',
    'GPSfxmitxmt' : 'GPS for :1: minutes in the :2: meters table',
    'minutes' : 'minutes',
    'meters' : 'meters',
    'min' : 'min',
    'm' : 'm',
    'Depth' : 'Depth',
    'Duration' : 'Duration',
    'Si' : 'Surface interval',
    'Calculate' : 'Calculate',
    'alert' : 'This calculator is based on the MN90-FFESSM dives tables. Although great care has been taken to ensure the accuracy ' +
        'of the calcul there may be errors in the results. This calculator is not a substitute for the use of a dive computer ' +
        'to the use of a dive computer, table reading or any other safety equipment. ' +
        'Do not use for diving.'
}

function replaceInText(element, pattern, replacement) {
    for (let node of element.childNodes) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                if (node.value) {
                    node.value = node.value.replace(pattern, replacement)
                }
                replaceInText(node, pattern, replacement);
                break;
            case Node.TEXT_NODE:
                node.textContent = node.textContent.replace(pattern, replacement);
                break;
            case Node.DOCUMENT_NODE:
                replaceInText(node, pattern, replacement);
        }
    }
}

const container = document.querySelector('.container')
let dictionary
let oldDictionary
function updateTrad(lang) {
    if (!lang) {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'FR')
        }
        lang = localStorage.getItem('lang')
    }
    const locale = document.querySelector('.lang')
    switch (lang) {
        case 'FR' :
            dictionary = dictionaryFR
            oldDictionary = dictionaryEN
            locale.textContent = "EN"
            break
        case 'EN' :
            dictionary = dictionaryEN
            oldDictionary = dictionaryFR
            locale.textContent = "FR"
            break
        default :
            alert('This traduction does not exist')
    }

    for (const key in oldDictionary) {
        replaceInText(container, new RegExp(oldDictionary[key], 'g'), dictionary[key])
    }

    document.querySelector('.alert .content').innerHTML = dictionary.alert
}
updateTrad()
