export interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    DOB?: Date;
    role: 'Guest' | 'NormalUser' | 'PowerUser';
}