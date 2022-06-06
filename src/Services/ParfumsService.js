import axios from 'axios';

const PARFUMS_API_BASE_URL ="http://localhost:8080/api/v/parfumsFemme";
const IMAGE_API_BASE_URL ="http://localhost:8080/api/upload/image";

class ParfumsService{
  /*    axios=({
        url:"http://localhost:8080/api/upload/image",
        method:"post",
    }).then(res => {
        console.log(res)
    });*/
 
    getParfums(){
        return axios.get(PARFUMS_API_BASE_URL);

    }
    createParfums(parfums){
        return axios.post(PARFUMS_API_BASE_URL, parfums);
    }
    
    getParfumsById(parfumsId){
        return axios.get(PARFUMS_API_BASE_URL + '/' + parfumsId);
    }
    updateParfums(parfums, parfumsId){
        return axios.put(PARFUMS_API_BASE_URL + '/' + parfumsId, parfums);

    }
    deleteParfums(parfumsId){
        return axios.delete(PARFUMS_API_BASE_URL + '/' + parfumsId);

    }
    /* */
    uploadImage(baseImage)
    {
        return axios.post(IMAGE_API_BASE_URL, baseImage);
    }
    /*   return axios.post(IMAGE_API_BASE_URL, baseImage);  */
    

    testUpload()
    {
        return axios.get("http://localhost:8080/api/upload/helloworld");
    }
    
}
export default new ParfumsService()