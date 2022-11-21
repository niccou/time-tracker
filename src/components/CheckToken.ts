import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const useCheckToken = (navigateToPrivate: string = "/home", navigateToLogin: string = "/login") => {
    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate(navigateToPrivate)
        }

        if (!authToken) {
            navigate(navigateToLogin)
        }
    },)
}