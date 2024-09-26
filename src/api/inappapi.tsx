import { navigation, resetAndNavigate } from "src/navigation/navigaionutils";
import { appAxios } from "./apiIntersepters"
import { port } from "./client"


export const getReelDataApi = async (reelId :string,deepLinkType : string) => {
     try {
        const {data} = await appAxios.post(`${port}/public/reel`, {
          songId : reelId
        });

         if (deepLinkType !== 'RESUME') {
           resetAndNavigate('App');
         }

        const createData = {
            title : data?.title,
            image : data?.thumbnail?.secure_url || 'https://cdn.pixabay.com/photo/2016/05/24/22/54/icon-1413583_640.png',
            singer : data?.singer,
            released : data?.createdAt.toString().slice(0, 15)
        }
         
        navigation('SongDetail',{
            data : createData,
            index :0
        });
     } catch (err:any) {
        console.log('error in getReeldata api',err?.message)
     }
}