import './Weather.css';
import { useState, useEffect } from "react";

const tableStyle = {
    fontSize: 30,
    padding: 10,
    marginTop: 0,
    backgroundColor: '#cccccc',
    color: 'black',
    textAlign: 'center',
    border: '1px solid black',
    borderCollapse: 'collapse',
};
const tabStyle = {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    tableLayout: 'fixed',
};

const forecastUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json`;

function Week() {

    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {

        const fetchWeatherData = async () => {
            try {
                const response = await fetch(forecastUrl);
                const data = await response.json();
                const dates = data[1].timeSeries[0].timeDefines.map(defines => new Date(defines));
                const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
                let month1, day1, weekday1;
                let month2, day2, weekday2;
                let month3, day3, weekday3;
                let month4, day4, weekday4;
                let month5, day5, weekday5;
                let month6, day6, weekday6;
    
                for (let i = 0; i < 7; i++) {
                    const date = dates[i];
                    const month = date.getMonth() + 1;
                    const day = date.getDate();
                    const weekday = weekdays[date.getDay()];
    
                    if (i === 0) {
                        month1 = month;
                        day1 = day;
                        weekday1 = weekday;
                    } else if (i === 1) {
                        month2 = month;
                        day2 = day;
                        weekday2 = weekday;
                    } else if (i === 2) {
                        month3 = month;
                        day3 = day;
                        weekday3 = weekday;
                    } else if (i === 3) {
                        month4 = month;
                        day4 = day;
                        weekday4 = weekday;
                    } else if (i === 4) {
                        month5 = month;
                        day5 = day;
                        weekday5 = weekday;
                    } else if (i === 5) {
                        month6 = month;
                        day6 = day;
                        weekday6 = weekday;
                    }
                }
    
                return (
                    <div style={{ width: '100%', height: '100%' }}>
                    <table className="tabStyle" style={tabStyle}>
                      <tbody> 
                        <tr style={tableStyle}>
                          <th style={tableStyle}>日付</th>
                          <th style={tableStyle}>{month1}/{day1}({weekday1})</th>
                          <th style={tableStyle}>{month2}/{day2}({weekday2})</th>
                          <th style={tableStyle}>{month3}/{day3}({weekday3})</th>
                          <th style={tableStyle}>{month4}/{day4}({weekday4})</th>
                          <th style={tableStyle}>{month5}/{day5}({weekday5})</th>
                          <th style={tableStyle}>{month6}/{day6}({weekday6})</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                );
            } catch (error) {
                console.error('データの取得エラー:', error);
                return null;
            }
        };

        const fetchData = async () => {
            const data = await fetchWeatherData();
            setWeatherData(data);
        };
        fetchData();
        const timer = setInterval(fetchData, 10000);
        return () => {
            clearInterval(timer);
        };
    }, 
    [weatherData]);
    return <div>{weatherData}</div>;
}
export default Week;
