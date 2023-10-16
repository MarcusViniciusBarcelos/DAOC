import { useEffect, useState } from "react";

function Info(){
    const [number, setNumber] = useState(0)
    const [dataCep, setDataCep] = useState({})


    useEffect(() =>{
        async function getDataCep() {
            const dataJson = await fetch("http://viacep.com.br/ws/01001000/json/")
            const cep  = await dataJson.json()

            setDataCep(() => cep)
        }

        getDataCep()
        
    }, [])

    return (
        <>
            <h1>CEP - {dataCep.cep}</h1>
            <h1>BAIRRO - {dataCep.bairro}</h1>
            <h1>CIDADE - {dataCep.localidade}</h1>
            <button onClick={() => setNumber(number + 1)}>Incrementa</button>
        </>
    )
}

export default Info;