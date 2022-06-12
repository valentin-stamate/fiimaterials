export interface Class {
    count: number;
    name: string;
    short: string;
    credits: number

    materials: string;
    password: string;
    site: string;

    year: number;
    semester: number;

    type: number;
}

export interface Feedback {
    name: string;
    feedback: string;
    response: string;

    solved: boolean;
    createdAt: Date;
}

export enum ClassType {
    NORMAL= 1,
    OPTIONAL_1 = 2,
    OPTIONAL_2 = 3,
    OPTIONAL_3 = 4,
    FACULTY = 5,
}

export class FeedbackUtil {
    static checkFeedback(feedback: Feedback) {
        if (feedback.name === undefined || feedback.feedback === undefined) {
            return false;
        }

        if (feedback.feedback.length < 10) {
            return false;
        }

        return true;
    }
}