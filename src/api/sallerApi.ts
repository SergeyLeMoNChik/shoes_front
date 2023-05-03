import { api } from "./api"
import { ISallerform } from "../page/saller/types"

export const sallerApi = {
    path: 'saller/',
    async getAll<T>():Promise<T>{
        return await api.get(this.path)
    },
    async getById(idsaller:string){
        return await api.get(this.path + idsaller)
    },
    async create(saller: ISallerform){
        return await api.post(this.path, saller)
    },
    async delete(idsaller: number){
        return await api.delete(this.path + idsaller)
    },
}