import { Col } from 'react-bootstrap'


function MenJeans(props) {

    return (
        <>
            {props.menJean.map(function (a, i) {
                return (
                    <Col lg='3' md='4' xs='6' key={i} >
                        <div className='flip-outer'>
                            <div className='flip-inner'>
                                <img src={props.menJean[i].src} className='front-img'></img>
                                <div>
                                    <img src={props.menJean[i].subsrc} className='back-img'></img>
                                </div>
                            </div>
                        </div>
                        <p>{props.menJean[i].title}</p>
                        <p style={{ lineHeight: '0' }}>{props.menJean[i].price}</p>
                        {/* <p>{props.menJean[i].id}</p> */}
                    </Col>
                )
            })}
        </>
    )
}


export default MenJeans