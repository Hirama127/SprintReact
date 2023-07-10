import './App.css';
import Header from './Header';
import Weather from './TWeather';
import SubHeader from './SubHeader';
import WWeather from './WWeather';
import Sale from './Sale';
import Week from './Week';
import Infi from './Infi';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import News from './News';

function App() {
    const newsData = [
    { articleNo: 0 },
    { articleNo: 1 },
    { articleNo: 2 },
    { articleNo: 3 },
    { articleNo: 4 },
  ];
  return (
    <>
  <Carousel interval={30000} className="custom-carousel justify-content-end">
 
        {newsData.map((data, index) => (
          <Carousel.Item key={index}>
            <Container fluid className="container-fluid3">
              <News articleNo={data.articleNo} />
            </Container>
          </Carousel.Item>
        ))}
     
        
        <Carousel.Item >
          <Container fluid className="container-fluid2">
            <Sale />
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Header />
          <Container fluid className='img'>
            <Row >
              <Col>
                <Weather area="110000" areaname="埼玉エリア" />
              </Col>
              <Col>
                <Weather area="130000" areaname="東京エリア" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Weather area="140000" areaname="神奈川エリア" />
              </Col>
              <Col>
                <Weather area="120000" areaname="千葉エリア" />
              </Col>
            </Row>
          </Container>
          <SubHeader />
          <Week />
          <WWeather area="110000" areaname="埼玉" />
          <WWeather area="130000" areaname="東京" />
          <WWeather area="120000" areaname="千葉" />
          <WWeather area="140000" areaname="神奈川" />
        </Carousel.Item>

        {/*style={{ '--bs-gutter-x': '0' }}の追加*/}
        <Carousel.Item>
          <Container fluid className='infi' style={{ '--bs-gutter-x': '0' }}>
            <Infi url='https://counity.blob.core.windows.net/counitysale/review.png' alt='レビュー広告' />
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container fluid className='infi' style={{ '--bs-gutter-x': '0' }}>
            <Infi url='https://counity.blob.core.windows.net/counitysale/recipe.png' alt='レシピ広告' />
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container fluid className='infi' style={{ '--bs-gutter-x': '0' }}>
            <Infi url='https://counity.blob.core.windows.net/counitysale/enquete.png' alt='アンケート機能広告' />
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container fluid className='infi' style={{ '--bs-gutter-x': '0' }}>
            <Infi url='https://counity.blob.core.windows.net/counitysale/concierge.png' alt='コンシェルジュ広告' />
          </Container>
        </Carousel.Item>
        

      </Carousel>
    </>
  );
}

export default App;
