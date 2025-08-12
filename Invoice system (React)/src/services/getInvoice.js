import {invoice} from '../data/invoice'

export const getInvoice = () => {

    //console.log(invoice);

    //Cálculo importe total factura.
    /*let total = 0;
    invoice.items.forEach(item => {
    total = total + item.price * item.quantity; 
    });
    */


    /*
    Cálculo importe total factura con programación funcional
    (con REDUCE, ya que en este caso items es un array).
    */
    const total = calculateTotal(invoice.items)
        /*(como item es un objeto y no es número, hay que convertirlo para poder utilizar reduce.
        en la siguiente línea, en orden, la primera iteración (accumulator) empieza en 0,
        se suma el balor actual (currentValue, que sería precio * cantidad del primer producto),
        luego 0 + el primero. Y vuelve a iterar siendo el accumulator la suma del primero,
        se suma con el siguiente, etc y sigue iterando. )
            */

    //"Clon" de factura
    return {...invoice, total};
}

export const calculateTotal = (items = []) => {
    return items
        .map ( item => item.price * item.quantity )
        .reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0);
}