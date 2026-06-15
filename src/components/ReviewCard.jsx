import { useState } from 'react';
import styles from './ReviewCard.module.css';
import { Trash2, Heart } from 'lucide-react';

export default function ReviewCard({
    titulo,
    comentario,
    nota,
    data,
    poster,
    onDelete,
    onFavorite,
    isFavorite,
}) {
    // 🌟 ESTADO INTERNO: Garante que o clique mude a cor na hora, independente do pai!
    const [favoritado, setFavoritado] = useState(isFavorite || false);

    const handleHeartClick = () => {
        setFavoritado(!favoritado); // Muda a cor na tela imediatamente
        if (onFavorite) {
            onFavorite(); // Avisa o banco de dados / componente pai se a função existir
        }
    };

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
                    <button onClick={handleHeartClick} className={styles.heartBtn}>
                        <Heart
                            size={16}
                            /* Usa o estado local para pintar ou esvaziar o coração na hora */
                            fill={favoritado ? '#ea708c' : 'transparent'}
                            color={favoritado ? '#ea708c' : '#513943'}
                        />
                    </button>

                    {/* Botão de Deletar */}
                    <button onClick={onDelete} className={styles.deleteBtn}>
                        <Trash2 size={15} />
                    </button>
                </div>
            </div>
        </article>
    );
}
