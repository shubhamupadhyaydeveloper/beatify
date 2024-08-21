import {z} from 'zod';
export const CreateSongSchema = z.object({
     title : z.string(),
     singer : z.string(),
     description : z.string().max(100)
})