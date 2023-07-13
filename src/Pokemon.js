import React, { useEffect, useState } from 'react';
/**
 * pokeAPIのJSONファイルからポケモンの情報を取得するjsファイル
 * @author 青木、中山、道田
 * @returns ポケモンGETだぜ!
 */

//ポケモンの日本名・説明・gif画像2種を取得
const Pokemon = () => {
    const [japaneseName, setJapaneseName] = useState('');
    const [flavorText, setFlavorText] = useState('');
    const [img, setImg] = useState('');
    const [shinyImg, setShinyImg] = useState('');

    useEffect(() => {

        async function fetchPokemonData() {
            //ポケモンを図鑑ナンバーによってランダムで取得
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

        //ポケモンのランダム取得時間をカルーセルが一巡するときに設定
        fetchPokemonData();
        const interval = setInterval(fetchPokemonData, 7500);
        return () => {
            clearInterval(interval);
        };
    }, []);

    //画面に表示
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
