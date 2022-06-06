import axios from 'axios';

const BEAUTYHAIR_API_BASE_URL ="http://localhost:8080/api/v4/beautyHair";
const IMAGE_API_BASE_URL ="http://localhost:8080/api/upload/image";

class BeautyHairService{
  /*    axios=({
        url:"http://localhost:8080/api/upload/image",
        method:"post",
    }).then(res => {
        console.log(res)
    });*/
 
    getBeautyHair(){
        return axios.get(BEAUTYHAIR_API_BASE_URL);

    }
    createBeautyHair(beautyHair){
        return axios.post(BEAUTYHAIR_API_BASE_URL, beautyHair);
    }
    
    getBeautyHairById(beautyHairId){
        return axios.get(BEAUTYHAIR_API_BASE_URL + '/' + beautyHairId);
    }
    updateBeautyHair(beautyHair, beautyHairId){
        return axios.put(BEAUTYHAIR_API_BASE_URL + '/' + beautyHairId, beautyHair);

    }
    deleteBeautyHair(beautyHairId){
        return axios.delete(BEAUTYHAIR_API_BASE_URL + '/' + beautyHairId);

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
export default new BeautyHairService()