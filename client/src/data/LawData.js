// Importing PDFs
import doc_1 from '../data/law-documents/Model RoN Local Ordinance Template_Draft_RN.pdf';
import doc_2 from '../data/law-documents/Template Resolution on the Rights of Future Generations.pdf';

const LawData = [
  {
    id: 1,
    letter: false,
    law: 'ordinance',
    jurisdiction: 'local',
    title: 'Ecosystem Rights',
    summary: 'A resolution or ordinance on the rights of a particular ecosystem-e.g., a forest-with a possible guardianship body to speak for it.',
    docID: '13YIr9SZ2Vgkh3R56AGP4L3cUIXZEmVqygHJ3IOj_BeQ',
    category: 'Rights of Nature',
    pdf: doc_1
  },
  {
    id: 2,
    letter: false,
    law: 'ordinance',
    jurisdiction: 'regional',
    title: 'Local Ocean Rights',
    summary: 'A resolution or ordinance on the rights of marine ecosystems, including the right to \'health\'.',
    docID: '1n5TsEssCrD8lMeAMA1I7WVEqNFiecyhHzumLH4nwpxQ',
    category: 'Rights of Future Generations',
    pdf: doc_2
  },
  {
    id: 3,
    letter: false,
    law: 'ordinance',
    jurisdiction: 'national',
    title: 'Local Rights of Rivers',
    summary: 'A resolution or ordinance on the rights of rivers and watersheds with a guardianship body to speak for the river.',
    docID: '',
    category: 'Human Environmental Rights',
    pdf: null
  },
  {
    id: 4,
    letter: false,
    law: 'ordinance',
    jurisdiction: 'international',
    title: 'State Constitutional Amendment',
    summary: 'A Rights of Nature state constitutional amendment that can unlock the ability of local rights of nature efforts.',
    docID: '',
    category: 'Ecocide',
    pdf: null
  },
  {
    id: 5,
    letter: false,
    law: 'ordinance',
    jurisdiction: 'local',
    title: 'National Constitutional Amendment',
    summary: 'A constitutional amendment establishing the Rights of Nature and other ecocentric legal principles.',
    docID: '',
    category: 'Legal Guardianship',
    pdf: null
  },
  {
    id: 6,
    letter: false,
    law: 'resolution',
    jurisdiction: 'local',
    title: 'Preamble on the Rights of Nature',
    summary: 'A generic preamble on the Rights of Nature to include in any legal instrument, with fully updated information.',
    docID: '',
    category: 'Ecocentric Land Models',
    pdf: null
  }
]

export default LawData