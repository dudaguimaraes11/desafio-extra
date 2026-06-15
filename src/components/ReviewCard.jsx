import styles from './ReviewCard.module.css';
import { Trash2, Heart } from 'lucide-react';

export default function ReviewCard({ titulo, comentario, nota, data, poster, onDelete, onFavorite, isFavorite }) {
    return (
        <article className={styles.card}>
            <div className={styles.posterContainer}>
                <img
                    src={poster || 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba'}
                    alt={titulo}
                    className={styles.poster}
                />
            </div>

            <div className={styles.content}>
                {/* Data posicionada acima do título, conforme o modelo original */}
                <span className={styles.date}>{data}</span>
                
                <h3>{titulo}</h3>

                <div className={styles.stars}>{'⭐'.repeat(nota)}</div>

                <p>{comentario}</p>

                <div className={styles.footer}>
                    {/* Botão de Coração / Favorito */}
                    <button onClick={onFavorite} className={styles.heartBtn}>
                        <Heart size={13} fill={isFavorite ? "#d65b7f" : "transparent"} />
                    </button>

                    {/* Botão de Deletar */}
                    <button onClick={onDelete} className={styles.deleteBtn}>
                        <Trash2 size={13} />
                    </button>
                </div>
            </div>
        </article>
    );
}