export const getName = (name, parentName) => (parentName ? `${parentName}.${name}` : name);

export const getPropValue = function (values, name, parentName) {
    if (!values) return null;
    if (!parentName) return values[name];
    const names = parentName.split(".");
    let result = values;
    for (const key of names) {
        result = result[key];
        if (!result) break;
    }
    return result && result[name];
};
