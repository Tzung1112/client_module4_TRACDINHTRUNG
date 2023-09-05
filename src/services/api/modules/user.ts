import axios from "axios";


export default {
    register: async (newUser: any) => {
        return await axios.post(import.meta.env.VITE_SV_HOST + "users", newUser)
    },
    login: async (data: any) => {
       return await axios.post(import.meta.env.VITE_SV_HOST + "users/login", data)
    },

    authentication: async () => {
        return await axios.get(import.meta.env.VITE_SV_HOST + "auth")
    },
    resend: async (data: any) => {
        return await axios
            .get(`${process.env.REACT_APP_SERVER_HOST_API}/users/resend`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => res)
            .catch((err) => err);
    },
    changePassword: async (data: any) => {
        return await axios
            .post(
                `${process.env.REACT_APP_SERVER_HOST_API}/users/change-password`,
                data,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )
            .then((res) => res)
            .catch((err) => err);
    },
    find: async () => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/users`);
    },
};