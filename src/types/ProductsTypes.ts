export type Product = {
    id: number
    title: string
    description: string
    category: string
    price: number
    images:  string[]
    rating: number
    stock: number
}


export interface NewProduct {
    id:number
    title: string
    author: string
    year: number
    rating: number
}