import { createContext, useContext } from "react";
import { GlobalState } from "../types";

const initialGlobalState: GlobalState = {};
export const globalState = createContext<GlobalState>(initialGlobalState);

export const useGlobalState = () => useContext(globalState);