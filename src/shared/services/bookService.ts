import { Book, BookHTTPRequestModel } from "../types/book";
import { HttpClient } from "./httpClient";

export class BookService extends HttpClient {
    public constructor() {
        super("http://localhost:5000");
    }

    public getAll = () => this.instance.get<Book[]>("/api/Book");

    public getById = (id : number) => this.instance.get<Book>(`/api/Book/${id}`);

    public add = (body : BookHTTPRequestModel) => this.instance.post<Book>('/api/Book', body);
}