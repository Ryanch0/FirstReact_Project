import { Col } from 'react-bootstrap'


function MenOutwears(props) {

    return (
        <>
            {props.menOut.map(function (a, i) {
                return (
                    <Col lg='3' md='4' xs='6' key={i} >
                        <div className='flip-outer'  onClick={()=>{window.location.href = `/shop/men/outwears/detail/${props.menOut[i].id}`}}>
                            <div className='flip-inner'>
                                <img src={props.menOut[i].src} className='front-img'></img>
                                <div>
                                    <img src={props.menOut[i].subsrc} className='back-img'></img>
                                </div>
                            </div>
                        </div>
                        <p>{props.menOut[i].title}</p>
                        <p style={{ lineHeight: '0' }}>{props.menOut[i].price}</p>
                        {/* <p>{props.menOut[i].id}</p> */}

                    </Col>
                )
            })}
        </>
    )
}


export default MenOutwears