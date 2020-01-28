import axios from "axios";

export const axiosWithAuth = () => {
    axios.create({
        baseUrl: "http://localhost:5000/api/",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token");
        }
    })
}