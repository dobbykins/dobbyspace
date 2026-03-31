import styles from './About.module.css'

// ↓ Edit your skills list here
const skills = ['Java', 'JavaScript', 'React', 'HTML', 'CSS', 'Git', 'Arduino', 'Raspberry Pi', 'C', 'C++']

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className = "container">   {/* ← add this wrapper */}
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.bio}>
          {/* ↓ Replace this with your actual bio */}
          <p>
            I'm a Computer Engineering student with a passion for electronics and software development. I enjoy building projects that combine both hardware and software, and I'm always eager to learn new technologies and improve my skills.
          </p>
          <p>
            During my downtime, you can usually find me watching soccer and Formula 1 or working on robotic projects.
          </p>
        </div>
        <div className={styles.skills}>
          <h3>Technologies</h3>
          <ul className={styles.skillList}>
            {skills.map(skill => (
              <li key={skill} className={styles.skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  )
}
