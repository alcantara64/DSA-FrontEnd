import QuestionOption from "./QuestionOption";

export default interface Recommendation{
    id: number,
    name: string,
    questions: QuestionOption[],
    showLabel: boolean,
    sortOrder: number
}