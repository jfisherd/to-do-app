import React, { type Context } from "react";
import type { ToDo } from "../types/types";

export const ToDoContext: Context<ToDo[]> = React.createContext([] as ToDo[]);

