import { setFormIsAuth } from "../actions/FormActions";
import { addItem, deleteQuiz } from "../actions/QuizActions";

export default interface QuizListInterface {
    isAdmin?: boolean;
    setFormIsAuth?: (isTrue: boolean) => ReturnType<typeof setFormIsAuth>;
    addItem?: (payload: any) => ReturnType<typeof addItem>;
    deleteQuiz?: () => ReturnType<typeof deleteQuiz>;
    quizes?: any;
}

