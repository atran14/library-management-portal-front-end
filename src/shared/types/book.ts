export interface Book {
    id: number;
    name: string;
    categoryId: number;
    category: string;
    authors: string;
    description: string;
}

export interface BookHTTPRequestModel {
    name: string;
    categoryId: number;
    authors?: string;
    description?: string;
}