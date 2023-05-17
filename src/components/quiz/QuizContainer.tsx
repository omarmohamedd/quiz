import styled from "styled-components";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components
import QuestionCard from "./QuestionCard";
import { addQuiz, deleteQuiz } from "../../actions/QuizActions";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setFormIsAuth } from "../../actions/FormActions";

const QuizContainer = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    const getQuizData = (key: string) => {
            switch (key) {
                case "title":
                    return props.tempQuiz[key];
                case "description":
                    return props.tempQuiz[key]
                case "questions":
                    return getQuestion(props.tempQuiz[key])
                default:
                    break;
            }
    }

    const getQuestion = (questions: any) => {
        return questions.map((question: any, index: number) => {
            return <QuestionCard key = {question.question + index} question = { question }/>
        })
    }

    const sumbitQuiz = () => {
        if(props.isFormAuthorized) {
            props.addQuiz(props.tempQuiz); 
            setIsOpen(!isOpen); props.deleteQuiz() 
        }
        else {
            alert(`Score = ${calculateScore(props.score).trueCount} / ${props.tempQuiz.questions.length}`)
            navigate("/")
        }

        return;
    }

    const calculateScore = (scores: any) => {
        let trueCount = 0;
        let falseCount = 0;
      
        for (const key in scores) {
          if (scores.hasOwnProperty(key)) {
            if (scores[key] === true) {
              trueCount++;
            } else {
              falseCount++;
            }
          }
        }
      
        return {
          trueCount,
          falseCount,
        };
      };      

    return (
        <QuizWrapper>
            <h3>{ getQuizData("title") }</h3>
            <p> { getQuizData("description") } </p>
            <div className="cards-container">
                { getQuizData("questions") }
            </div>
            <SumbitQuizBtn onClick={sumbitQuiz}>
                Submit quiz
            </SumbitQuizBtn>
            {
                isOpen &&
                <div className="user-select-wrapper">
                    <Link to = {"/"}>
                        <button onClick={ () => props.setFormIsAuth(false) }> Continue as a user</button>
                    </Link>
                    <Link to = {"/admin"}>
                        <button> Continue as an admin</button>
                    </Link>
                    <button onClick={()=> setIsOpen(false)}>Stay here</button>
                </div>
            }
        </QuizWrapper>
    );
}

const QuizWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    padding: 30px;
    position: relative;
    padding-bottom: 80px;
    h3 {
        color: rgba(0, 0, 0, 0.9);
        font-size: 34px;
        font-weight: 700;
    }
    p {
        padding-top: 15px;
        color: rgba(0, 0, 0, 0.9);
        font-size: 16px;
        font-weight: 500;
    }
    .cards-container {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .user-select-wrapper {
        height: auto;
        width: 80%;
        position: relative;
        left: 50%;
        top: 50%;
        padding: 40px;
        transform: translateX(-20%);
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 99999;
        border-radius: 10px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user-select-wrapper button {
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .user-select-wrapper button:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .user-select-wrapper button:not(:last-child) {
        margin-right: 10px;
    }

`

const SumbitQuizBtn = styled.button`
    position: absolute;
    bottom: 15px;
    right: 15px;
    background-color: #36A9AE;
    background-image: linear-gradient(#37ADB2, #329CA0);
    border: 1px solid #2A8387;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    font-size: 17px;
    line-height: 100%;
    margin: 0;
    outline: 0;
    padding: 11px 15px 12px;
    text-align: center;
    transition: box-shadow .05s ease-in-out,opacity .05s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    width: fit-content;
    margin-top: 30px;

    &:hover {
        box-shadow: rgba(255, 255, 255, 0.3) 0 0 2px inset, rgba(0, 0, 0, 0.4) 0 1px 2px;
        text-decoration: none;
        transition-duration: .15s, .15s;
    }

    &:active {
        box-shadow: rgba(0, 0, 0, 0.15) 0 2px 4px inset, rgba(0, 0, 0, 0.4) 0 1px 1px;
    }

`

const mapStateToProps = (state: any) => {
    return {
        tempQuiz: state.tempQuiz,
        isFormAuthorized: state.isFormAuthorized,
        score: state.score
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addQuiz: (payload: any) => dispatch(addQuiz(payload)),
        deleteQuiz: () => dispatch(deleteQuiz()),
        setFormIsAuth: (isTrue: boolean) => dispatch(setFormIsAuth(isTrue)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);