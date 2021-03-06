import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Welcome.module.css'
import python from '../images/python.png'
import npm from '../images/npm.png'
import react from '../images/react.png'
import vercel from '../images/vercel.png'
import mongodb from '../images/mongodb.png'

export default function Welcome() {
  const Emoji = (props) => {
    return (
      <span
        className={styles.WelcomeEmoji}
        role="img"
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
      >
        {props.symbol}
      </span>
    )
  }
  return (
    <section className={styles.Welcome}>
      <div className={styles.WelcomeCont}>
        <h1 className={styles.WelcomeHeading}>
          Build your own modern website.
        </h1>
        <div className={styles.WelcomeImgCont}>
          <Image
            alt="tech logo"
            className={styles.WelcomeImg}
            src={python}
            width="40px"
            height="40px"
          />
          <Image
            alt="tech logo"
            className={styles.WelcomeImg}
            src={mongodb}
            width="50px"
            height="50px"
          />
          <Image
            alt="tech logo"
            className={styles.WelcomeImg}
            src={npm}
            width="60px"
            height="30px"
          />
          <Image
            alt="tech logo"
            className={styles.WelcomeImg}
            src={react}
            width="40px"
            height="35px"
          />
          <Image
            alt="tech logo"
            className={styles.WelcomeImg}
            src={vercel}
            width="40px"
            height="40px"
          />
        </div>
        <h3 className={styles.WelcomeSubHeading}>
          Learn the most popular technologies
          <br />
          used right now.
        </h3>
        <Link href="/course">
          <a className={styles.WelcomeLink}>
            Coming soon... <Emoji symbol="🚀" label="rocket" />
          </a>
        </Link>
      </div>
    </section>
  )
}
