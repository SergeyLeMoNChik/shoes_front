export interface IShoes {
    id: number
    model: string
    size: number
    article: string
    season: string
    brand: string
    sex: string
    price: number
    amount: number
  }


  export interface IShoesform extends Omit<IShoes, "id">{}
  export interface IShoesEdit extends Partial<IShoes>{}