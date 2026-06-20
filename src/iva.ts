/**
 * Calcula el monto del impuesto (IVA) correspondiente al subtotal de la compra.
 * @param subtotal - El monto base de los productos antes de aplicar impuestos.
 * @returns El valor númerico que representa el 12% de IVA calculado.
 */
export const calcularIva = (subtotal: number): number => {
    return subtotal * 0.12; 
}