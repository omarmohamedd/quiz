import { Action } from "../enums/ActionsEnums";



const tempQuizState: any = {
        id: "",
        title: "",
        description: "",
        questions: []
}

const quizReducer = (state = [], action: any) => {
    if (action.type === Action.ADD_QUIZ) {
        const newQuiz = action.payload;
        const existingQuizIndex = state.findIndex((quiz: any) => quiz.id === newQuiz.id);

        if (existingQuizIndex !== -1) {
            const updatedState: any = [...state];
            updatedState[existingQuizIndex] = newQuiz;
            return updatedState;
        } else {
            return [...state, newQuiz];
        }
    }

    return state;
};


export const questionEditReducer = (state = {}, action: any ) => {
    if(action.type === Action.EDIT_QUESTION) {
        return state = action.payload;
    }

    return state;
}

export const tempQuizReducer = (state: any = tempQuizState, action: any) => {
    if (action.type === Action.ADD) {
        const { title, question, description, feedback_true, feedback_false, answers } = action.payload;

        let updatedState = { ...state };

        if (title !== "") {
            updatedState = { ...updatedState, title, id: title };
        }

        if (description !== "") {
            updatedState = { ...updatedState, description };
        }

        const existingQuestion = state.questions.find((q: any) => q.question === question);
        if (existingQuestion) {
            return state;
        }

        const newQuestion = {
            id: question,
            question,
            answers,
            feedback_true,
            feedback_false,
        };

        if (question !== "") {
            const updatedQuestions = [...state.questions, newQuestion];
            updatedState = { ...updatedState, questions: updatedQuestions };
        }

        return updatedState;
    }

    if(action.type === Action.DELETE_QUIZ) {
        return state = {
            id: "",
            title: "",
            description: "",
            questions: [
            ]
        };
    }

    if(action.type === Action.DELETE) {
        const questionId = action.id;
        const updatedQuestions = state.questions.filter((q: any) => q.id !== questionId);
        return {
            ...state,
            questions: updatedQuestions
        };
    }

    if(action.type === Action.ADD_QUIZ_VIEW) {
        return state = action.payload;
    }

    return state;
};

export const scoreReducer = (state: any = {}, action: any) => {
    if (action.type === Action.ADD_SCORE) {
      const { id, value } = action.payload;
  
      return {
        ...state,
        [id]: value
      };
    }
  
    return state;
  };
  




export default quizReducer;

