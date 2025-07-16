import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Home() {
  const [valorM2, setValorM2] = useState(null);
  const [respostas, setRespostas] = useState({
    area: '',
    bloco: '',
    acabamento: '',
    pintura: '',
    esquadrias: '',
    banheiros: '',
    piso: '',
    forro: '',
    hidraulica: '',
    eletrica: '',
    cobertura: '',
    areaCobertura: '',
    fundacao: '',
    desperdicio: '',
    margemLucro: '',
  });

  // Carregar o valor do m² do Supabase
  useEffect(() => {
    async function buscarValorM2() {
      const { data, error } = await supabase
        .from('valor_m2')
        .select('valor')
        .order('created_at', { ascending: false }) // ordenar pela data mais recente
        .limit(1);

      if (error) {
        console.error('Erro ao buscar valor do m²:', error);
      } else if (data.length > 0) {
        setValorM2(data[0].valor);
      }
    }

    buscarValorM2();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Simulador de Orçamento</h1>

      {/* Exibir valor do m² */}
      {valorM2 !== null ? (
        <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>
          Valor atual do metro quadrado: R$ {valorM2.toFixed(2).replace('.', ',')}
        </p>
      ) : (
        <p>Carregando valor do metro quadrado...</p>
      )}

      {/* Formulário com as 15 perguntas */}
      <form>
        <label>Área total da construção (m²):</label>
        <input type="number" value={respostas.area} onChange={e => setRespostas({ ...respostas, area: e.target.value })} />

        <label>Tipo de bloco:</label>
        <input type="text" value={respostas.bloco} onChange={e => setRespostas({ ...respostas, bloco: e.target.value })} />

        <label>Padrão de acabamento:</label>
        <input type="text" value={respostas.acabamento} onChange={e => setRespostas({ ...respostas, acabamento: e.target.value })} />

        <label>Pintura (chapisco, reboco etc.):</label>
        <input type="text" value={respostas.pintura} onChange={e => setRespostas({ ...respostas, pintura: e.target.value })} />

        <label>Área de esquadrias (portas e janelas, m²):</label>
        <input type="text" value={respostas.esquadrias} onChange={e => setRespostas({ ...respostas, esquadrias: e.target.value })} />

        <label>Quantidade de banheiros:</label>
        <input type="number" value={respostas.banheiros} onChange={e => setRespostas({ ...respostas, banheiros: e.target.value })} />

        <label>Área de piso cerâmico (m²):</label>
        <input type="text" value={respostas.piso} onChange={e => setRespostas({ ...respostas, piso: e.target.value })} />

        <label>Área de forro (gesso ou PVC, m²):</label>
        <input type="text" value={respostas.forro} onChange={e => setRespostas({ ...respostas, forro: e.target.value })} />

        <label>Incluir instalação hidráulica?</label>
        <input type="text" value={respostas.hidraulica} onChange={e => setRespostas({ ...respostas, hidraulica: e.target.value })} />

        <label>Incluir instalação elétrica?</label>
        <input type="text" value={respostas.eletrica} onChange={e => setRespostas({ ...respostas, eletrica: e.target.value })} />

        <label>Tipo de cobertura:</label>
        <input type="text" value={respostas.cobertura} onChange={e => setRespostas({ ...respostas, cobertura: e.target.value })} />

        <label>Área da cobertura (m²):</label>
        <input type="text" value={respostas.areaCobertura} onChange={e => setRespostas({ ...respostas, areaCobertura: e.target.value })} />

        <label>Incluir fundação padrão (hélice contínua)?</label>
        <input type="text" value={respostas.fundacao} onChange={e => setRespostas({ ...respostas, fundacao: e.target.value })} />

        <label>Percentual de desperdício previsto (%):</label>
        <input type="text" value={respostas.desperdicio} onChange={e => setRespostas({ ...respostas, desperdicio: e.target.value })} />

        <label>Margem de lucro e custos indiretos (%):</label>
        <input type="text" value={respostas.margemLucro} onChange={e => setRespostas({ ...respostas, margemLucro: e.target.value })} />
      </form>
    </div>
  );
}
