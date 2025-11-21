export const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

export const truthyValues = [true, 1, -1, 1n, "a", {}, [], Symbol("sym")];

export const nonNullishValues = [...falsyValues.filter((value) => value != null), ...truthyValues];

export default [...falsyValues, ...truthyValues];
