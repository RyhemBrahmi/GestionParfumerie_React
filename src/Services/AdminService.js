import axios from 'axios';

class AdminService {
    

    getUserByUsernamePassword(admin){
        return axios.post("http://localhost:8080/api/v7/get-by-username", admin);
    }
     
    
}
export default new AdminService()