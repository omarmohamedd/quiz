import { Action } from "../enums/ActionsEnums";

export const setFormIsAuth = (isTrue:  boolean) => {
    return {
        type: Action.ISAUTH,
        payload: isTrue
    }
}