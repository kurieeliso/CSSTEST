import React, {useState} from 'react'
import {Question} from "./components/Question"
import {Result} from "./components/Result"
import {Start} from "./components/Start"
import './App.css'
import store from './state/store'
import {BrowserRouter, Route} from "react-router-dom"

function App() {

    let [answer, setAnswer] = useState(0)
    let [flag, setFlag] = useState(0)
    let [result, setResult] = useState(0)

    const getAnswer = (event) => {
        if (event.target.value === 'yes') {
            if (flag === 0) {
                setAnswer(answer + 1)
                setFlag(flag + 1)
            } else {
                setAnswer(answer)
            }
        } else {
            if (flag !== 0) {
                setAnswer(answer - 1)
                setFlag(flag - 1)
            } else {
                setAnswer(answer)
            }
        }
    }

    const getReset = () => {
        setAnswer(0)
        setFlag(0)
        setResult(result + answer)
    }

    const getResult = () => {
        setAnswer(0)
        setFlag(0)
        setResult(0)
    }

    let questionsArray = store.questions.map((elem) =>
        <Question
            questionNumber={elem.questionNumber}
            question={elem.question}
            var1={elem.var1}
            var2={elem.var2}
            var3={elem.var3}
            value1={elem.value1}
            value2={elem.value2}
            value3={elem.value3}
            path={elem.path}
            link={elem.link}
            next={elem.next}
            getReset={getReset}
            getAnswer={getAnswer}
        />
    )

    return (
        <BrowserRouter>
            <div className="container">
                <h1 className="title">CSS TEST</h1>
                <Route exact path="/"><Start /></Route>
                {questionsArray}
                <Route exact path="/result"><Result getResult={getResult} result={result} /></Route>
            </div>
        </BrowserRouter>
    )
}

export default App