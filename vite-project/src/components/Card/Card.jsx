import styles from './Card.module.css'

function Card({ name, description }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
