import react from "react"
import { useState,useEffect } from "react"
const Game  =()=>{
    const [words,setWords] =useState('');
    const [value,setValue]   =useState('');
    const [score,setScore] =useState(0);
    const [err,setErr] =useState('');
    const [success,setSuccess] =useState('');
    const [question,setQuestion] =useState('');
    
    useEffect(()=>{
        wordGenerator()
    },[])
    const wordGenerator=()=>{

    }
    const reset=()=>{}
    const check =()=>{}
    const QUESTIONS =[];
    const ANSWERS =[];
    return(
        <>
        {/* <div>
        <p className="game.Game_score">{score}</p>
    {question ? (
        <p className="game.Game_questions">{question}</p>
    ):null
    }
    {
        err ? (
            <p className="game.Game_err">{err
            }</p>
        ):null
    }
    {
        success ? (
            <p className="game.Success">
                {success}
            </p>
        )
        :null
        }
        </div>
        <input
        value={value}
onChange={(e)=>setValue(e.target.value)}

className="game.input"
placeholder="enter the answer here"
/>
<button onClick={reset}>Reset</button>
<button onClick={check}>Enter</button>
        </> */}
        <div>
        <p>{score}</p>
    {question ? (
        <p >{question}</p>
    ):null
    }
    {
        err ? (
            <p >{err
            }</p>
        ):null
    }
    {
        success ? (
            <p >
                {success}
            </p>
        )
        :null
        }
        </div>
        <input
        value={value}
onChange={(e)=>setValue(e.target.value)}

className="game.input"
placeholder="enter the answer here"
/>
<button onClick={reset}>Reset</button>
<button onClick={check}>Enter</button>
{}

        </>

    )
}
export default Game