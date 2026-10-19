import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const technologies = ['Python', 'SQL', 'Apache Spark', 'Hadoop', 'ETL'];

function PipelineDiagram() {
  return (
    <div className={styles.pipeline} aria-label="Data pipeline from source to analytics">
      <div className={styles.pipelineTop}>
        <span className={styles.liveDot} />
        <span>DATA FLOW / 01</span>
        <span className={styles.pipelineStatus}>SYSTEMS THINKING</span>
      </div>
      <div className={styles.pipelineNodes}>
        <div className={styles.node}>
          <span className={styles.nodeIndex}>01</span>
          <span className={styles.nodeTitle}>Sources</span>
          <span className={styles.nodeMeta}>Raw signals</span>
        </div>
        <div className={styles.connector}><span /></div>
        <div className={`${styles.node} ${styles.nodeActive}`}>
          <span className={styles.nodeIndex}>02</span>
          <span className={styles.nodeTitle}>Transform</span>
          <span className={styles.nodeMeta}>Python · SQL</span>
        </div>
        <div className={styles.connector}><span /></div>
        <div className={styles.node}>
          <span className={styles.nodeIndex}>03</span>
          <span className={styles.nodeTitle}>Analytics</span>
          <span className={styles.nodeMeta}>Trusted data</span>
        </div>
      </div>
      <div className={styles.pipelineBottom}>
        <span>QUALITY</span><span>RELIABILITY</span><span>CLARITY</span>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <Layout
      title="Data Engineering"
      description="Lucas Matos, Data Engineer focused on ETL, Python, SQL, Spark and analytics."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span className={styles.liveDot} /> DATA ENGINEER · SÃO PAULO, BR</p>
            <h1>Data systems<br />built to <span>hold up.</span></h1>
            <p className={styles.intro}>
              I build and improve data pipelines that turn raw information into
              reliable foundations for analytics and business decisions.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} to="/docs/portfolio">Explore project <span aria-hidden="true">↗</span></Link>
              <a className={styles.secondaryAction} href="mailto:lmatos.pereira@gmail.com">Get in touch</a>
            </div>
            <div className={styles.profileLine}>
              <img className={styles.avatar} src="/images/profile.jpeg" alt="Lucas Matos" />
              <div><strong>Lucas Matos</strong><span>Engineering · ETL · Analytics</span></div>
            </div>
          </div>
          <PipelineDiagram />
          <div className={styles.heroIndex}>01 <span>/ 03</span></div>
        </section>

        <section className={styles.contentSection} aria-labelledby="focus-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>CAPABILITIES</p>
            <h2 id="focus-title">From data movement<br />to usable insight.</h2>
          </div>
          <div className={styles.focusContent}>
            <p className={styles.sectionIntro}>
              Focused on dependable ETL development, process automation and
              maintainable data solutions that support analytics at scale.
            </p>
            <div className={styles.techList} aria-label="Technologies and focus areas">
              {technologies.map((technology, index) => (
                <span className={styles.techItem} key={technology}>
                  <span>0{index + 1}</span>{technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.workSection} aria-labelledby="work-title">
          <div className={styles.workHeader}>
            <div>
              <p className={styles.eyebrow}>SELECTED WORK</p>
              <h2 id="work-title">Built for the data path.</h2>
            </div>
            <span className={styles.workCount}>01 PROJECT</span>
          </div>
          <article className={styles.project}>
            <div className={styles.projectNumber}>01</div>
            <div className={styles.projectMain}>
              <p className={styles.projectType}>DATA ENGINEERING / ETL</p>
              <h3>ETL pipeline project</h3>
              <p>A data engineering project centered on ETL and data processing.</p>
              <div className={styles.projectTags}><span>Python</span><span>SQL</span><span>Data Processing</span></div>
            </div>
            <div className={styles.projectLinks}>
              <Link to="/docs/portfolio">Read case <span aria-hidden="true">↗</span></Link>
              <a href="https://github.com/lmatospereira/data-engineer-sematix-course" target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </section>

        <section className={styles.experienceSection} aria-labelledby="experience-title">
          <div>
            <p className={styles.eyebrow}>EXPERIENCE</p>
            <h2 id="experience-title">Engineering in<br />production contexts.</h2>
          </div>
          <div className={styles.experienceList}>
            <article className={styles.experienceItem}>
              <span className={styles.experienceDate}>2021 — NOW</span>
              <div><h3>Data Engineer</h3><p>Itaú</p><span>ETL development</span></div>
            </article>
            <article className={styles.experienceItem}>
              <span className={styles.experienceDate}>2018 — 2021</span>
              <div><h3>Data Engineer</h3><p>HITSS do Brasil</p><span>ETL · process improvement · automation</span></div>
            </article>
          </div>
        </section>

        <footer className={styles.pageFooter}>
          <span>Lucas Matos <span className={styles.footerAccent}>/</span> Data Engineering</span>
          <a href="mailto:lmatos.pereira@gmail.com">lmatos.pereira@gmail.com <span aria-hidden="true">↗</span></a>
        </footer>
      </main>
    </Layout>
  );
}

export default HomePage;