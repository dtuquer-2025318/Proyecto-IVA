/**
 * Calcula el monto total de la compra sumando el subtotal y el IVA.
 * @param subtotal - El monto base de los productos antes de impuestos.
 * @param iva - El valor calculado del impuesto que se va a aplicar.
 * @returns La suma final que representa el total a pagar por el cliente.
 */
export const calcularTotal = (subtotal: number, iva: number): number => {
    return subtotal + iva;
}