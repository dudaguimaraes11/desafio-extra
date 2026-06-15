import styles from './Header.module.css';
import {
  Search,
  Bell,
  Moon,
  Plus
} from 'lucide-react';

export default function Header({ busca, setBusca }) {
  return (
    <header className={styles.header}>
      
      {/* BARRA DE BUSCA DINÂMICA */}
      <div className={styles.searchBox}>
        <Search size={16} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Buscar filme ou série..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* BLOCO DE AÇÕES TRAVADO NA TELA */}
      <div className={styles.actions}>
        
        <button className={styles.newButton}>
          <Plus size={14} strokeWidth={3} />
          Nova Avaliação
        </button>

        <button className={styles.iconButton}>
          <Moon size={16} />
        </button>

        <button className={styles.iconButton}>
          <Bell size={16} />
          <span className={styles.badge}>3</span>
        </button>

      </div>

    </header>
  );
}