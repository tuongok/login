import { useEffect, useState } from "react";
import { gettopic } from "../../services/topicservice";
import { getanswer } from "../../services/answerservice";
import { Link } from "react-router-dom";

function Answers(){
    const [dataanswer, setdataanswer] = useState([]);
    useEffect(() => {
        const fetchapi = async () => {
            const topic = await gettopic();
            const answer = await getanswer();
            let result = [];
            for(let i=0;i<answer.length;i++){
               result.push({
                
                ...topic.find(item=>item.id==answer[i].topicId),
                ...answer[i]
               }) 
        };
        setdataanswer(result.reverse());
        };
        fetchapi();
    },[])
    return(
        <>
        <h1>Các bài đã làm xong  </h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên chủ đề</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {dataanswer.map((item)=>(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><Link to={"/result/"+item.id} >Xem chi tiết</Link>  </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default Answers;