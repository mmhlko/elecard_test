import {TRoutes} from "pages/types";
import {HomePage} from "./home-page/HomePage";

export const RoutePath = {
    home: "/"
}

export const mainRoutes: TRoutes[] = [
    {path: RoutePath.home, element: <HomePage/>},
]