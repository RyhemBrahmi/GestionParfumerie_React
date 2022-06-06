import axios from 'axios';

const PARFUMS_API_BASE_URL ="http://localhost:8080/api/v2/parfumsHomme";
const IMAGE_API_BASE_URL ="http://localhost:8080/api/upload/image";

class ParfumsHommeService{
  /*    axios=({
        url:"http://localhost:8080/api/upload/image",
        method:"post",
    }).then(res => {
        console.log(res)
    });*/
 
    getParfumsHomme(){
        return axios.get(PARFUMS_API_BASE_URL);

    }
    createParfumsHomme(parfumsHomme){
        return axios.post(PARFUMS_API_BASE_URL, parfumsHomme);
    }
    
    getParfumsHommeById(parfumsHommeId){
        return axios.get(PARFUMS_API_BASE_URL + '/' + parfumsHommeId);
    }
    updateParfumsHomme(parfumsHomme, parfumsHommeId){
        return axios.put(PARFUMS_API_BASE_URL + '/' + parfumsHommeId, parfumsHomme);

    }
    deleteParfumsHomme(parfumsHommeId){
        return axios.delete(PARFUMS_API_BASE_URL + '/' + parfumsHommeId);

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
export default new ParfumsHommeService()