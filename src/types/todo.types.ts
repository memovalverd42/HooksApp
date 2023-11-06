export interface Todo {
    id: number;
    todo: string;
    done: boolean;
}

export type Actions = 
    | { type: 'add', payload: string }
    | { type: 'toggle', payload: number }