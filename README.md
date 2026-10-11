# Sophia — STEM & Robotics Personal Portfolio

A clean, modern, responsive personal STEM portfolio website for **Sophia**, an 11th-grade student at Richard Montgomery High School in Rockville, Maryland.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## Website Structure (5 Navigation Tabs)

1. **Home**: Clean hero section with Sophia's portrait and intro, followed by three featured sections for **Orca Robotics**, **Scientific Research**, and **CAD Designs**.
2. **Orca Robotics**: Inspired by authentic team portfolios with a two-column layout: team story on the left (*"More Than Just Robots"*), and a responsive 4-photograph collage on the right (team competition, robot, match action, and team activity) with click-to-enlarge lightbox.
3. **Scientific Research**: Three real research projects displayed one per row:
   - **Alzheimer's Disease**: *"Identifying Potential Drug Candidates for Alzheimer's Disease Using Transcriptomic Analysis"* (Sophia Wang, National High School Journal of Science, 2026).
   - **Breast Cancer**: *"Integrated Expression, Mutation, and Survival Analysis of 17 Key Genes in Breast Cancer Using TCGA-BRCA Data"* (Sophia Wang, Christopher Wang, Haiyan Lei, Journal of Emerging Investigators, August 6, 2026).
   - **Comet Research**: *"Modeling the Far Side of Comet 19P/Borrelly Using Blender: An Exploration of Potential Surface Geometries"* (Sophia Wang, Daisy Hu, Christopher Wang, Xiao-Duan Zou, Mentor: Dr. Xiao-Duan Zou, Planetary Science Institute).
4. **CAD Designs (CAD Design Gallery)**:
   - Smooth, continuous, automatic horizontal carousel of 12 mechanical designs moving right-to-left.
   - Pauses on mouse hover, supports touch dragging on mobile devices.
   - Clean responsive grid showing all 12 designs with concise titles.
   - Working lightbox to inspect any CAD image in high resolution.
5. **About Me**: Friendly high school student voice covering academic background, robotics leadership, published research, 100+ hours of SAT Gold tutoring, and key recognitions:
   - First Place, UMBC Invitational CAD competition
   - NASA Earth System Science Project Award
   - National Capital Astronomers club invited speaker

---

## Replacing Images & Files

- **Profile Photo**: Replace `/public/images/sophia_profile.jpg`.
- **Robotics Photos**: Drop your 4 team photos into `/public/images/robotics/`:
  - `team_competition.jpg`
  - `ftc_robot.jpg`
  - `competition_action.jpg`
  - `team_activity.jpg`
- **12 CAD Images**: Replace the 12 files in `/public/images/cad/` (or update image paths in `src/data/cadDesigns.ts`).
- **Research PDFs & Posters**: Drop files into `/public/papers/`:
  - `sophia_alzheimers_transcriptomics_paper.pdf`
  - `sophia_breast_cancer_tcga_paper.pdf`
  - `sophia_comet_19p_borrelly_poster.pdf`
  - `sophia_stem_resume.pdf`

---

## Local Development & Build

```bash
# Run local dev server
npm run dev

# Build for production
npm run build
```
