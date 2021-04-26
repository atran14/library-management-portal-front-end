import { Book } from "../types/book";
import { User } from "../types/user";
import { UserLoginFormModel } from "../types/userLoginFormModel";
import { HttpClient } from "./httpClient";

export class AuthenticationService extends HttpClient {
    public constructor() {
        super("http://localhost:5000");
    }

    public login = (body : UserLoginFormModel) => this.instance.post<User>("/login", body);

    public logout = () => this.instance.put("/logout");

}