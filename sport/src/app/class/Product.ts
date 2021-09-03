export class Product{
    productId : number = 0;
    productName : string = '';
    category : string =  '';
    description : string = '';
    brand : string = ''; 
    color : string = '';
    productSize : string = '';
    productImage : string = '';
    mrp : number | string = '';
    discount : number = 0;
    priceAfterDiscount : number | string = '';
    inStock : boolean = true;
    estimatedDelivery : Date = new Date();
}