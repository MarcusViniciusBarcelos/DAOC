import { useState } from "react";
import useFetch from "../hooks/useFetch";

function Info(){
    const [number, setNumber] = useState(0)
    const [cep, setCep] = useState("88980000")
    const [data] = useFetch(`http://viacep.com.br/ws/${cep}/json/`)
    const [cepForm, setCepForm] = useState()

    function handleGetCep() {
        setCep(cepForm)
    }

    return (
        <>
            <h1>{cep}</h1>
            <input type="text" value={cepForm} onChange={(event) => {setCepForm(event.target.value)}} />
            <button onClick={handleGetCep}>Buscar Cep</button>
            <h1>CEP - {data.cep}</h1>
            <h1>BAIRRO - {data.bairro}</h1>
            <h1>CIDADE - {data.localidade}</h1>
            <button onClick={() => setNumber(number + 1)}>Incrementa</button>
        </>
    )
}

export default Info;