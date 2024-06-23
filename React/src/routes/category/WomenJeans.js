import { Col } from 'react-bootstrap'


function WomenJeans(props) {

    return (
        <>
            {props.womenJean.map(function (a, i) {
                return (
                    <Col lg='3' md='4' xs='6' key={i} >
                        <div className='flip-outer'>
                            <div className='flip-inner'>
                                <img src={props.womenJean[i].src} className='front-img'></img>
                                <div>
                                    <img src={props.womenJean[i].subsrc} className='back-img'></img>
                                </div>
                            </div>
                        </div>
                        <p>{props.womenJean[i].title}</p>
                        <p style={{ lineHeight: '0' }}>{props.womenJean[i].price}</p>

                    </Col>
                )
            })}
        </>
    )
}


export default WomenJeans