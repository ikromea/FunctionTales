import styles from '../styles/Home.module.css'
import mouse from "../static/images/mouse.png"
const Home = () => {
    return (
     <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Function Tales
          </h1>
  
          <p className={styles.description}>
            Code you own adventure
          </p>
          <img className={styles.mouse} src={mouse} alt="Mouse Logo"/>
  
          <p className={styles.description}>
            Chose your story
          </p>
  
          <div className={styles.grid}>
            <a href="/book"  className={styles.card}>
              <h2>The Fourth Little Pig &rarr;</h2>
            </a>
  
            <a href="/book" className={styles.card}>
              <h2>Little Red Riding Hood &rarr;</h2>
            </a>
  
            <a
              href="/book"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
            </a>
  
            <a
              href="/book"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
            </a>
          </div>
        </main>
  
        <footer className={styles.footer}>
        </footer>
      </div> 
    )
  }
  
  export default Home