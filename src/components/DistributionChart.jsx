import styles from './DistributionChart.module.css';

export default function DistributionChart({ avaliacoes = [] }) {
  const quantidade = (nota) => avaliacoes.filter(item => item.nota === nota).length;
  const total = avaliacoes.length || 1;

  // Calcula os valores reais e as porcentagens para cada nota de 5 a 1 estrela
  const dados = [5, 4, 3, 2, 1].map(nota => {
    const qtd = quantidade(nota);
    return {
      nota,
      qtd,
      porcentagem: Math.round((qtd / total) * 100)
    };
  });

  // Configuração das cores para montar os pedaços da rosca no CSS dinâmico
  const cores = {
    5: '#741E31', // Vinho escuro principal
    4: '#A63A50', // Rosa escuro médio
    3: '#D65B7F', // Rosa médio
    2: '#F6BAD6', // Rosa claro
    1: '#FAD6E5'  // Rosa bem suave
  };

  // Monta o gradiente cônico calculando onde começa e termina cada fatia
  let acumulado = 0;
  const fatiasGradiente = dados.map(d => {
    const inicio = acumulado;
    const fim = acumulado + d.porcentagem;
    acumulado = fim;
    return `${cores[d.nota]} ${inicio}% ${fim}%`;
  }).join(', ');

  // Se não houver avaliações ainda, exibe um círculo cinza neutro de base
  const estiloDonut = total > 0 && avaliacoes.length > 0
    ? { background: `conic-gradient(${fatiasGradiente})` }
    : { background: '#f3edf0' };

  return (
    <div className={styles.container}>
      <h2>Distribuição das Notas</h2>

      <div className={styles.contentWrapper}>
        {/* Gráfico de Rosca (Donut) feito em CSS Puro */}
        <div className={styles.donutChart} style={estiloDonut}>
          <div className={styles.donutHole} />
        </div>

        {/* Legenda Lateral Alinhada */}
        <div className={styles.legendContainer}>
          {dados.map(d => (
            <div key={d.nota} className={styles.legendRow}>
              <span 
                className={styles.bullet} 
                style={{ backgroundColor: cores[d.nota] }} 
              />
              <span className={styles.label}>{d.nota} estrelas</span>
              <strong className={styles.percentage}>{d.porcentagem}%</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}