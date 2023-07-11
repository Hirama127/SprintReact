/**
 * 各種宣伝の画像を表示する
 * @author 青木
 * @returns 画像情報
 */
const Infi = (props) => {
  return (
    <>
      <div >
        <img src={props.url} alt={props.alt}></img>
      </div>
    </>
  )
}
export default Infi