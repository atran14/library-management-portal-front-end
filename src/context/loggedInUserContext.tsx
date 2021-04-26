import { createContext } from "react";
import { User } from "../shared/types/user";

interface LoggedInUserContextType {
    loggedInUser: User;
    setLoggedInUser: (u: User) => void;
}

export const guestUser : User = {
    role: "Guest"
}

export const defaultInitialLoggedInUserContext : LoggedInUserContextType = {
    loggedInUser: guestUser,
    setLoggedInUser: () => {}
}

export const loggedInUserContext = createContext<LoggedInUserContextType>(defaultInitialLoggedInUserContext);