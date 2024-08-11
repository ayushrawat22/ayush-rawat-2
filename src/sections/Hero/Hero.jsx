import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg'; // Corrected import
import moon from '../../assets/moon.svg'; // Corrected import
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() 
{ 
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon; // Updated variable names
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark; 
  const githubIcon = theme === 'light' ? githubLight : githubDark; 
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark; 
  
  
  
  
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
         className={styles.hero}
         src={heroImg} 
         alt="Profile picture of Ayush Rawat" 
         />
         <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
         />
      </div>

      <div className={styles.info}>
        <h1>Ayush
           <br/>
           Rawat
        </h1>

        <h2>Software developer</h2>
        <span>
          <a href='https://twitter.com/ayush_rawat_23' target='_blank' rel='noopener noreferrer'>
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a href='https://github.com/ayushrawat22' target='_blank' rel='noopener noreferrer'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a href='https://www.linkedin.com/in/ayush-rawat-519b12255/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedinIcon} alt='LinkedIn icon' />
          </a>
        </span>
        <p className={styles.description}>With a passion for developing modern softwares </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>

      </div>
  
    </section>
  );
}

export default Hero;
