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

const dictionary = {
    'Ndsr' : 'Aucun palier requis',
    'Fd' : 'Première plongée',
    'Sd' : 'Seconde plongée',
    'Tsdipbttfsr' : 'Cette plongée successive est interdite par les tables pour des raisons de sécurité.',
    'Dadvmbp' : 'Les valeurs de profondeur et de durée doivent être positives',
    'Rif' : 'Interval de référence pour',
    'Rrncf' : 'Coefficient d\'azote résiduel de référence pour',
    'Rdf' : 'Profondeur de référence pour',
    'Sdi' : 'Majoration de la seconde plongée',
    'Rduf' : 'Durée de référence pour',
    'Tintftd' : 'Il n\'y a pas de table pour cette profondeur',
    'Tdtdneitt' : 'La durée de plongée (:1:min) n\'existe pas dans la table des :2:m',
    'GPSfxmitxmt' : 'GPS pour :1: minutes dans la table des :2: mètres',
    'minutes' : 'minutes',
    'meters' : 'mètres',
    'min' : 'min',
    'm' : 'm',
    'Depth' : 'Profondeur',
    'Duration' : 'Durée',
    'Si' : 'Interval de surface',
    'Calculate' : 'Calculer',
}

const container = document.querySelector('.container')
replaceInText(container, /First dive/g, dictionary.Fd)
replaceInText(container, /Second dive/g, dictionary.Sd)
replaceInText(container, /Depth/g, dictionary.Depth)
replaceInText(container, /Duration/g, dictionary.Duration)
replaceInText(container, /Surface interval/g, dictionary.Si)
replaceInText(container, /Calculate/g, dictionary.Calculate)
