// pages/admin.js
import { useState } from "react";

export default function AdminPage() {
  const [senha, setSenha] = useState("");
  const [valorM2, setValorM2] = useState("");
  const [msg, setMsg] = useState("");

  const salvarValor = () => {
    if (senha !== "rock2025") {
      setMsg("Senha incorreta!");
      return;
    }

    fetch("/api/valor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valor: parseFloat(valorM2) }),
    })
      .then((res) => res.json())
      .then(() => setMsg("Valor atualizado com sucesso!"))
      .catch(() => setMsg("Erro ao salvar."));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Área Administrativa</h2>
      <p>Digite a senha e o novo valor do m²:</p>
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <input
        type="number"
        placeholder="Novo valor do m²"
        value={valorM2}
        onChange={(e) => setValorM2(e.target.value)}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <button onClick={salvarValor}>Salvar</button>
      <p>{msg}</p>
    </div>
  );
}
