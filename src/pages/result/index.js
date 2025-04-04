import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getanswerr } from "../../services/answerservice";
import { getquestion } from "../../services/questionservice";
import "./result.css"

function Result() {
    const params = useParams();
    const [data, setdata] = useState([]);
    const [score, setScore] = useState(0);
    
    useEffect(() => {
        const fetchapi = async () => {
            const dataansers = await getanswerr(params.id);
            const dataquestions = await getquestion(dataansers.topicId);
            let resultfinal = [];
            let correctCount = 0;
            
            for (let i = 0; i < dataquestions.length; i++) {
                const userAnswer = dataansers.answers.find(item => item.questionId == dataquestions[i].id);
                
                if (userAnswer && dataquestions[i].correctAnswer === userAnswer.answer) {
                    correctCount++;
                }
                
                resultfinal.push({
                    ...dataquestions[i],
                    ...userAnswer
                });
            }
            
            setdata(resultfinal);
            setScore(correctCount); 
        }
        fetchapi();
    }, [])

    return (
        <>
           <h1>Kết quả: </h1>
           <div className="score-display">
               Điểm: {score}/{data.length}
           </div>
           
            <div className="result__list">
                {data.map((item, index) => (
                    <div key={item.id} className="result__item">
                        <h4>Câu {index + 1}: {item.question}
                        {item.correctAnswer === item.answer ? (
                            <span className="result__tag result__tag--true"> Đúng</span>
                        ) : (
                            <span className="result__tag result__tag--false"> Sai</span>
                        )}
                        </h4>
                        {item.answers.map((itemm, indexx) => {
                            let className = "";
                            let checked = false;
                            
                            if (item.answer === indexx) {
                                className = "result__item--selected";
                                checked = true;
                            }
                            
                            if (item.correctAnswer === indexx) {
                                className += " result__item--result";
                            }
                            
                            return (
                                <div className="result__answers" key={indexx}>
                                    <input type="radio" checked={checked} disabled/>
                                    <label className={className}>{itemm}</label>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className="link"><NavLink to="/topic">Làm bài lại</NavLink></div>
        </>
    )
}

export default Result;