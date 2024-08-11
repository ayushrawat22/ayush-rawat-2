import React from 'react';
import styles from './SkillsStyle.module.css';
import checkMarkicon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList'; // Ensure correct import path

function Skills() {
  return (
    <section id="skills" className={styles.container}> 
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkicon} skill='HTML' />
        <SkillList src={checkMarkicon} skill='CSS' />
        <SkillList src={checkMarkicon} skill='JavaScript' />
        <SkillList src={checkMarkicon} skill='Node' />
        
        
      </div>
      <hr/ >

      <div className={styles.skillList}>
        <SkillList src={checkMarkicon} skill='C++' />
        <SkillList src={checkMarkicon} skill='C' />
        <SkillList src={checkMarkicon} skill='Python' />
        <SkillList src={checkMarkicon} skill='MATLAB' />
      </div>
      
      
      <hr/ >
      <div className={styles.skillList}>
        <SkillList src={checkMarkicon} skill='Adobe Premiere Pro' />
        <SkillList src={checkMarkicon} skill='Adobe Photoshop CC' />
      </div>
    </section>
  );
}

export default Skills;
