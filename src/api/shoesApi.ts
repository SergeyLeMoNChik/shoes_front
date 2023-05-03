import { IShoesEdit, IShoesform } from "../page/shoes/types"
import { api } from "./api"

export const shoesApi = {
    path: 'shoes/',
    async getAll<T>(): Promise<T>{
        return await api.get(this.path)
    },
    async getById(id:string){
        return await api.get(this.path + id)
    },
    async create(shoes: IShoesform){
        return await api.post(this.path, shoes)
    },
    async delete(id: number){
        return await api.delete(this.path + id)
    },
    async update(id: number, shoes:IShoesEdit){
        return await api.put(this.path + id, shoes)
    },
}

