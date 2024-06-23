import { Col } from 'react-bootstrap'


function WomenOutwears(props) {

    return (
        <>
            {props.womenOut.map(function (a, i) {
                return (
                    <Col lg='3' md='4' xs='6' key={i} >
                        <div className='flip-outer'>
                            <div className='flip-inner'>
                                <img src={props.womenOut[i].src} className='front-img'></img>
                                <div>
                                    <img src={props.womenOut[i].subsrc} className='back-img'></img>
                                </div>
                            </div>
                        </div>
                        <p>{props.womenOut[i].title}</p>
                        <p style={{ lineHeight: '0' }}>{props.womenOut[i].price}</p>

                    </Col>
                )
            })}
        </>
    )
}


export default WomenOutwears