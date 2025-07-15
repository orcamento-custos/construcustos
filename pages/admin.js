import { useState } from 'react';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newValue, setNewValue] = useState('');
  const [currentValue, setCurrentValue] = useState('R$ 1.500');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  const handleUpdate = () => {
    setCurrentValue(newValue);
    alert(`Valor do m² atualizado para: ${newValue}`);
    setNewValue('');
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login de administrador</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Painel de Admin</h2>
      <p>Valor atual do m²: <strong>{currentValue}</strong></p>
      <input
        type="text"
        placeholder="Novo valor do m²"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      /><br />
      <button onClick={handleUpdate}>Atualizar</button>
    </div>
  );
}
