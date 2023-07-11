/**
 * 週間天気予報のタイトル表示
 * @author 青木
 * @returns 上部ヘッダーのHTML情報
 */
const SubHeader = () => {
  const headerStyle = {
    fontSize: 50,
    padding: 10,
    marginTop: 0,
    backgroundColor: '#0060AF',
    color: '#F9FAFB',
    textAlign: 'center',
    fontFamily: 'cursive',
  }

  return (
    <>
      <div style={headerStyle}>
        <p>週間天気予報</p>
      </div>
    </>
  )
}
export default SubHeader;
