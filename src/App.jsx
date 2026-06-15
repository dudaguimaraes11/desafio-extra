import { useEffect, useState, useCallback } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ReviewForm from './components/ReviewForm';
import ReviewCard from './components/ReviewCard';
import DistributionChart from './components/DistributionChart';


import { supabase } from './lib/supabase';

function App() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [busca, setBusca] = useState('');

  // 1. Busca as avaliações de forma limpa. Removido o limit fixo para você colocar mais filmes
  const buscarAvaliacoes = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('avaliacoes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Erro Supabase:", error.message);
        return;
      }

      setAvaliacoes(data || []);
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  }, []);

  // 2. Controla o ciclo de render de forma segura eliminando o aviso roxo de cascading renders
  useEffect(() => {
    buscarAvaliacoes();
  }, [buscarAvaliacoes]);

  // 3. Adiciona novas avaliações sorteando capas fofas
 
  async function adicionarAvaliacao(dadosDoFormulario) {
    const linksDePosters = [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400',
      'https://images.unsplash.com/photo-1543589077-47d81606733f?q=80&w=400'
    ];
    const posterSorteado = linksDePosters[Math.floor(Math.random() * linksDePosters.length)];

    const novaAvaliacao = {
      titulo: dadosDoFormulario.titulo,
      nota: Number(dadosDoFormulario.nota),
      comentario: dadosDoFormulario.comentario,
      // 🌟 SE você colou uma URL no formulário, usa ela! Senão, usa a sorteada de reserva.
      poster_url: dadosDoFormulario.poster_url || posterSorteado 
    };

    const { error } = await supabase
      .from('avaliacoes')
      .insert([novaAvaliacao]);

    if (error) {
      console.error(error);
      return;
    }

    buscarAvaliacoes();
  }

  // 4. Exclui a avaliação do banco
  async function excluirAvaliacao(id) {
    const { error } = await supabase
      .from('avaliacoes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(error);
      return;
    }

    buscarAvaliacoes();
  }

  const avaliacoesFiltradas = avaliacoes.filter(item =>
    item.titulo?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar />

      <main className="mainContent">
        <Header busca={busca} setBusca={setBusca} />

        <div className="dashboardGrid">
          <section className="centerContent">
            <Hero />
            
            <Stats avaliacoes={avaliacoes} />

            <section className="reviewsSection">
              <div className="sectionHeader">
                <h2>Avaliações Recentes</h2>
              </div>

              <div className="reviewsGrid">
                {avaliacoesFiltradas.map(avaliacao => {
                  let dataFormatada = "Recentemente";
                  if (avaliacao.created_at) {
                    const objData = new Date(avaliacao.created_at);
                    if (!isNaN(objData)) {
                      dataFormatada = objData.toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      });
                    }
                  }

                  return (
                    <ReviewCard
                      key={avaliacao.id}
                      titulo={avaliacao.titulo}
                      comentario={avaliacao.comentario}
                      nota={avaliacao.nota}
                      poster={avaliacao.poster_url} 
                      data={dataFormatada}
                      onDelete={() => excluirAvaliacao(avaliacao.id)}
                    />
                  );
                })}
              </div>
            </section>
          </section>

          <aside className="rightPanel">
            <ReviewForm onSubmit={adicionarAvaliacao} />
            <DistributionChart avaliacoes={avaliacoes} />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;