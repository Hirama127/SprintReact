/**
 * ポケモン表示画面のヘッダーを構成するjsファイル
 * @author 中山
 * @returns ポケモンGETだぜ!
 */

//ヘッダーのスタイル
const PokemonHeader = () => {
    const headerStyle = {
        fontSize: 80,
        padding: 15,
        marginTop: 0,
        backgroundColor: 'black',
        color: 'white'
    }

    //ヘッダーを表示
    return(
        <div>
            <h1 style={headerStyle}>ポケモン GETだぜ!</h1>
        </div>
    )
}
export default PokemonHeader;