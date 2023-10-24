import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function Form({ addCard }) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    egressoOuConvidado: '',
    pago: '',
    foto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.nome.trim() === '' ||
      formData.telefone.trim() === '' ||
      formData.egressoOuConvidado.trim() === '' ||
      formData.pago.trim() === ''
    ) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    addCard(formData);

    setFormData({
      nome: '',
      telefone: '',
      egressoOuConvidado: '',
      pago: '',
      foto: '',
    });
  };

  return (
    <div className='bg-blue-950 flex flex-col justify-center items-center p-6 rounded-xl text-white shadow-lg'>
      <form onSubmit={handleSubmit} className='w-full flex flex-col space-y-2'>
        <div className='flex flex-col'>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome"
            value={formData.nome}
            onChange={handleChange}
            className='bg-slate-950 rounded-lg px-2 py-3 focus:outline-none mt-2 focus:shadow-2xl focus:shadow-inner focus:shadow-blue-600'
            required
          />
        </div>

        <div className='flex flex-col'>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            placeholder="Digite o telefone"
            value={formData.telefone}
            onChange={handleChange}
            className='bg-slate-950 rounded-lg px-2 py-3 focus:outline-none mt-2 focus:shadow-2xl focus:shadow-inner focus:shadow-blue-600'
            required
          />
        </div>

        <div className='flex flex-col'>
          <label>URL da Foto:</label>
          <input
            type="url"
            name="foto"
            placeholder="URL da imagem"
            value={formData.foto}
            onChange={handleChange}
            className='bg-slate-950 rounded-lg px-2 py-3 focus:outline-none mt-2 focus:shadow-2xl focus:shadow-inner focus:shadow-blue-600'
          />
        </div>

        <div className='flex flex-col'>
          <label>Egresso ou Convidado:</label>
          <div className='flex items-center space-x-2'>
            <input
              type="radio"
              name="egressoOuConvidado"
              value="Egresso"
              checked={formData.egressoOuConvidado === "Egresso"}
              onChange={handleChange}
              className='mt-2'
              required
            />
            <label>Egresso</label>

            <input
              type="radio"
              name="egressoOuConvidado"
              value="Convidado"
              checked={formData.egressoOuConvidado === "Convidado"}
              onChange={handleChange}
              required
            />
            <label>Convidado</label>
          </div>
        </div>

        <div className='flex flex-col'>
          <label>Pago:</label>
          <div className='flex space-x-2'>
            <input
              type="radio"
              name="pago"
              value="sim"
              checked={formData.pago === "sim"}
              onChange={handleChange}
              required
            />
            <label>Sim</label>

            <input
              type="radio"
              name="pago"
              value="nao"
              checked={formData.pago === "nao"}
              onChange={handleChange}
              required
            />
            <label>Não</label>
          </div>
        </div>

        <button
          type="submit"
          className='bg-blue-600 px-4 py-2 rounded-xl'
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

