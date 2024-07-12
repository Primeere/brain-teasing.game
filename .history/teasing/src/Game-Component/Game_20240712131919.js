import react from "react"
import { useState,useEffect } from "react"
import { useCallback } from "react";
import { QUESTION } from "./Questions";
import { ANSWERS } from "./Questions";
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
        var randomNumber  =Math.floor(Math.random() * ANSWERS.length);
        setWords(ANSWERS[randomNumber])
        setQuestion(QUESTION[randomNumber])
    }
    const reset=()=>{
        setValue(null)
        ;
        setErr(null)
        setSuccess(null);
        wordGenerator()
    }
    const check =()=>{
        if(value){
            if(value.toLowerCase === words.toLowerCase())
                {
                        setValue(''); 
                        console.log("logging")
        setErr(null); 
        setSuccess('Correct Answer'); 
        setScore((prevScore) => prevScore + 1); 
        wordGenerator(); 
                    }
             
                
            else{
                setErr(
                    "incorrect answer"
                )
                setSuccess(null);
                setScore((prevscore)=>prevscore-1)
                setValue('')
                wordGenerator()
            }
        }
            else{
                setErr("enter the value ");
                console.log("mao")
                setSuccess(null)
            }
    
       
    }
    // const QUESTIONS =[];
    // const ANSWERS =[];
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
{value}
</>

    )
}
export default Game