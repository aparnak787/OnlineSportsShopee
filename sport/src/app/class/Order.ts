export class Order {
    orderId: number=0;
    amount: number=0;
    billingDate: Date = new Date();
    paymentMethod: string='';
    active: boolean=true;
}