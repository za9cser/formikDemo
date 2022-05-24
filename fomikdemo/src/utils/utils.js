export const getName = (name, parentName) => (parentName ? `${parentName}.${name}` : name);

Object.prototype.getProp = function (name, parentName) {
    if (!parentName) return this[name];
    const names = parentName.split(".");
    let result = this;
    for (const key of names) {
        result = result[key];
        if (!result) break;
    }
    return result && result[name];
};
