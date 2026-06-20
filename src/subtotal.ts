/**
 * Calcula la suma total de un conjunto de precios individuales (subtotal).
 * @param precios - Arreglo con los montos numéricos de cada producto.
 * @returns El subtotal acumulado de los precios proporcionados.
 */
export const calcularSubtotal = (precios: number[]): number => {
    let suma = 0;
    for (const precio of precios){
        suma += precio;
    }
    return suma;
};