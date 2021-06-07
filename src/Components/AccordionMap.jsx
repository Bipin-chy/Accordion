import React, {useState} from 'react';
import Accordion from './Accordion';
import questions from './Data';

const AccordionMap = () => {
    const [data, setdata] = useState(questions);
    return (
        <>
        <div className="accordion_section">

            <h2>React Interview Questions</h2>
            {
                data.map( items => {
                    return <Accordion key ={items.id}  {...items}/>
})
            }
            </div>
        </>
    )
}

export default AccordionMap
