import axios from "axios";

export default {
    // Gets all hangs
    getHangs: function () {
        return axios.get("/api/hang");
    },
    // Gets the hang with the given id
    getHang: function (id) {
        return axios.get("/api/hang/" + id);
    },
    // Deletes the hang with the given id
    deleteHang: function (id) {
        return axios.delete("/api/hang/" + id);
    },
    // Saves a hang to the database
    saveHang: function (hangData) {
        return axios.post("/api/hang", hangData);
    }
};