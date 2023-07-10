/**
 * 
 * @param {各種画像ファイルのURL} props 
 * @returns 各種画像ファイルのページ
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