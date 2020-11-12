import axios from "axios";

export default {
    // Gets all hangs
    getHangs: function () {
        return axios.get("/api/hangs");
    },
    // Gets the hang with the given id
    getHang: function (id) {
        return axios.get("/api/hangs/" + id);
    },
    // Deletes the hang with the given id
    deleteHang: function (id) {
        return axios.delete("/api/hangs/" + id);
    },
    // Saves a hang to the database
    saveHang: function (hangData) {
        return axios.post("/api/hangs", hangData);
    }
};