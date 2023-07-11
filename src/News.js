import { useState, useEffect } from "react";

/**
 * NewsApiからJSON情報を取得し、表示するコンポーネント
 * @author 五十嵐
 * @returns ニュースデータを表示するためのjs
 * @version 1,0
 */

//propsに引数を設定
function News(props) {
  //取得データを保持するための設定
  const [title, setTitle] = useState('');
  const [news, setNews] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  //useEffectの設定
  useEffect(() => {

    //定数newUrlにJSONのURLを格納
    const newsUrl =
    'https://counews.azurewebsites.net/news';

    //定数newUrを読み込みJSON情報を取得、以下の関数をfetchNewsDataに格納
    const fetchNewsData = () => {
      fetch(newsUrl)
        .then(response => response.json())
        .then(data => {
          //JSON内の各情報を定数articleNoに格納
          const articleNo = props.articleNo;
          setTitle(data.articles[articleNo].title);
          setImgSrc(data.articles[articleNo].urlToImage);
          setNews(data.articles[articleNo].description);
        })
        //エラー処理の場合
        .catch(error => {
          console.log(error);
        });
    };

    //関数実行
    fetchNewsData();

    //timerを使い1時間のインターバルでfetchNewsDataの情報を更新
    const timer = setInterval(fetchNewsData, 3600000);

    //クリーンアップ処理
    return () => {
      clearInterval(timer);
    };

  }, [props.articleNo]);



  const renderTitle = () => {
    if (news) {
      //設定した値に情報が入っていた場合、定数renderTitleに情報をリターンする
      return <h1 className="newsTitle">{title}</h1>
    } else {
      //それ以外の場合はNo Titleを定数renderTitleにリターンする
      return <h1>No Title</h1>
    }
  };

  const renderImage = () => {
    if (imgSrc) {
      //設定した値に情報が入っていた場合、定数renderImageに情報をリターンする
      return <img src={imgSrc} className="newsImage" alt="" />;
    } else {
      //それ以外の場合は設定したイメージ画像を定数renderImageにリターンする
      return <img src="https://counity.blob.core.windows.net/counitysale/noimage.png" className="newsImage" alt="ノーイメージ" style={{ width: '60%', height: '60%' }} />;
    }
  };

  const renderText = () => {
    if (news) {
      //設定した値に情報が入っていた場合、定数renderTextに情報をリターンする
      return <h1 className="newsText">{news}</h1>
    } else {
      //それ以外の場合は設定したNo Textを定数renderTextにリターンする
      return <h1>No Text</h1>
    }
  };

  return (
    <>
      {renderTitle()}<br/>
      {renderImage()}<br/><br/>
      {renderText()}
    </>
  );
}

//コンポーネントとしてexportする
export default News;
