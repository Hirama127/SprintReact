import { useState } from "react";
import './sale.css';


const Sale = () => {
    const saleUrl = `https://counity.azurewebsites.net/adv`;

    const [loading, setLoading] = useState(true);

    fetch(saleUrl)
        .then(response => response.json())
        .then(data => {
            /*console.log(data)*/
            const saleData_a1 = data[0].date;
            const saleData_b1 = data[0].genreName;
            const saleData_c1 = data[0].rec;
            const saleData_d1 = data[0].saleRate + '%';
            const saleData_a2 = data[1].date;
            const saleData_b2 = data[1].genreName;
            const saleData_c2 = data[1].rec;
            const saleData_d2 = data[1].saleRate + '%';
            const saleData_a3 = data[2].date
            const saleData_b3 = data[2].genreName;
            const saleData_c3 = data[2].rec;
            const saleData_d3 = data[2].saleRate + '%';
            const saleData_a4 = data[3].date
            const saleData_b4 = data[3].genreName;
            const saleData_c4 = data[3].rec;
            const saleData_d4 = data[3].saleRate + '%';
            const saleData_a5 = data[4].date
            const saleData_b5 = data[4].genreName;
            const saleData_c5 = data[4].rec;
            const saleData_d5 = data[4].saleRate + '%';
            const saleData_a6 = data[5].date
            const saleData_b6 = data[5].genreName;
            const saleData_c6 = data[5].rec;
            const saleData_d6 = data[5].saleRate + '%';


            document.getElementById('saleData_a1').textContent = saleData_a1;
            document.getElementById('saleData_b1').textContent = saleData_b1;
            document.getElementById('saleData_c1').textContent = saleData_c1;
            document.getElementById('saleData_d1').textContent = saleData_d1;
            document.getElementById('saleData_a2').textContent = saleData_a2;
            document.getElementById('saleData_b2').textContent = saleData_b2;
            document.getElementById('saleData_c2').textContent = saleData_c2;
            document.getElementById('saleData_d2').textContent = saleData_d2;
            document.getElementById('saleData_a3').textContent = saleData_a3;
            document.getElementById('saleData_b3').textContent = saleData_b3;
            document.getElementById('saleData_c3').textContent = saleData_c3;
            document.getElementById('saleData_d3').textContent = saleData_d3;
            document.getElementById('saleData_a3').textContent = saleData_a3;
            document.getElementById('saleData_b3').textContent = saleData_b3;
            document.getElementById('saleData_c3').textContent = saleData_c3;
            document.getElementById('saleData_d3').textContent = saleData_d3;
            document.getElementById('saleData_a4').textContent = saleData_a4;
            document.getElementById('saleData_b4').textContent = saleData_b4;
            document.getElementById('saleData_c4').textContent = saleData_c4;
            document.getElementById('saleData_d4').textContent = saleData_d4;
            document.getElementById('saleData_a5').textContent = saleData_a5;
            document.getElementById('saleData_b5').textContent = saleData_b5;
            document.getElementById('saleData_c5').textContent = saleData_c5;
            document.getElementById('saleData_d5').textContent = saleData_d5;
            document.getElementById('saleData_a6').textContent = saleData_a6;
            document.getElementById('saleData_b6').textContent = saleData_b6;
            document.getElementById('saleData_c6').textContent = saleData_c6;
            document.getElementById('saleData_d6').textContent = saleData_d6;



            setLoading(false);
        })
        .catch(error => {
            setLoading(false);

        });

    return (
        <div className="saleimg">
       

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
                            <tr>
                                <td id='saleData_a1'></td>
                                <td id='saleData_b1'></td>
                                <td id='saleData_c1'></td>
                                <td id='saleData_d1'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td id='saleData_a2'></td>
                                <td id='saleData_b2'></td>
                                <td id='saleData_c2'></td>
                                <td id='saleData_d2'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td id='saleData_a3'></td>
                                <td id='saleData_b3'></td>
                                <td id='saleData_c3'></td>
                                <td id='saleData_d3'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td id='saleData_a4'></td>
                                <td id='saleData_b4'></td>
                                <td id='saleData_c4'></td>
                                <td id='saleData_d4'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td id='saleData_a5'></td>
                                <td id='saleData_b5'></td>
                                <td id='saleData_c5'></td>
                                <td id='saleData_d5'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td id='saleData_a6'></td>
                                <td id='saleData_b6'></td>
                                <td id='saleData_c6'></td>
                                <td id='saleData_d6'></td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            
        

    )
}
export default Sale