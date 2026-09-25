
//union 
let subs:number |string="1M";

let apiReq :"Pending" |"Success" | "Error" ="Pending";

let airlines:"aisile"|"Window"|"Middle"="aisile";
airlines="Middle"


let orders=["23","43","33","44"];

let currentOrder:string | undefined;
for(let order of orders){
   if(order=="23"){
     currentOrder=order;
     break;
   }
}
console.log(currentOrder)


//avoid any

// let order:any="11";

