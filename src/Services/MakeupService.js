import axios from 'axios';

const MAKEUP_API_BASE_URL ="http://localhost:8080/api/v3/makeup";
const IMAGE_API_BASE_URL ="http://localhost:8080/api/upload/image";

class MakeupService{
  /*    axios=({
        url:"http://localhost:8080/api/upload/image",
        method:"post",
    }).then(res => {
        console.log(res)
    });*/
 
    getMakeup(){
        return axios.get(MAKEUP_API_BASE_URL);

    }
    createMakeup(makeup){
        return axios.post(MAKEUP_API_BASE_URL, makeup);
    }
    
    getMakeupById(makeupId){
        return axios.get(MAKEUP_API_BASE_URL + '/' + makeupId);
    }
    updateMakeup(makeup, makeupId){
        return axios.put(MAKEUP_API_BASE_URL + '/' + makeupId, makeup);

    }
    deleteMakeup(makeupId){
        return axios.delete(MAKEUP_API_BASE_URL + '/' + makeupId);

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
export default new MakeupService()