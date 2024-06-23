import { useParams } from "react-router-dom"


function MenOutDetail(props) {

    let {id} = useParams()
    let item = props.menOut.find(function(x){
        return x.id == id
    })
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

export default MenOutDetail