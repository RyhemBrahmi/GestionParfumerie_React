import axios from 'axios';

const SKINCARE_API_BASE_URL ="http://localhost:8080/api/v5/skinCare";
const IMAGE_API_BASE_URL ="http://localhost:8080/api/upload/image";

class SkinCareService{
  /*    axios=({
        url:"http://localhost:8080/api/upload/image",
        method:"post",
    }).then(res => {
        console.log(res)
    });*/
 
    getSkinCare(){
        return axios.get(SKINCARE_API_BASE_URL);

    }
    createSkinCare(skinCare){
        return axios.post(SKINCARE_API_BASE_URL, skinCare);
    }
    
    getSkinCareById(skinCareId){
        return axios.get(SKINCARE_API_BASE_URL + '/' + skinCareId);
    }
    updateSkinCare(skinCare, skinCareId){
        return axios.put(SKINCARE_API_BASE_URL + '/' + skinCareId, skinCare);

    }
    deleteSkinCare(skinCareId){
        return axios.delete(SKINCARE_API_BASE_URL + '/' + skinCareId);

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
export default new SkinCareService()