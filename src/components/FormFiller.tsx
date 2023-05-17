import styled from "styled-components";
import { connect } from "react-redux";

// Actions
import { addItem } from "../actions/QuizActions";
import { useEffect, useState } from "react";


const FormFiller = (props: any) => {
    const [quizData, setQuizData] = useState({
        title: "",
        question: "",
        description: "",
        feedback_true: "",
        feedback_false: "",
        answers: []  as { answer: string; isTrue: boolean }[],
    });

    useEffect(() => {
        if (Object.keys(props.editedQuestion).length != 0) {
            setQuizData(props.editedQuestion)
          }
          
    }, [props.editedQuestion])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputName: string, index?: number) => {
        switch (inputName) {
            case "title":
            case "question":
            case "feedback_true":
            case "feedback_false":
            case "description":
                setQuizData((prevState) => ({
                  ...prevState,
                  [inputName]: event.target.value,
                }));
                break;
            case "answer":
            case "correct-answer":
                setQuizData((prevState) => {
                    const updatedAnswers = [...prevState.answers];
                    if (typeof index === "number" && index >= 0 && index < updatedAnswers.length) {
                        updatedAnswers[index] = {
                            ...updatedAnswers[index],
                            answer: event.target.value,
                        };
                    } 
                    else {
                        updatedAnswers.push({
                            answer: event.target.value,
                            isTrue: inputName == "correct-answer" ? true : false,
                        });
                    }
                    return {
                        ...prevState,
                        answers: updatedAnswers,
                    };
                });
                break;
            
                default:
                break;
        }
    }

    const getAnswerValue = (id: number) => {
        let value =  quizData.answers[id]?.answer || "";
        return value;
    }

    return (
        <FormWrapper>
            <h2> Add Quiz </h2>
            <div className="inputs-container">
                <div className="input-wrapper">
                    <span>Quiz Title: </span>
                    <input type="text" value = { quizData.title } onChange={ (e) => handleInputChange(e, "title") }/>
                </div>
                <div className="input-wrapper">
                    <span>True feedback: </span>
                    <input type="text" value = { quizData.feedback_true } onChange={ (e) => handleInputChange(e, "feedback_true") }/>
                </div>
                <div className="input-wrapper">
                    <span>False feedback: </span>
                    <input type="text" value = { quizData.feedback_false } onChange={ (e) => handleInputChange(e, "feedback_false") }/>
                </div>
                <div className="input-wrapper">
                    <span>Question: </span>
                    <input type="text" value = { quizData.question } onChange={ (e) => handleInputChange(e, "question") }/>
                </div>
                <div className="input-wrapper">
                    <span>Answer: </span>
                    <input type="text" value = { getAnswerValue(0) } onChange={ (e) => handleInputChange(e, "answer", 0) }/>
                </div>
                <div className="input-wrapper">
                    <span>Answer: </span>
                    <input type="text" value = { getAnswerValue(1) } onChange={ (e) => handleInputChange(e, "answer", 1) }/>
                </div>
                <div className="input-wrapper">
                    <span>Answer: </span>
                    <input type="text"  value = { getAnswerValue(2) } onChange={ (e) => handleInputChange(e, "answer", 2) }/>
                </div>
                <div className="input-wrapper">
                    <span>Correct Answer: </span>
                    <input type="text" value = { getAnswerValue(3) } onChange={ (e) => handleInputChange(e, "correct-answer", 3) }/>
                </div>
                <div className="input-wrapper">
                    <span>Description: </span>
                    <textarea id="w3review"  value = { quizData.description } name="w3review" rows = {4} cols = {50} onChange={ (e) => handleInputChange(e, "description") }/>
                </div>
            </div>
                <button onClick={() => {
                    props.addItem(quizData);
                    setQuizData({
                        title: "",
                        question: "",
                        description: "",
                        feedback_true: "",
                        feedback_false: "",
                        answers: [],
                    });
                }}>
                    Submit
                </button>
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    min-height: 640px;
    width: 550px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
    background-color: #3FB4A3;
    color: #f4f0f0;
    h2 {
        font-size: 30px;
        font-weight: 700;
    }
    .inputs-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 25px;
        input, textarea {
            border: solid 1px transparent;
            outline: none;
            color: rgba(0, 0, 0, 0.8);
            padding: 6px 12px;
        }
        input:focus, textarea:focus {
            background: #3FB4A3;
            border: solid 1px #f4f0f0;
        }
        .input-wrapper {
            display: flex;
            align-items: center;
            span {
                min-width: 130px;
            }
        }
    }
    button {
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
    }

    button:hover {
        box-shadow: rgba(255, 255, 255, 0.3) 0 0 2px inset, rgba(0, 0, 0, 0.4) 0 1px 2px;
        text-decoration: none;
        transition-duration: .15s, .15s;
    }

    button:active {
        box-shadow: rgba(0, 0, 0, 0.15) 0 2px 4px inset, rgba(0, 0, 0, 0.4) 0 1px 1px;
    }

`

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        tempQuiz: state.tempQuiz,
        editedQuestion: state.editedQuestion
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addItem: (payload: any) => dispatch(addItem(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFiller);