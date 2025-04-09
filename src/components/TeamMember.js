import styles from '../styles/About.module.css';

function TeamMember({ name, photo }) {
    return (
      <div className={styles.member}>
        {photo && <img src={photo} alt={name} className={styles.memberPhoto} />}
        <p className={styles.memberName}>{name}</p>
      </div>
    );
  }
  
  export default TeamMember;