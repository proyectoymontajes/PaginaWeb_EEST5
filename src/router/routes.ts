import { lazy, LazyExoticComponent } from "react";

type JSXElement = () => JSX.Element

interface Route {
    path: string;
    element:  LazyExoticComponent<JSXElement> | JSXElement;

}

const routes: Route[] = [
    {
        path: "/",
        element: lazy( ()=> import("../pages/Home") ) 
    }
]

export default routes