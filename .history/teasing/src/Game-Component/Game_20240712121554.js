import react from "react"
import { useState,useEffect } from "react"
const Game  =()=>{
    const [words,setWords] =useState('');
    const [value,setValue]   =useState('');
    const [score,setScore] =useState(0);
    const [err,setErr] =useState('');
    const [status ,setStatus] =useState('');
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
        <div>
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
        s
    }
        </div>

        </>
    )
}
export default Game