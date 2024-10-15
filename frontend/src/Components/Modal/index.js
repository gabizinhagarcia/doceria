import Modal from 'react-modal';
import '../../styles/index.css';
import { useState } from 'react';
import { toast } from "react-toastify";
import apiBuscaCep from '../../ApiCliente/ApiBuscaCep/apiBuscaCep';

export default function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [pegarCep, setPegarCep] = useState('');
  const [dadosViaCep, setDadosViaCep] = useState(null);
  const [loadingCep, setLoadingCep] = useState(false);

  function abrirModal() {
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    resetForm();
  }

  function resetForm() {
    setUsuario('');
    setSenha('');
    setPegarCep('');
    setDadosViaCep(null);
  }

  function logarUsuarios(e) {
    e.preventDefault();
    if (!usuario || !senha) {
      alert('Preencha todos os campos!');
      return;
    }
    if (usuario === 'luciano' && senha === '123456') {
      toast.success('Login efetuado com sucesso!');
      resetForm();
    } else {
      toast.error('Usuário ou senha incorretos!');
    }
  }

  async function dadosFormulario(e) {
    e.preventDefault();
    setLoadingCep(true);
    try {
      const resposta = await apiBuscaCep.get(`/${pegarCep}/json/`);
      setDadosViaCep(resposta.data);
      setPegarCep(''); // Clear the CEP input field
    } catch (error) {
      toast.error('Erro ao buscar CEP!');
    } finally {
      setLoadingCep(false);
    }
  }

  return (
    <div>
      <button onClick={abrirModal} className="button">FAÇA LOGIN</button>

      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={modalAberto}
      >
        <button onClick={fecharModal} className="close-button">CONTINUAR SEM LOGIN</button>
        <h1>FAÇA LOGIN</h1>
        <form onSubmit={logarUsuarios}>
          <input
            type="text"
            placeholder="Digite o Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Digite a Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button">Enviar</button>
        </form>

        <h2>ENTREGA</h2>
        <form onSubmit={dadosFormulario}>
          <input
            type="text"
            placeholder="Digite o CEP"
            value={pegarCep}
            onChange={(e) => setPegarCep(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button" disabled={loadingCep}>
            {loadingCep ? 'Carregando...' : 'Enviar'}
          </button>
        </form>

        {dadosViaCep && (
          <div className="address-info">
            <p>A rua é: {dadosViaCep.logradouro}</p>
            <p>A cidade é: {dadosViaCep.localidade}</p>
            <p>O estado é: {dadosViaCep.uf}</p>
          </div>
        )}
        
      </Modal>
    </div>
  );
}