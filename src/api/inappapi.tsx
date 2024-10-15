import { navigate, resetAndNavigate } from "src/navigation/navigaionutils";
import { appAxios } from "./apiIntersepters"
import { port } from "./client"
import { Alert } from "react-native";
import { mmkyStroage } from "src/store/mmkv";


export const getReelDataApi = async (reelId :string,deepLinkType : string) => {
     try {

        const {data} = await appAxios.post(`/public/song`, {
          songId : reelId
        });

        const createData = {
            title : data?.title,
            image : data?.thumbnail?.secure_url || 'https://cdn.pixabay.com/photo/2016/05/24/22/54/icon-1413583_640.png',
            singer : data?.singer,
            released : data?.createdAt.toString().slice(0, 15)
        }
         
        navigate('SongDetail',{
            id : data._id,
        });
     } catch (err:any) {
        Alert.alert('error in getreeldataapi', err?.message);
     }
}

export const getUserDetail = async () => {
  try {
    const userId = mmkyStroage.getItem("userId")
    const userData = await appAxios.post('/user/userdetail',{userId : userId})
    return userData
  } catch (error:any) {
    Alert.alert("error in get userdetail",error?.message)
  }
}