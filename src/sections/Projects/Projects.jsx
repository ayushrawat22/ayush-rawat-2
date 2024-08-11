import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import Fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={Viberr} 
          link={'https://github.com/ayushrawat22/pneumonia-detection-in-matlab'} 
          h3="Pneumonia Detection"
          p="Pneumonia Detection in MATLAB"
        />
        <ProjectCard 
          src={freshBurger} 
          link={'https://github.com/ayushrawat22/Network-Routing-Simulation-using-Dijkstra-s-and-A-Algorithms'} 
          h3="Network Routing Simulator"
          p="Network Routing Simulator in C++"
        />
        <ProjectCard 
          src={hipsster} 
          link={'https://github.com/ayushrawat22/Traffic-Simulator-Python-project'} 
          h3="Traffic Simulator"
          p="Traffic Simulator in Python"
        />
        <ProjectCard 
          src={Fitlift} 
          link={'https://github.com/ayushrawat22/A-Algorithm-Pathfinding-Project'} 
          h3="Pathfinding"
          p="Pathfinding project using A* algorithm"
        />
      </div>
    </section>
  );
}

export default Projects;
