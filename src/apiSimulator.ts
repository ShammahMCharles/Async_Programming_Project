export class NetworkError extends Error{
    constructor(message: string){
        super(message);
        this.name = "NetWorkError"
    }
}
    
export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}



export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
            resolve( [
                { id: 1, name: "Laptop", price: 1200 },
                { id: 2, name: "Headphones", price: 200 },
            ]);
            } else {
            reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};

export const fetchProductReviews = (): Promise<{productId: number}[]>=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
        if (Math.random() < 0.8){
            resolve([
                {productId: 5}
            ]);
            } else {
            reject(new NetworkError(`Failed to fetch reviews for product ID`));
            }
        }, 1500);
    })
}
 
 export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; avaragePrice: number }[]> =>{
    return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
    if (Math.random() < 0.8){
        resolve([
            { totalSales: 100, unitsSold: 100, avaragePrice: 1200}
            ]);
            } else {
            reject(new NetworkError("Failed to fetch sales report"))
            }
        }, 1000)
    })
 }