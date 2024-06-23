import { useParams } from "react-router-dom"


function MenJeanDetail(props) {

    let {id} = useParams()
    let item = props.menJean.find((x) => {
        return x.id === id; // 조건을 만족하는지 확인하는 부분
    });
    
    // 상품데이터가 모두 로드 된 후에 코드 실행
    if(!item) {
        return <div>Loading...</div>
    }

    return (
       <>
       <h5>{item.title}</h5>
       <h5>{item.price}</h5>
       <img src={item.src} className="detailImg"></img>
       <br></br>
       <div style={{padding : '10px'}}></div>
        <img src={item.subsrc} className="detailImg"></img>
       </>
        
    )
}

export default MenJeanDetail