
export const invoice = {
    id: 17,
    name: 'Libros',
    client:{
        name:'Teresa',
        lastName:'Doe',
        address:{
            country: 'España',
            city: 'Sevilla',
            street: 'Macarena',
            number: 13,
            postalCode: 20600
        }
    },
    company: {
        name: 'Tere.SA',
        fiscalNumber: 123456789,
    },
    items: [
        {
            id: 1,
            product: 'Todo Arde',
            price: 22.90,
            quantity: 1,
        },   
        {
            id: 2,
            product: 'Figuras Ocultas',
            price: 12.50,
            quantity: 1,
        },
        {
            id: 3,
            product: 'Elantris',
            price: 18.90,
            quantity: 1,
        },
    ]       
}