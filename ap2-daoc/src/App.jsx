import { useState } from 'react';
import './assets/css/App.css';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';

function App() {
  const [formData, setFormData] = useState([]);

  const addCard = (newData) => {
    setFormData([...formData, newData]);
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-900 space-y-4 relative'>
      {/* Div com fundo azul */}
      <div className='w-full h-full bg-slate-900 relative z-10'>
        <Header />
        <Welcome name={'Marcus'} />
        <div className='w-full flex justify-around space-y-6'>
          <div className='w-1/2 flex flex-wrap gap-4'>
            {formData.map((data, index) => (
              <Card
                key={index}
                name={data.nome}
                role={data.egressoOuConvidado}
                isConfirmed={data.pago === 'sim'}
                imgSrc={data.foto}
              />
            ))}
          </div>
          <div className='w-1/4'>
            <Form addCard={addCard} />
          </div>
        </div>
        <Footer />
      </div>

      {/* Div com imagem branca para mesclar */}
    </div>
  );
}

export default App;
