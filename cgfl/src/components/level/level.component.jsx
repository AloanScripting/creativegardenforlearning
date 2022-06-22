import OpenBox from "../box/box.component";
import { Outlet } from 'react-router-dom';
import QUESTIONS from "../../questions";


const Level = () => {
    const mathQuestion = () => {
    
    const question = prompt('What is 2+2?');
    
        if(question === '4'){
            alert('Well Done. Correct answer');
        }
        else{
            alert('Sorry, incorrect, try again.');
        }
    };


        
    return(
        <div>
            
            <h1>Level Component</h1>
            <h1 onClick={mathQuestion}> Click me for a question!</h1>
            <OpenBox />
            <Outlet />
        </div>
    )
};

export default Level;