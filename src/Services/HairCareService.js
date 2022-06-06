import axios from 'axios';

const HAIRCARE_API_BASE_URL ="http://localhost:8080/api/v6/hairCare";
const IMAGE_API_BASE_URL ="http://localhost:8080/api/upload/image";

class HairCareService{
  /*    axios=({
        url:"http://localhost:8080/api/upload/image",
        method:"post",
    }).then(res => {
        console.log(res)
    });*/
 
    getHairCare(){
        return axios.get(HAIRCARE_API_BASE_URL);

    }
    createHairCare(hairCare){
        return axios.post(HAIRCARE_API_BASE_URL, hairCare);
    }
    
    getHairCareById(hairCareId){
        return axios.get(HAIRCARE_API_BASE_URL + '/' + hairCareId);
    }
    updateHairCare(hairCare, hairCareId){
        return axios.put(HAIRCARE_API_BASE_URL + '/' + hairCareId, hairCare);

    }
    deleteHairCare(hairCareId){
        return axios.delete(HAIRCARE_API_BASE_URL + '/' + hairCareId);

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
export default new HairCareService()