import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Avalie seus filmes<br />
          e séries <span>favoritos</span>
        </h1>

        <p>
          Compartilhe sua opinião e descubra novas<br />
          recomendações incríveis.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>
            Avaliar agora
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div className={styles.visualContainer}>
        {/* Imagem de cinema/claquete que puxa o estilo idêntico da sua referência */}
        <img 
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop" 
          alt="Claquete de Cinema" 
          className={styles.claqueteImg}
        />
      </div>
    </section>
  );
}