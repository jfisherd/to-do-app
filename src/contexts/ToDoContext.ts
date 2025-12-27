import React from "react";
import type { ToDo } from "../types/types";

export const ToDoContext: ToDo[] = React.createContext([] as ToDo[]);

