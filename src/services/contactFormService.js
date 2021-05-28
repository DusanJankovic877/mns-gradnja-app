import { RequestHandler } from "./requestHandler";
class ContactFormService extends RequestHandler{
    async getContactFormData(payload){
        const email = payload.email;
        const name = payload.name;
        const telephone = payload.telephone;
        const message = payload.message;
        const response =  await this.apiClient.post('/mail', {email, name, telephone, message, withCredentials: true} )
       return response;
    }
}
const contactFormService = new ContactFormService();
export default contactFormService;