import React, { useState, useEffect } from 'react';
/**
 * 明日の天気予報と本日の日付、時間を表示する
 * @author 青木
 * @returns 上部ヘッダーのHTML情報
 */
const Header = () => {
  const headerStyle = {
    fontSize: 30,
    padding: 10,
    marginTop: 0,
    backgroundColor: '#0060AF',
    color: '#F9FAFB',
    textAlign: 'right',
  }
  const headerStyle1 = {
    fontSize: 50,
    padding: 10,
    marginTop: 0,
    backgroundColor: '#0060AF',
    color: '#F9FAFB',
    textAlign: 'center',
    fontFamily: 'cursive'
  }

  //日付と時間情報を格納する変数とメソッドを作成
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDate();
      const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][d.getDay()];

      //取得した日付情報を格納する
      setDate(`${year}年${month}月${day}日[${dayOfWeek}]`);

      const hour = d.getHours().toString().padStart(2, '0');
      const minute = d.getMinutes().toString().padStart(2, '0');

      //取得した時間情報を格納する
      setTime(`${hour}:${minute}`);
    }, 1000);
  }, []);

  return (
    <>
      <div style={headerStyle1}>
        <p>明日の天気予報</p>
      </div>
      <div style={headerStyle}>
        <p>{date}<span>{time}</span></p>
      </div>
    </>
  )
}
export default Header;
