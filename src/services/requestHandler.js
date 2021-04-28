import axios from 'axios'
// import route r from '../router'

export class RequestHandler {
    constructor(){
        
        this.apiClient = axios.create({
        baseURL: 'http://127.0.0.1:8000/api'
        });
     
    }
}

