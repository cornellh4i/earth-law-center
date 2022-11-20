// Importing PDFs
import doc_1 from '../data/letter-documents/USA Template Letter to Politicians Rights of Nature Ordinance.pdf';
import doc_2 from '../data/letter-documents/International Template Letter to Politicians Rights of Nature Ordinance.pdf';

// pics
import test_pic from '../properties/testpic.png';

const LetterData = [
  {
    id: 1,
    letter: true,
    preview: test_pic,
    law: 'ordinance',
    jurisdiction: 'national',
    title: 'Ecosystem Rights',
    summary: 'A letter encouraging lawmakers to recognize that ecosystems have inherent rights, just as humans do. Tailored for the U.S.',
    docID: '1BxRsomidl0jQduYC7W7w6HRHQgAx_tlZwe-9Jil19ko',
    pdf: doc_1
  },
  {
    id: 2,
    letter: true,
    preview: test_pic,
    law: 'ordinance',
    jurisdiction: 'national',
    title: 'Ecosystem Rights',
    summary: 'A letter encouraging lawmakers to recognize that ecosystems have inherent rights, just as humans do. Tailored for the U.S.',
    docID: '1LSWL53E5wFLKenGxG7qpDGy4M6c4Zze1ahji-3RZNRI',
    pdf: doc_2
  },
  {
    id: 3,
    letter: true,
    preview: test_pic,
    law: 'ordinance',
    jurisdiction: 'regional',
    title: 'Ecocide',
    summary: 'A letter encouraging lawmakers to criminalize the severe and widespread or long-term damage to the environment.',
    docID: '',
    pdf: null
  },
  {
    id: 3,
    letter: true,
    preview: test_pic,
    law: 'ordinance',
    jurisdiction: 'national',
    title: 'Rights of Future Generations',
    summary: 'A letter encouraging lawmakers to recognize that future generations have a right to inherit a thriving planet.',
    docID: '',
    pdf: null
  },
  {
    id: 5,
    letter: true,
    preview: test_pic,
    law: 'ordinance',
    jurisdiction: 'international',
    title: 'Legal Guardianship Bodies',
    summary: 'A letter encouraging lawmakers to establish legal guardianship bodies to legally represent “voiceless” entities.',
    docID: '',
    pdf: null
  },
  {
    id: 6,
    letter: true,
    preview: test_pic,
    law: 'ordinance',
    jurisdiction: 'local',
    title: 'Biocultural Rights',
    summary: 'A letter encouraging lawmakers to support the customary right of traditional stewards within a landscape.',
    docID: '',
    pdf: null
  },
  {
    id: 7,
    letter: true,
    preview: test_pic,
    law: 'resolution',
    jurisdiction: 'local',
    title: 'Ecocentric Corporate Governance',
    summary: 'A letter encouraging lawmakers to give a voice to Nature or other voiceless entities in your company.',
    docID: '',
    pdf: null
  }
]

export default LetterData