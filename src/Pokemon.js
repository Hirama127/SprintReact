import React, { useEffect, useState } from 'react';

const Pokemon = () => {
    const [japaneseName, setJapaneseName] = useState('');
    const [flavorText, setFlavorText] = useState('');
    const [img, setImg] = useState('');
    const [shinyImg, setShinyImg] = useState('');

    useEffect(() => {

        async function fetchPokemonData() {
            const randnum = Math.floor(Math.random() * 649) + 1;
            try {

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randnum}`);
                const data = await response.json();
                setImg(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${randnum}.gif`);
                setShinyImg(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${randnum}.gif`)
                const names = data.names;
                let japaneseName = '';
                for (let i = 0; i < names.length; i++) {
                    if (names[i].language.name === 'ja-Hrkt') {
                        japaneseName = names[i].name;
                        break;
                    }
                }
                setJapaneseName(japaneseName);

                const flavorTextEntries = data.flavor_text_entries;
                let flavorText = '';
                for (let i = 0; i < flavorTextEntries.length; i++) {
                    if (flavorTextEntries[i].language.name === 'ja-Hrkt') {
                        flavorText = flavorTextEntries[i].flavor_text;
                        break;
                    }
                }
                setFlavorText(flavorText);
            } catch (error) {
                console.log(error);
            }
        }

        fetchPokemonData();
        const interval = setInterval(fetchPokemonData, 240000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1 className='poketitle'> {japaneseName} </h1>
            <p className='text'>{flavorText}</p>
            <img src={img} alt={japaneseName} className='poke' />
            <h1 className='text'>いろちがいのすがた</h1>
            <img src={shinyImg} alt={japaneseName} className='poke' />
        </div>
    );
};

export default Pokemon;
