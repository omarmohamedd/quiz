import styled from "styled-components";
import { connect } from "react-redux";
import { editQuestion, deleteItem, addScore } from "../../actions/QuizActions";
import { useState } from "react";

const QuestionCard = (props: any) => {
    const [feed, setFeed] = useState("");

    const getAnswers = () => {
        return props.question?.answers?.map((answer: any, index: number) => {
            return <button onClick = { (e: any) => selectAnswer(e, answer, props.question?.feedback_true, props.question?.feedback_false) } key={answer.answer + index}>{answer.answer}</button>
        })
    }

    const selectAnswer = (e: any, data: any, trueFeed: string, falseFeed: string) => {
        if (!props.isFormAuthorized) {
          const buttons = e.currentTarget.parentElement.querySelectorAll("button");
      
          buttons.forEach((button: any) => {
            button.classList.remove("selected");
          });
          
          e.target.classList.add("selected");
          if(data.isTrue) {
              setFeed(trueFeed)
          }

          else  {
            setFeed(falseFeed)
        }

          props.addScore({
            id: props.question?.id,
            value: data.isTrue
          })
          
        }
      };

    return (
        <CardWrapper>
            <h3>{props.question.question}</h3>
            <div className="answers-container">
                {getAnswers()}
                <p className="feed">{feed}</p>
            </div>
            {
                props.isFormAuthorized &&
                <button onClick={() => { props.editQuestion(props.question); props.deleteItem(props.question.id) }} className="edit-question">Edit</button>
            }
        </CardWrapper>
    );
}

const CardWrapper = styled.div`
   height: auto;
   width: calc(100% - 5%);
   border: solid 1px #37ADB2;
   border-radius: 10px;
   padding: 15px;
   box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   h3 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
   }
   .answers-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    button {
      flex-basis: 35%;
      height: 40px;
      padding: 0 15px;
      border: none;
      background-color: #37adb2;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      &:focus,
        &.selected {
        background-color: green;
        }

        &:not(:focus):not(.selected) {
        background-color: #37adb2;
        }
    }
  }
  .edit-question {
    align-self: center;
    margin-top: 20px;
    width: fit-content;
    height: auto;
    padding: 0 15px;
    border: none;
    background-color: #2f7779;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    padding: 8px 16px;
  }
  .feed {
    position: absolute;
    right: 5%;
    top: 10%;
  }
`

const mapStateToProps = (state: any) => {
    return {
        isFormAuthorized: state.isFormAuthorized,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        editQuestion: (payload: any) => dispatch(editQuestion(payload)),
        deleteItem: (id: number) => dispatch(deleteItem(id)),
        addScore: (payload: any) => dispatch(addScore(payload))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);