import { RequestHandler } from "./requestHandler";
class ContactFormService extends RequestHandler{
    async getContactFormData(payload){

       const response =  await this.apiClient.post('/mail', payload)
       return response;
    }
}
const contactFormService = new ContactFormService();
export default contactFormService;