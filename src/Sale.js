import { useState, useEffect } from "react";
import './Sales.css';

const Sale = () => {
    //状態の初期化
    const saleUrl = `https://counity.azurewebsites.net/adv`;
    //データが読み込み中の状態
    const [loading, setLoading] = useState(true);
    const [saleData, setSaleData] = useState();
    //useEffectを設定する→データの取得と状態の更新
    useEffect(() => {
        const fetchData = () => {
        fetch(saleUrl)
            //URL (saleUrl) からデータを取得
            //fetchメソッドの非同期処理が成功した後に実行されるコールバック関数を定義
            .then(response => response.json())
            //取得したデータをJSON形式に変換
            .then(data => {
                //dataという変数に代入
                
                setSaleData(data);
                //SaleDataのデータを更新
                setLoading(false);
                //データの読み込みが完了した状態
            })
            .catch(error => {
                setLoading(false);
                //データの読み込みが完了した状態
            });
    };

    fetchData(); //初回のマウント時にデータを取得

    const interval = setInterval(fetchData, 600000);   //1時間ごとにデータを取得

    return () => {
        clearInterval(interval);  //コンポーネントがアンマウントされたときにインターバルをクリア
    };

}, [saleData,saleUrl]);

    const TextStyle = (data) => {
        // 一定以上のデータ数値を定義（この場合は20以上）
        const threshold = 20;
        // データが一定以上（'>='と指定したので20を含む）の場合は赤色にする
        if (data >= threshold) {
            return { color: 'red' };
        }
        // データが一定以下の場合はデフォルトのスタイルを返す
        return {};
    };
    //レンダリングの結果を返す
    return (
        <div>
            {loading ? (    //ロード中の状態（true）
                //Spinner（スピナー）でユーザーに処理が進行中（データ読み込み中）であることを示す
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow" role="status" aria-hidden="true"></span> Loading...</button>
            ) : (
                //loadingが終わったら（読み込み完了したら）以下を表示する（faise）
                //saleDataの表示
                <table className="saleTable">
                    <thead>
                        <tr>
                            <th>日付</th>
                            <th>商品ジャンル</th>
                            <th>おすすめポイント</th>
                            <th>割引率</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saleData.map((item, Data) => (
                            //saleData配列の要素ごとに処理を行うためのメソッド
                            //mapメソッドで、配列の各要素に対して指定された関数を実行し、その結果を新しい配列として返す
                            //saleDataの各要素に対してmap関数を使用し、テーブルの行として表示
                            <tr key={Data}>
                                <td>{item.date}</td>
                                <td>{item.genreName}</td>
                                <td>{item.rec}</td>
                                <td style={TextStyle(item.saleRate)}>{item.saleRate + '%'}</td>
                            </tr>
                            //key属性で、Data (インデックス)が使用され、Reactが各要素を一意に識別可能にする。
                            //Data：配列の要素のインデックスまたはキーを指す変数。要素のインデックスがDataに代入される。
                            //item：配列の要素を指す変数。saleDataの各要素が順番にitemに代入される。
                            //各要素のプロパティ (item.date, item.genreName, item.rec, item.saleRate) をテーブルのセルに表示
                            //td要素に対して、style属性に関数TextStyleを適用して条件付きのスタイルを設定（上記に条件記載済み）
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default Sale;