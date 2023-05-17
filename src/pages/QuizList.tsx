import styled from "styled-components";
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

// Interfaces
import QuizListInterface from "../interfaces/QuizListInterface";

// Assets
import addButton from "../assets/add-button.json";

// Actions
import { deleteItem, deleteQuiz } from "../actions/QuizActions";
import { setFormIsAuth } from "../actions/FormActions";

// components
import QuizCard from "../components/quiz/QuizCard"; 


// Dynamically import Lottie
const Lottie = React.lazy(() => import("lottie-react"));

const QuizList = (props: QuizListInterface) => {

    const addQuiz = () => {
        props.setFormIsAuth ? props.setFormIsAuth(true) : ""
        props.deleteQuiz ? props.deleteQuiz() : "";
    }

    const getQuizes = () => {
        return props.quizes.map((quiz: any, index: number) => {
            return <QuizCard key = { quiz + index} {...quiz}/>
        })
    }

    return (
        <Wrapper>
            <div className="header">
                <h1>{ props.isAdmin ? "Create or edit a Quiz" : "Start a new Quiz" }</h1>
                {
                    props.isAdmin &&
                        <div className="lottie-container">
                            <React.Suspense fallback={<></>}>
                                <Link to = { "/form" }>
                                    <Lottie animationData={addButton} loop={true} onClick={ () => addQuiz()}/>
                                </Link>
                            </React.Suspense>                       
                        </div>
                }

            </div>
            <div className="quizes-container">
               { getQuizes() }
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div `
    padding: 0px 30px;
    .header {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    h1 {
        color: rgba(0, 0, 0, 0.9);
        padding: 30px 0px;
        font-size: 50px;
    }
    .quizes-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        .card {
            width: 30%;
            height: 100px;
            background-color: red;
        }
    }
    .lottie-container {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`
const mapStateToProps = (state: any) => {
    return {
        quizes: state.quizes
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteItem: (id: number) => dispatch(deleteItem(id)),
        setFormIsAuth: (isTrue: boolean) => dispatch(setFormIsAuth(isTrue)),
        deleteQuiz: () => dispatch(deleteQuiz()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);