import { Book } from "../types/Book";
import { HttpClient } from "./httpClient";

export class BookService extends HttpClient {
    public constructor() {
        super("http://localhost:5000");
    }

    public getAll = () => this.instance.get<Book[]>("/api/Book");

    public getById = (id : number) => this.instance.get<Book>(`/api/Book/${id}`);

    // public add = () => this.instance.posts
}