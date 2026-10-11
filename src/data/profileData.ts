export interface ProfileData {
  name: string;
  grade: string;
  school: string;
  location: string;
  headline: string;
  subheadline: string;
  introduction: string;
  bioParagraphs: string[];
  photo: string;
  honorsAndHighlights: string[];
  contact: {
    email: string;
    schoolDistrict: string;
    location: string;
  };
}

export const profileData: ProfileData = {
  name: 'Sophia',
  grade: '11th Grade',
  school: 'Richard Montgomery High School',
  location: 'Rockville, Maryland',
  headline: "Hi, I'm Sophia.",
  subheadline: 'Student Researcher | Robotics Team Captain | CAD Designer',
  introduction:
    "I'm a junior in the International Baccalaureate (IB) Magnet Program at Richard Montgomery High School who enjoys robotics, computational biology, and engineering design. I love exploring new ideas, solving technical problems, and sharing what I learn with others.",
  photo: '/images/sophia_decode.jpg',
  bioParagraphs: [
    "I am an 11th-grade student in the International Baccalaureate (IB) Magnet Program at Richard Montgomery High School in Rockville, Maryland. My primary academic and extracurricular interests center on mechanical engineering, competitive robotics, computational biology research, and CAD design.",
    "As the founder and captain of Orca Robotics (FTC Team #21587), I work alongside my teammates to design, model, assemble, and program competition robots. I also lead our outreach initiatives, introducing younger students in our community to hands-on engineering and robotics concepts.",
    "In research, I have co-authored two published computational biology studies investigating transcriptomic pathways in Alzheimer's disease and genomic alterations in breast cancer. Additionally, under the mentorship of Dr. Xiao-Duan Zou at the Planetary Science Institute, I explored hypothetical far-side surface geometries of Comet 19P/Borrelly using 3D modeling in Blender.",
    "Beyond the workshop and laboratory, I have contributed more than 100 hours as an SAT Gold tutor, assisting high school peers with foundational math reasoning, geometry, and problem-solving strategies.",
  ],
  honorsAndHighlights: [
    'Founder & Captain, Orca Robotics FTC Team #21587',
    'Published Research Author in Computational Biology (National High School Journal of Science & Journal of Emerging Investigators)',
    'Planetary Astronomy Research Experience with Dr. Xiao-Duan Zou (Planetary Science Institute)',
    'First Place, UMBC Invitational CAD competition',
    'NASA Earth System Science Project Award',
    'National Capital Astronomers club invited speaker',
    'SAT Gold Tutor with more than 100 hours of tutoring',
  ],
  contact: {
    email: 'sophia.stem.portfolio@gmail.com',
    schoolDistrict: 'Montgomery County Public Schools (MCPS)',
    location: 'Rockville, Maryland',
  },
};
