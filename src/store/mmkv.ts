import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
    id : "auth-store",
    encryptionKey : "some_encryption_key"
})

export const mmkyStroage = {
    setItem:(key:string,value:string) => {
        storage.set(key,value)
    },
    getItem:(key:string) => {
        const value = storage.getString(key)
        return value ?? null
    },
    removeItem:(key:string) => {
        storage.delete(key)
    }
}