interface Product {
    description: string;
    prince : number;
}

const phone: Product = {
    description: 'Nokia A1',
    prince: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    prince: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation( options: TaxCalculationOptions ): number[] {

    let total = 0;

    options.products.forEach( product => {
        total += product.prince;
    })

    return [total, total * options.tax]

}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax,
})

console.log('Total', result[0] );
console.log('Tax', result[1] );

export {};