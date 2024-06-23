import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';



function Mainpic() {
    return (
        <Container style={{marginTop : '70px'}}>
            <Row>
                <Col md='3'><img src='img/main1.jpg' width='105%' /></Col>
                <Col md='3'><img src='img/main2.jpg' width='105%' /></Col>
                <Col md='3'><img src='img/main3.jpg' width='105%' /></Col>
                <Col md='3'><img src='img/main4.jpg' width='105%' /></Col>
            </Row>
            <div className='title'>
                <h4 style={{marginBottom :'30px'}}>PASTENSIZE</h4>
                <p>The theme "Pastensize" is a coined term, combining 'past', 'tense' and '-ize.'</p>
                <p>This signifies a perspective that sees today as the yesterday of tomorrow.</p>
                <p>We have reinterpreted our upcoming 24SS collection with the late</p>
                <p>'90s minimal mood and iconic items, creating a familiar yet fresh interpretation.</p>
            </div>
            <Row>
                <Col md='6'><img src='img/main5.jpg' width='100%' /></Col>
                <Col md='6'><img src='img/main9.jpg' width='100%' /></Col>
            </Row>
            <div style={{height : '40px'}}>
            </div>
            
        </Container >
    );
}

export default Mainpic;