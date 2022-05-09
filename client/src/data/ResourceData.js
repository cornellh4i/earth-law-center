// Importing PDFs
import marine from '../data/resource-documents/marine-protected.pdf';
import comm_toolkit from '../data/resource-documents/comm_toolkit.pdf';
import coral_toolkit from '../data/resource-documents/coral_toolkit.pdf';
import biodiversity from '../data/resource-documents/post2020-biodiversity.pdf';

// Importing PDF images
import marine_img from '../properties/marine.jpg';
import coral_img from '../properties/coral_toolkit.jpg';
import biodiversity_img from '../properties/post2020_biodiversity.jpg';
import comm_toolkit_img from '../properties/comm_toolkit.jpg';

const ResourceData = [
  {
    id: 1,
    resource_type: 'Doc',
    title: 'Marine Protected Areas',
    description: 'A toolkit on holistic and rights-based approach to ocean governance.',
    doc_img: marine_img,
    doc_pdf: marine
  },
  {
    id: 2,
    resource_type: 'Website',
    title: 'UN Harmony Initiative',
    description: 'The United Nations portal for Earth-based laws.',
    url: 'http://www.harmonywithnatureun.org/',
  },
  {
    id: 3,
    resource_type: 'Video',
    title: 'Earth Law in Canada',
    description: 'Earth-centered legal movements and Indigenous sovereignty in Canada.',
    youtube: 'l6CTFeO6yog',
    url: 'https://www.youtube.com/watch?',
  },
  {
    id: 4,
    resource_type: 'Doc',
    title: 'Coral Reef Toolkit',
    description: ' A toolkit on how to establish legal rights for coral reefs.',
    doc_pdf: coral_toolkit,
    doc_img: coral_img
  },
  {
    id: 5,
    resource_type: 'Video',
    title: 'Ecocide',
    description: 'End Ecocide on Earth talks about criminalizing “ecocide” in 2 minutes.',
    youtube: 'Ww_bVq9Sh_4',
    url: 'https://www.youtube.com/watch?',
  },
  {
    id: 6,
    resource_type: 'Website',
    title: 'Earth Jurisprudence',
    description: 'An organization dedicated to Earth-centered legal education.',
    url: 'http://www.earthjurist.org/',
  },
  {
    id: 7,
    resource_type: 'Video',
    title: 'Indigenous Guardianship',
    description: 'Learn about the Maoris guardianship of the Whanganui River.',
    youtube: 'YQZxRSzxhLI',
    url: 'https://www.youtube.com/watch?',
  },
  {
    id: 8,
    resource_type: 'Website',
    title: 'Global Alliance',
    description: 'A hub of Rights of Nature organizations from across the world.',
    url: 'https://www.garn.org/',
  },
  {
    id: 9,
    resource_type: 'Website',
    title: 'Nonhuman Rights',
    description: 'The leading group advancing rights for nonhuman animals.',
    url: 'https://www.nonhumanrights.org/',
  },
  {
    id: 10,
    resource_type: 'Video',
    title: 'Animal Personhood',
    description: 'Animals should have rights just like humans.',
    youtube: 'ZiS8j8hulq8',
    url: 'https://www.youtube.com/watch?',
  },
  {
    id: 11,
    resource_type: 'Website',
    title: 'Earth Law Journal',
    description: 'A law journal exploring ecocentric law developments.',
    url: 'https://lawpublications.barry.edu/ejejj/about.html',
  },
  {
    id: 12,
    resource_type: 'Website',
    title: 'Earth Law Center',
    description: 'A nonprofit advancing a new generation of Earth-centered laws worldwide.',
    url: 'https://www.earthlawcenter.org/',
  },
  {
    id: 13,
    resource_type: 'Video',
    title: 'Why Earth Laws?',
    description: 'Why should you consider advancing Earth-based laws?',
    youtube: 'lubNvaTigAU',
    url: 'https://www.youtube.com/watch?',
  },
  {
    id: 14,
    resource_type: 'Website',
    title: 'Rights of Nature Wiki',
    description: 'An extensive summary of global Rights of Nature advancements.',
    url: 'https://en.wikipedia.org/wiki/Rights_of_nature',
  },
  {
    id: 15,
    resource_type: 'Doc',
    title: 'Community Toolkit',
    description: 'A toolkit on US-based local Rights of Nature movements',
    doc_pdf: comm_toolkit,
    doc_img: comm_toolkit_img
  },
  {
    id: 16,
    resource_type: 'Website',
    title: 'Rights of Nature Wiki',
    description: 'An extensive summary of global Rights of Nature advancements.',
    url: 'https://en.wikipedia.org/wiki/Rights_of_nature',
  },
  {
    id: 17,
    resource_type: 'Video',
    title: 'Rights of Rivers',
    description:'A video on the Universal Declaration of the Rights of Rivers.',
    youtube: 'I2p7EfOKaFA',
    url: 'https://www.youtube.com/watch?',
  },
  {
    id: 18,
    resource_type: 'Doc',
    title: 'Post-2020 Biodiversity',
    description: ' A toolkit on how to establish legal rights for coral reefs.',
    doc_pdf: biodiversity,
    doc_img: biodiversity_img
  },
  {
    id: 19,
    resource_type: 'Website',
    title: 'End Ecocide',
    description: 'The leading group advocating for ecocide to be a crime.',
    url: 'https://www.endecocide.org/en/',
  }

]

export default ResourceData