export const checkProperty = (prop: any, specialProperty?: string) => {
    if (prop === undefined || prop === null) return '---';
    if (specialProperty !== undefined && specialProperty !== null) return specialProperty;
    return prop;
}