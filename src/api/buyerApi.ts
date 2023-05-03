import { api } from "./api"

export const buyerApi = {
    path: 'buyer/',
    async getAll<T>():Promise<T>{
        return await api.get(this.path)
    },
    async getById(id:string){
        return await api.get(this.path + id)
    },
}