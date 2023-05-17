import { Action } from "../enums/ActionsEnums";

export const formAuthReducer = (state: boolean = false, action: any ) => {
    if(action.type == Action.ISAUTH) {
        return state = action.payload;
    }

    return state;
}
