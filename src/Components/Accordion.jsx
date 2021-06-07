import React,{useState} from 'react';
import './styles.css';

const Accordion = ({question,answer}) => {
    const [show, setshow] = useState(false)
    return (
        <div>
            <div className="accordion">
                <h4 onClick={()=> {setshow(!show)}}> <span> {show ? "-" : "+" } </span></h4>
                <h4>{question}</h4>
            </div>
            <div style={{textAlign:"justify"}}>
                {show && 
                <div style={{padding:"10px"}}>
                    {answer}
                </div>}
            </div>

        </div>
    )
}

export default Accordion
