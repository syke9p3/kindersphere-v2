export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

interface Student {
    id: number;
    name: string;
    email: string;
    age: number;
    sex: "Male" | "Female";
    class: string;
}


export interface Post {
    id: number,
    title: string,
    content: string,
    created_at: string,
    user: User;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
