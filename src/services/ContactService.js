
import { AxiosHelper } from '../helpers/AxiosHelper';


const SendMail = async (formData) => {
    return AxiosHelper.post('/Contact/SendMail', formData);
}


const ContactService = {
    SendMail
}

export default ContactService;