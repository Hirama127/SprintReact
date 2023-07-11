const PokemonHeader = () => {
    const headerStyle = {
        fontSize: 80,
        padding: 15,
        marginTop: 0,
        backgroundColor: 'black',
        color: 'white'
    }
    return(
        <div>
            <h1 style={headerStyle}>ポケモン GETだぜ!</h1>
        </div>
    )
}
export default PokemonHeader;