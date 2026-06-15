import styles from './Stats.module.css';
import { Star, BarChart2, Clapperboard, Calendar } from 'lucide-react';

export default function Stats() {
  return (
    <div className={styles.statsContainer}>
      {/* CARD 1 */}
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <Star size={14} />
        </div>
        <div className={styles.statInfo}>
          <label>Avaliações</label>
          <span>24</span>
          <small>Total de avaliações</small>
        </div>
      </div>

      {/* CARD 2 */}
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <BarChart2 size={14} />
        </div>
        <div className={styles.statInfo}>
          <label>Nota média</label>
          <span>4.6 ★</span>
          <small>Baseado em 24 avaliações</small>
        </div>
      </div>

      {/* CARD 3 */}
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <Clapperboard size={14} />
        </div>
        <div className={styles.statInfo}>
          <label>Filmes e séries</label>
          <span>18</span>
          <small>Avaliados</small>
        </div>
      </div>

      {/* CARD 4 */}
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <Calendar size={14} />
        </div>
        <div className={styles.statInfo}>
          <label>Membro desde</label>
          <span> 2024</span>
          <small>CineRanker</small>
        </div>
      </div>
    </div>
  );
}