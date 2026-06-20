/**
 * Este archivo centraliza los cálculos de subtotal, IVA y totales.
 */
import { calcularTotal } from './total.js';
import { calcularSubtotal } from './subtotal.js';
import { calcularIva } from './iva.js';

// Datos de prueba: Precios de los productos en el carrito de compras
const productos: number[] = [100, 200, 65, 78];

// Ejecución del flujo de cálculo financiero
const subtotal = calcularSubtotal(productos);
const iva = calcularIva(subtotal);
const total = calcularTotal(subtotal, iva);

// Impresión de resultados en consola con formato de moneda local (GTQ)
console.log("---- Total de la Compra ---")
console.log(productos);
console.log(`Subtotal: Q${subtotal.toFixed(2)}`);
console.log(`Iva (12%): Q${iva.toFixed(2)}`);
console.log(`Total: Q${total.toFixed(2)}`);