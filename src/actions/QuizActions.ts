import { Action } from "../enums/ActionsEnums";

export const deleteItem = (id: number) => {
    return {
        type: Action.DELETE,
        id
    }
}

export const addItem = (payload?: any) => {
    return {
        type: Action.ADD,
        payload
    }
}

export const deleteQuiz = () => {
    return {
        type: Action.DELETE_QUIZ,
    }
}

export const addQuiz = (payload?: any) => {
    return {
        type: Action.ADD_QUIZ,
        payload
    }
}

export const addQuizView = (payload?: any) => {
    return {
        type: Action.ADD_QUIZ_VIEW,
        payload
    }
}

export const editQuestion = (payload?: any) => {
    return {
        type: Action.EDIT_QUESTION,
        payload
    }
}

export const addScore = (payload?: any) => {
    return {
        type: Action.ADD_SCORE,
        payload
    }
}