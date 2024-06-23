import { Col } from 'react-bootstrap'


function MenTrousers(props) {

    return (
        <>
            {props.menTrouser.map(function (a, i) {
                return (
                    <Col lg='3' md='4' xs='6' key={i} >
                        <div className='flip-outer'>
                            <div className='flip-inner'>
                                <img src={props.menTrouser[i].src} className='front-img'></img>
                                <div>
                                    <img src={props.menTrouser[i].subsrc} className='back-img'></img>
                                </div>
                            </div>
                        </div>
                        <p>{props.menTrouser[i].title}</p>
                        <p style={{ lineHeight: '0' }}>{props.menTrouser[i].price}</p>

                    </Col>
                )
            })}
        </>
    )
}


export default MenTrousers