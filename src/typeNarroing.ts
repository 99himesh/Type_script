function getChai(kind:number|string){
    if(typeof kind=="string"){
        return `Making ${kind} chai.`
    }
    return `chai code : ${kind}`
}


function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Defaul serving`

}


function orderChai(size:"small"| "medium"| "large" |number){
    if(size=="small"){
        return `Small cutting chai`
    }
    if(size=="medium" || size=="large"){
        return `Make extra chai`

    }
    return `chai order ${size}`
}


type chaiAurCode={
    type:string,
    sugar:number
}

type masalaChai={type:"masala",special:number}
type gingerChai={type:"ginger",special:number}
type elaichiChai={type:"elaichi",special:number}


type chai=masalaChai |gingerChai | elaichiChai;
function makechai(order:chai){
     switch(order.type){
        case "masala":
            return "Make masala chai";
            break;

        case "elaichi":
            return "Make elaichi chai";
            break;
        case "ginger":
            return "Make ginger chai";
            break;
     }
}