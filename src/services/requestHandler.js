import axios from 'axios'
// import route r from '../router'

export class RequestHandler {
    constructor(){
        
        this.apiClient = axios.create({
            baseURL: 'https://api.flowlence.rs/api'
        });
     
    }
}

