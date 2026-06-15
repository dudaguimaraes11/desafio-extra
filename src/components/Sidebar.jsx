import styles from './Sidebar.module.css';
import {
  Home,
  Star,
  Heart,
  BarChart3,
  Info,
  ChevronDown,
  Plus
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      {/* TOPO: Logo e Links */}
      <div>
        <div className={styles.brand}>
          <div className={styles.logoBox}>
            🎬
          </div>
          <div>
            <h2>CineRank</h2>
            <span>Avalie. Descubra. Compartilhe.</span>
          </div>
        </div>

        <nav className={styles.nav}>
          <a href="#" className={styles.active}>
            <Home size={18} />
            Início
          </a>

          <a href="#">
            <Star size={18} />
            Avaliações
          </a>

          <a href="#">
            <Heart size={18} />
            Favoritos
          </a>

          <a href="#">
            <BarChart3 size={18} />
            Estatísticas
          </a>

          <a href="#">
            <Info size={18} />
            Sobre
          </a>
        </nav>
      </div>

      {/* BASE: Card da Pipoca e Perfil Juntos */}
      <div className={styles.bottomSection}>
        <div className={styles.promo}>
          <div className={styles.promoContent}>
            <div className={styles.popcorn}>
              🍿
            </div>
            <div className={styles.promoText}>
              <h3>Apaixonado por filmes?</h3>
              <p>
                Compartilhe suas opiniões e descubra novas histórias.
              </p>
            </div>
          </div>

          <button>
            <Plus size={14} strokeWidth={3} />
            Avaliar agora
          </button>
        </div>

        <div className={styles.profile}>
          <div className={styles.profileData}>
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
              alt="User avatar" 
            />
            <div>
              <h4>CineFã</h4>
              <span>Membro desde 2024</span>
            </div>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>

    </aside>
  );
}