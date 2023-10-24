import { useState } from 'react';
import PropTypes from 'prop-types';

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export function Welcome({ name }) {
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState(''); 
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({});

  const fetchViaCepData = () => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => setAddress(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className='w-full flex flex-col justify-around items-center text-white'>
      <h1 className='text-2xl'>Seja bem-vindo, <strong className='text-blue-700'>{name}!</strong></h1>


      <div className='w-full flex justify-around items-center mt-4'>

        <div className='w-1/2 flex flex-wrap gap-4'>
          <div className='flex flex-col text-lg text-zinc-400'>
            <h2 className='text-xl font-bold text-blue-700'>Endereço:</h2>
            <span>Rua: {logradouro}</span>
            <span>Bairro: {bairro}</span>

            {address.cep && (
              <>
                {address.localidade && <span>Cidade: {address.localidade}</span>}
                {address.uf && <span>Estado: {address.uf}</span>}
              </>
            )}
          </div>
        </div>

        <div className='w-1/4'>
          <div className='flex flex-col items-end space-y-2'>
            <div className='flex space-x-2'>
              <input
                type="text"
                placeholder="Rua"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
                className='bg-slate-950 rounded-lg px-2 py-3  focus:outline-none focus:shadow-inner focus:shadow-blue-600'
              />
              <input
                type="text"
                placeholder="Bairro" 
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className='bg-slate-950 rounded-lg px-2 py-3  focus:outline-none focus:shadow-inner focus:shadow-blue-600'
              />
            </div>

            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className='bg-slate-950 rounded-lg px-2 py-3 focus:outline-none focus:shadow-inner focus:shadow-blue-600'
            />
            <button
              onClick={fetchViaCepData}
              className='bg-blue-700 px-4 py-2 rounded-xl'>
              Buscar CEP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

