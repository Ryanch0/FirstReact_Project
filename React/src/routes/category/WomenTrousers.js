import { Col } from 'react-bootstrap'


function WomenTrousers(props) {

    return (
        <>
            {props.womenTrouser.map(function (a, i) {
                return (
                    <Col lg='3' md='4' xs='6' key={i} >
                        <div className='flip-outer'>
                            <div className='flip-inner'>
                                <img src={props.womenTrouser[i].src} className='front-img'></img>
                                <div>
                                    <img src={props.womenTrouser[i].subsrc} className='back-img'></img>
                                </div>
                            </div>
                        </div>
                        <p>{props.womenTrouser[i].title}</p>
                        <p style={{ lineHeight: '0' }}>{props.womenTrouser[i].price}</p>

                    </Col>
                )
            })}
        </>
    )
}


export default WomenTrousers