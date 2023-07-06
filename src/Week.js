import './Weather.css';
function Week() {
    const tableStyle = {
        fontSize: 30,
        padding: 10,
        marginTop: 0,
        backgroundColor: '#cccccc',
        color: 'black',
        textAlign: 'center',
        border: '1px solid black',
        borderCollapse: 'collapse',
    }
    const tabStyle = {
        width: '100%',
        height: '100%',
        border: '1px solid black',
        tableLayout: 'fixed',
    };

const today = new Date();
const days = ['日', '月', '火', '水', '木', '金', '土'];
const dates = [];
for (let i = 0; i < 7; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    const day = days[date.getDay()];
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}(${day})`;
    dates.push(formattedDate);
}
const date1 = dates[0];
const date2 = dates[1];
const date3 = dates[2];
const date4 = dates[3];
const date5 = dates[4];
const date6 = dates[5];


return(
<>
<div style={{ width: '100%', height: '100%' }}>
<table className="tabStyle"  style={tabStyle}>
<tr style={tableStyle}>
    <th  style={tableStyle}>日付</th>
    <th style={tableStyle}>{date1}</th>
    <th style={tableStyle}>{date2}</th>
    <th style={tableStyle}>{date3}</th>
    <th style={tableStyle}>{date4}</th>
    <th style={tableStyle}>{date5}</th>
    <th style={tableStyle}>{date6}</th>
</tr>
</table>
</div>
</>
);
}
export default Week;



