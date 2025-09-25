export interface FormData {
    email: string;
    name: string;
    subject: string;
    message: string;
}

export type FormResponse = {
    success: boolean;
    message: string;
};