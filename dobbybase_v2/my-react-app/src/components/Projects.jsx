import styles from './Projects.module.css'

const projects = [
  {
    title: 'Project One',
    description: 'Your full description here — as long as you want.',
    image: null,           // e.g. '/screenshot.png' — drop file in /public
    tags: ['React', 'CSS'],
    github: '#',           // set to null to hide
    demo: '#',             // set to null to hide
  },
  // ... more projects
]

function ProjectCard({ title, description, image, tags, github, demo }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {image
          ? <img src={image} alt={title} className={styles.image} />
          : <div className={styles.imagePlaceholder}>
              <span>Set the image field in Projects.jsx</span>
            </div>
        }
      </div>
      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
        <div className={styles.cardFooter}>
          <ul className={styles.tags}>
            {tags.map(tag => <li key={tag} className={styles.tag}>{tag}</li>)}
          </ul>
          <div className={styles.links}>
            {github && <a href={github} className={styles.linkBtn} target="_blank" rel="noreferrer">GitHub</a>}
            {demo   && <a href={demo}   className={styles.linkBtnPrimary} target="_blank" rel="noreferrer">Live demo</a>}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.list}>
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}