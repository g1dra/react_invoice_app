export const vatTypes = {
    none: "none",
    partial: "partial",
    full: "full",
}

export const calculateVat = (serviceProvider, customer, services) => {

    let vatType = findVatType(serviceProvider, customer)
    console.log(vatType)
    let vatRate = 0;

    switch (vatType) {
        case vatTypes.none:
            vatRate = 0;
            break
        case vatTypes.partial:
            vatRate = services[0].vatRate * 0.5; // random x
            break
        case vatTypes.full:
            vatRate = services[0].vatRate
            break
    }

    let servicesCopy = JSON.parse(JSON.stringify(services));

    return servicesCopy.map(service => {
        service.vatRate = vatRate
        service.total = service.price + service.price / 100 * vatRate;
        return service
    });
}

const findVatType = (serviceProvider, customer) => {

    // service provider is not a VAT payer
    if (serviceProvider.region !== 'Europe') {
        return vatTypes.none;
    }

    // outside the EU
    if (customer.region !== 'Europe') {
        return vatTypes.none;
    }

    // Customer lives in a different country from the service provider. VAT x% is applied todo is vat payer??
    if (customer.region === 'Europe' && customer.country !== serviceProvider.country) {
        return vatTypes.partial
    }

    // Lives in the EU, is a VAT payer but lives in a different country from the service provider
    if (customer.region === 'Europe' && customer.country !== serviceProvider.country) {
        return vatTypes.none
    }
}

