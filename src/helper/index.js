import _ from "lodash";

export const getRegion = (countryName, countries) => {
    let region;
    for (const country of countries) {
        if (country.name === countryName) {
            region = country.region;
            break;
        }
    }

    return region;
}

export const getColumnKeys = (element) => {
    let columns = Object.keys(element).map((column, index) => {
        return {
            title: _.startCase(column),
            dataIndex: column,
            key: index
        }
    })
    return columns;
}
