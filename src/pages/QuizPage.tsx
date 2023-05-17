import styled from "styled-components";
import { connect } from "react-redux";

// Components
import QuizContainer from "../components/quiz/QuizContainer";

const QuizPage = () => {
    return (
        <QuizWrapperr>
            <QuizContainer/>
        </QuizWrapperr>
    );
}

const QuizWrapperr = styled.div`
    min-height: 100Vh;
    width: 100%;
`

export default QuizPage;