import { Category, CategoryHTTPRequestModel } from "../types/category";
import { HttpClient } from "./httpClient";

export class CategoryService extends HttpClient {
    public constructor() {
        super("http://localhost:5000");
    }

    public getAll = () => this.instance.get<Category[]>("/api/Category");

    public getById = (id : number) => this.instance.get<Category>(`/api/Category/${id}`);

    public add = (body: CategoryHTTPRequestModel) => this.instance.post<Category>("/api/Category", body);

    public delete = (id: number) => this.instance.delete(`/api/Category/${id}`);

    public edit = (id: number, body: CategoryHTTPRequestModel) => this.instance.put(`api/Category/${id}`, body);
}