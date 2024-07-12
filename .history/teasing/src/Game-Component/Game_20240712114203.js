import react from "react"
import { useState,useEffect } from "react"
const Game  =()=>{
    const [words,setWords] =useState('');
    const [value,setValue]   =useState('');
    const [score,setScore] =useState(0);
    const [err,setErr] =useState('');
    const [status ,setStatus] =useState('');
    useEffect(()=>{
        wordGenerator()
    },[])
    const wordGenerator=()=>{

    }
    const reset=()=>{}
    const check =()=>{}
    const QUESTIONS =[];
    const 
    return(
        <>
        </>
    )
}
export default Game