const user = {
    name: "Rahul",
    address: {
        home:{
            address1: "C103, Ecolife-EON",
            address2: "Balagere road, Varthur",
            city: "Bangalore",
            state: "Karnataka",
            country: "India",
            zip: 560087,
            area:{
                landmark: "Near Medkart farma"
            }
        },
        office:{
            address1: "Divya shree green",
            address2: "Domulur",
            city: "Bangalore",
            state: "Karnataka",
            country: "India",
            zip: 560071,
            area:{
                landmark: "EGL tech park"
            }
        }
    }
};

let flatObj = {};
const flattenObject = (obj, parentKey) => {
    for(let key in obj){
        if(typeof obj[key]==='object'){
           flattenObject(obj[key],parentKey+"_"+key);
        }else{
            flatObj[parentKey+"_"+key] = obj[key];
        }
    }
    return flatObj;
};

console.log(flattenObject(user,"user"));