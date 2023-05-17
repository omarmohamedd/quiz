import { combineReducers } from "redux";

// Reducers
import quizReducer, { tempQuizReducer, questionEditReducer, scoreReducer } from "./QuizesReducer";
import { formAuthReducer } from "./FormReducer";

const rootReducer = combineReducers({
    quizes: quizReducer,
    isFormAuthorized: formAuthReducer,
    tempQuiz: tempQuizReducer,
    editedQuestion: questionEditReducer,
    score: scoreReducer
});

export default rootReducer;