export interface ResearchProject {
  id: string;
  title: string;
  authors: string;
  publication?: string;
  mentor: string;
  publicationUrl?: string;
  pdfUrl?: string;
  previewImage: string;
  shortDescription: string;
  isPoster?: boolean;
}

export const researchProjectsData: ResearchProject[] = [
  {
    id: 'alzheimers-transcriptomics',
    title: "Identifying Potential Drug Candidates for Alzheimer's Disease Using Transcriptomic Analysis",
    authors: 'Sophia Wang',
    publication: 'National High School Journal of Science, 2026',
    mentor: 'Dr. Haiyan Lei · National Cancer Institute',
    publicationUrl: 'https://nhsjs.com/2026/identifying-potential-drug-candidates-for-alzheimers-disease-using-transcriptomic-analysis/',
    pdfUrl: 'https://nhsjs.com/wp-content/uploads/2026/09/Identifying-Potential-Drug-Candidates-for-Alzheimer-s-Disease-Using-Transcriptomic-Analysis.pdf',
    previewImage: '/images/research/alzheimers_paper_page1.svg',
    shortDescription:
      'Using publicly available gene expression datasets, I explored changes in biological pathways associated with Alzheimer’s disease and used computational drug-repurposing methods to identify potential candidates for further investigation.',
    isPoster: false,
  },
  {
    id: 'breast-cancer-tcga',
    title: 'Integrated Expression, Mutation, and Survival Analysis of 17 Key Genes in Breast Cancer Using TCGA-BRCA Data',
    authors: 'Sophia Wang, Christopher Wang, Haiyan Lei',
    publication: 'Journal of Emerging Investigators, August 6, 2026',
    mentor: 'Dr. Haiyan Lei · National Cancer Institute',
    publicationUrl: 'https://emerginginvestigators.org/articles/25-295',
    pdfUrl: 'https://emerginginvestigators.org/articles/25-295/pdf',
    previewImage: '/images/research/breast_cancer_paper_page1.svg',
    shortDescription:
      'We investigated gene expression, mutation patterns, and patient survival associations for 17 important breast cancer-related genes using TCGA-BRCA data.',
    isPoster: false,
  },
  {
    id: 'comet-19p-borrelly',
    title: 'Modeling the Far Side of Comet 19P/Borrelly Using Blender: An Exploration of Potential Surface Geometries',
    authors: 'Sophia Wang, Daisy Hu, Christopher Wang, Xiao-Duan Zou',
    mentor: 'Dr. Xiao-Duan Zou · Planetary Science Institute',
    previewImage: '/images/research/comet_19p_poster.svg',
    shortDescription:
      'We used Blender to develop three hypothetical models of the unobserved far side of Comet 19P/Borrelly, exploring possible surface geometries based on the available near-side shape model.',
    isPoster: true,
  },
];
