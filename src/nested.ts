import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (question1: Question): Question => ({ ...question1 }),
    );
    const isPublish = deepCopy.filter(
        (one: Question): boolean => one.published,
    );
    return isPublish;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (question2: Question): Question => ({ ...question2 }),
    );
    const isNotEmpty = deepCopy.filter(
        (emptyQ: Question): boolean =>
            emptyQ.body !== "" ||
            emptyQ.expected !== "" ||
            emptyQ.options.length !== 0,
    );
    return isNotEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const deepCopy = questions.map(
        (question3: Question): Question => ({ ...question3 }),
    );
    const idQuestion = deepCopy.find((question) => question.id === id) || null;
    return idQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const deepCopy = questions.map(
        (question4: Question): Question => ({ ...question4 }),
    );
    const removeQ = deepCopy.filter(
        (noID: Question): boolean => noID.id !== id,
    );
    return removeQ;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const deepCopy = questions.map(
        (question5: Question): Question => ({ ...question5 }),
    );
    const onlyNames = deepCopy.map((nameQ: Question): string => nameQ.name);
    return onlyNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const deepCopy = questions.map(
        (question6: Question): Question => ({ ...question6 }),
    );
    const newSum = deepCopy.reduce(
        (total: number, question: Question): number => {
            return total + question.points;
        },
        0,
    );
    return newSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const deepCopy = questions.map(
        (question7: Question): Question => ({ ...question7 }),
    );
    const newSum = deepCopy.reduce(
        (total: number, question: Question): number => {
            return question.published ? total + question.points : total;
        },
        0,
    );
    return newSum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const deepCopy = questions.map(
        (question8: Question): Question => ({ ...question8 }),
    );
    const header = "id,name,options,points,published";
    const newRows = deepCopy.map((question) => {
        return [
            question.id,
            question.name,
            question.options.length,
            question.points,
            question.published,
        ].join(",");
    });
    return [header, ...newRows].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const deepCopy = questions.map(
        (question9: Question): Question => ({ ...question9 }),
    );
    return deepCopy.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false,
    }));
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (question10: Question): Question => ({ ...question10 }),
    );
    const isNowPublished = deepCopy.map((question: Question) => ({
        ...question,
        published: true,
    }));
    return isNowPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const deepCopy = questions.map(
        (question11: Question): Question => ({ ...question11 }),
    );
    const isFirst = deepCopy[0]?.type;
    return deepCopy.every((question) => question.type === isFirst);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const newBlank = makeBlankQuestion(id, name, type);
    return [...questions, newBlank];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const deepCopy = questions.map(
        (question13: Question): Question => ({ ...question13 }),
    );
    const newArr = deepCopy.map((question) =>
        question.id === targetId ? { ...question, name: newName } : question,
    );
    return newArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    const deepCopy = questions.map(
        (question14: Question): Question => ({ ...question14 }),
    );
    const newArr = deepCopy.map((question) =>
        question.id === targetId ?
            {
                ...question,
                type: newQuestionType,
                options:
                    newQuestionType === "multiple_choice_question" ?
                        question.options
                    :   [],
            }
        :   question,
    );
    return newArr;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    const deepCopy = questions.map(
        (question15: Question): Question => ({ ...question15 }),
    );
    const newArr = deepCopy.map((question) =>
        question.id === targetId ?
            {
                ...question,
                options:
                    targetOptionIndex === -1 ?
                        [...question.options, newOption]
                    :   question.options.map((option, index) =>
                            index === targetOptionIndex ? newOption : option,
                        ),
            }
        :   question,
    );
    return newArr;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const deepCopy = questions.map(
        (question15: Question): Question => ({ ...question15 }),
    );
    const target = deepCopy.findIndex((question) => question.id === targetId);
    const targetQ = deepCopy[target];
    const duplicatedQ = duplicateQuestion(newId, targetQ);
    const newArr1 = [
        ...deepCopy.slice(0, target + 1),
        duplicatedQ,
        ...deepCopy.slice(target + 1),
    ];
    return newArr1;
}
