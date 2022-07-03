import React, { useEffect, useState } from "react";
import FactList from '../components/FactList';
import NumberInput from '../components/NumberInput';

function AnimalContainer() {
    const [facts, setFacts] = useState([]);
    const [numberOfFacts, setNumberOfFacts] = useState('1');

    async function getFacts() {
        const url = `https://zoo-animal-api.herokuapp.com/animals/rand/${numberOfFacts}`
        const response = await fetch(url);
        const data = await response.json();
        setFacts(data);
     }

     useEffect(() => {
        getFacts();
     }, [numberOfFacts]);

    return (
        <div className="animals">
            <h1>Animal Generator</h1>
            <NumberInput labelText="Number of Animals" handleChange={setNumberOfFacts} />
            <FactList facts={facts} title="A list of Animal Facts" numberOfFacts={numberOfFacts} />  
            
        </div>
    ); 
}

export default AnimalContainer;