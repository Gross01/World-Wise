export const checkProperty = (prop, specialProperty) => {
    if (prop === undefined || prop === null) return '---';
    if (specialProperty !== undefined && specialProperty !== null) return specialProperty;
    return prop;
}