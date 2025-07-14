import { useState } from 'react';

export default function Home() {
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
    margem: ''
  });

  const [resultado, setResultado] = useState(null);
  const custoM2 = 3200;

  const handleChange = (e) => {
    setRespostas({ ...respostas, [e.target.name]: e.target.value });
  };

  const calcular = () => {
    const area = parseFloat(respostas.area);
    if (!area || area <= 0) {
      setResultado('Informe uma metragem válida.');
      return;
    }

    const total = area * custoM2;
    setResultado(`Valor estimado: R$ ${total.toLocaleString('pt-BR')}`);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Construcustos</h1>
      <p>Simulador de orçamento de obra</p>

      <form>
        <label>1. Área total da construção (m²):</label><br />
        <input type="number" name="area" value={respostas.area} onChange={handleChange} /><br /><br />

        <label>2. Tipo de bloco:</label><br />
        <input type="text" name="bloco" value={respostas.bloco} onChange={handleChange} /><br /><br />

        <label>3. Padrão de acabamento:</label><br />
        <select name="acabamento" value={respostas.acabamento} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="economico">Econômico</option>
          <option value="medio">Médio</option>
          <option value="alto">Alto</option>
        </select><br /><br />

        <label>4. Acabamento de paredes:</label><br />
        <select name="pintura" value={respostas.pintura} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="completo">Chapisco, Emboço e Reboco</option>
          <option value="pintura">Apenas Pintura</option>
        </select><br /><br />

        <label>5. Área aproximada de esquadrias (portas e janelas) (m²):</label><br />
        <input type="number" name="esquadrias" value={respostas.esquadrias} onChange={handleChange} /><br /><br />

        <label>6. Quantidade de banheiros:</label><br />
        <input type="number" name="banheiros" value={respostas.banheiros} onChange={handleChange} /><br /><br />

        <label>7. Área de piso cerâmico (m²):</label><br />
        <input type="number" name="piso" value={respostas.piso} onChange={handleChange} /><br /><br />

        <label>8. Área de forro de gesso ou PVC (m²):</label><br />
        <input type="number" name="forro" value={respostas.forro} onChange={handleChange} /><br /><br />

        <label>9. Instalação hidráulica completa?</label><br />
        <select name="hidraulica" value={respostas.hidraulica} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select><br /><br />

        <label>10. Instalação elétrica completa?</label><br />
        <select name="eletrica" value={respostas.eletrica} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select><br /><br />

        <label>11. Tipo de cobertura:</label><br />
        <input type="text" name="cobertura" value={respostas.cobertura} onChange={handleChange} /><br /><br />

        <label>12. Área da cobertura (m²):</label><br />
        <input type="number" name="areaCobertura" value={respostas.areaCobertura} onChange={handleChange} /><br /><br />

        <label>13. Incluir fundação padrão (hélice contínua)?</label><br />
        <select name="fundacao" value={respostas.fundacao} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select><br /><br />

        <label>14. Percentual de desperdício (%):</label><br />
        <input type="number" name="desperdicio" value={respostas.desperdicio} onChange={handleChange} /><br /><br />

        <label>15. Margem de lucro e custos indiretos (%):</label><br />
        <input type="number" name="margem" value={respostas.margem} onChange={handleChange} /><br /><br />

        <button type="button" onClick={calcular}>Calcular</button>
      </form>

      <div style={{ marginTop: 30 }}>
        {resultado && <strong>{resultado}</strong>}
      </div>
    </div>
  );
}
