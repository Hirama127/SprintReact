import { useState, useEffect } from "react";
import './sale.css';


const Sale = () => {
    const saleUrl = `https://counity.azurewebsites.net/adv`;

    const [loading, setLoading] = useState(true);
    const [saleData, setSaleData] = useState([]);

    useEffect(() => {
        fetch(saleUrl)
            .then(response => response.json())
            .then(data => {
                setSaleData(data);
                setLoading(false);
                console.log(saleData);
            })
            .catch(error => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow" role="status" aria-hidden="true"></span> Loading...</button>
            ) : (


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
                            <tr key={Data}>
                                <td>{item.date}</td>
                                <td>{item.genreName}</td>
                                <td>{item.rec}</td>
                                <td>{item.saleRate + '%'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )}
        </div>

    );

}
export default Sale;