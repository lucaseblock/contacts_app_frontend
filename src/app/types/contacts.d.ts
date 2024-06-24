export interface Contact {
    created_at: Date;
    id: number;
    last_name: string;
    name: string;
    phone: string;
    user_id: number;
}

export interface ContactForm {
    name: string;
    last_name?: string;
    phone: string;
}