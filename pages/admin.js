import { useState, useEffect } from 'react';

export default function Admin() {
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('/api/valor-m2')
      .then(res => res.json())
      .then(data => setValor(data.valor || ''));
  }, []);

  const salvar = async () => {
    const response = await fetch('/api/valor-m2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ valor: parseFloat(valor) })
    });

    const data = await response.json();
    setMensagem(data.mensagem);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Painel Administrativo</h1>
      <p>Atualize o valor do metro quadrado (m²):</p>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        style={{ padding: 8 }}
      />
      <br /><br />
      <button onClick={salvar} style={{ padding: 10 }}>Salvar</button>
      {mensagem && <p style={{ marginTop: 20 }}>{mensagem}</p>}
    </div>
  );
}
