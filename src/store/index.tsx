import { createContext, useContext } from "react";
import { AppStore } from "./AppStore";

export const appStoreContext = createContext({
    appStore: new AppStore()
})

export const useStore = ()=>useContext(appStoreContext)