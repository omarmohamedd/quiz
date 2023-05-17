import styled from "styled-components";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";

// Interfaces
import QuizFormInterface from "../interfaces/QuizFormInterface";

// Actions
import { deleteItem } from "../actions/QuizActions";

// Components
import FormFiller from "../components/FormFiller";
import QuizContainer from "../components/quiz/QuizContainer";

const QuizForm = (props: QuizFormInterface) => {
    return (
        props.isFormAuthorized 
            ?
                <FormContainer>
                    <h1>Quiz Form</h1>
                    <div className="quiz-container">
                        <QuizContainer/>
                    </div>
                    <FormFiller/>
                </FormContainer> 
            :
                <>
                    Not Authorized
                </>
        

    );
}

const FormContainer = styled.div`
    min-height: 100vh;
    padding: 0px 30px;
    padding-bottom: 30px;
    h1 {
        color: rgba(0, 0, 0, 0.9);
        padding: 30px 0px;
        font-size: 50px;
    }
    .quiz-container {
        width: calc(100% - 600px);
        height: auto;
    }
`

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        isFormAuthorized: state.isFormAuthorized
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        deletePost: (id: number) => dispatch(deleteItem(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);