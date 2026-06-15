import { useState } from 'react';
import styles from './ReviewForm.module.css';
import { Send } from 'lucide-react';

export default function ReviewForm({ onSubmit }) {
    const [titulo, setTitulo] = useState('');
    const [nota, setNota] = useState(5);
    const [comentario, setComentario] = useState('');
    const [posterUrl, setPosterUrl] = useState(''); // Novo estado para a imagem!

    function handleSubmit(e) {
        e.preventDefault();

        if (!titulo.trim() || !comentario.trim()) {
            alert('Por favor, preencha o título e o comentário!');
            return;
        }

        // Envia todos os dados digitados para o App.jsx
        onSubmit({
            titulo,
            nota,
            comentario,
            poster_url: posterUrl.trim(), // Envia a URL digitada
        });

        // Limpa o formulário após enviar
        setTitulo('');
        setNota(5);
        setComentario('');
        setPosterUrl('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.title}>Nova Avaliação</h2>

            <div className={styles.inputGroup}>
                <label htmlFor="titulo">Nome do filme ou série</label>
                <input
                    id="titulo"
                    type="text"
                    placeholder="Ex: Interestelar"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="nota">Sua nota</label>
                <select id="nota" value={nota} onChange={(e) => setNota(Number(e.target.value))}>
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
                    <option value={4}>⭐⭐⭐⭐☆ (4/5)</option>
                    <option value={3}>⭐⭐⭐☆☆ (3/5)</option>
                    <option value={2}>⭐⭐☆☆☆ (2/5)</option>
                    <option value={1}>⭐☆☆☆☆ (1/5)</option>
                </select>
            </div>

            {/* NOVO CAMPO: URL DA IMAGEM */}
            <div className={styles.inputGroup}>
                <label htmlFor="posterUrl">URL da imagem do pôster</label>
                <input
                    id="posterUrl"
                    type="text"
                    placeholder="Cole o link da imagem aqui..."
                    value={posterUrl}
                    onChange={(e) => setPosterUrl(e.target.value)}
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="comentario">Sua opinião</label>
                <textarea
                    id="comentario"
                    rows="4"
                    placeholder="Escreva sua opinião sobre o filme ou série..."
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                />
            </div>
            <button type="submit" className={styles.submitBtn}>
                Publicar Avaliação <Send size={16} />
            </button>
        </form>
    );
}
