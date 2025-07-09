import { useState } from 'react';

export default function Home() {
  const [area, setArea] = useState('');
  const [resultado, setResultado] = useState(null);
  const custoM2 = 3200; // valor temporário, será configurável depois

  const calcular = () => {
    const valor = parseFloat(area);
    if (!valor || valor <= 0) {
      setResultado('Informe uma metragem válida.');
      return;
    }
    const total = valor * custoM2;
    setResultado(`Valor estimado: R$ ${total.toLocaleString('pt-BR')}`);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Construcustos</h1>
      <p>Simulador de orçamento de obra</p>
      <input
        type="number"
        placeholder="Área em m²"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        style={{ padding: 8, marginTop: 10 }}
      />
      <br /><br />
      <button onClick={calcular} style={{ padding: 10 }}>Calcular</button>
      <div style={{ marginTop: 20 }}>{resultado}</div>
    </div>
  );
}
