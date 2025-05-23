// Data access | Object inside Array
const data = [{name: 'Robiul', id: 342, address: 'Dhaka'}, {name: 'Hassan', id: 574, address: 'Maqqa'}];
console.log(data[1].address);


// Data Access | Array inside Object
const infoData = {
    name: 'AccessInfo',
    data: [
        {product: 'Mobile', id: 7642, price: 49375},
        {product: 'Laptop', id: 86346, price: 63584},
    ]
};
console.log(infoData.data[0]);
console.log(infoData.data[1].price);



// Chain Data Access | Nested Object
const user = {
    name: 'Robin',
    address: {
        permanentAdrs: {
            first: 'Totarkhil',
            second: 'Sadar',
            third: 'Lakshmipur'
        },
        unpermanentAdrs: {
            first: 'Mugda',
            second: 'Dhaka',
        }
    }
}
console.log(user.address.permanentAdrs.third)

// Opttional Chaining
const userInfo = {
    name: 'Robin',
    address: {
        permanent: {
            village: 'Totarkhil',
            district: 'Lakshmipur'
        }
    }
}
console.log(userInfo.address.permanentAdrs?.third)