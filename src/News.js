import { useState, useEffect } from "react";

/**
 * NewsApiからJSON情報を取得したコンポーネント
 * @author 五十嵐
 * @returns App,js
 * @version 1,0
 */

/**
 * propsを使用し、変数Newsに値を格納
 */
function News(props) {
  const [title, setTitle] = useState('');
  const [news, setNews] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    
    /**
     * 変数newUrlにJSONのURLを格納
     */
    const newsUrl =
      'https://newsapi.org/v2/top-headlines?country=jp&apiKey=8932d7691175436ea3d6ba7ba5721524';

      /**
       * 変数newUrを読み込みJSON情報を取得、以下の情報をfetchNewsDataに格納
       */
    const fetchNewsData = () => {
      fetch(newsUrl)
        .then(response => response.json())
        .then(data => {
          /**
           * JSON内の各情報を変数articleNoに格納
           */
          const articleNo = props.articleNo;
          setTitle(data.articles[articleNo].title);
          setImgSrc(data.articles[articleNo].urlToImage);
          setNews(data.articles[articleNo].description);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchNewsData();

    /**
     * timerを使い10秒のインターバルでfetchNewsDataの情報を更新
     */
    const timer = setInterval(fetchNewsData, 10000);
    return()=>{
        clearInterval(timer);
    };

  }, [props.articleNo]);


  /**
   * JSONで取得した情報内にnullがあった場合、デフォルトの情報を表示する記述
   */
  const renderTitle = () => {
    if (news) {
      return <h1 className="newsTitle">{title}</h1>
    } else {
      return <h1>No Title</h1>
    }
  };

  const renderImage = () => {
    if (imgSrc) {
      return <img src={imgSrc} className="newsImage" alt="" style={{ width: '100%', height: '100%' }} />;
    } else {
      return <img src="https://counity.blob.core.windows.net/counitysale/noimage.png" className="newsImage" alt="ノーイメージ" style={{ width: '60%', height: '60%' }} />;
    }
  };

  const renderText = () => {
    if (news) {
      return <h1 className="newsText">{news}</h1>
    } else {
      return <h1>No Text</h1>
    }
  };

  return (
    <>
      {renderTitle()}
      {renderImage()}<br/>
      {renderText()}<br/>
    </>
  );
}

export default News;
