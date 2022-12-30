export default function serialize(object, prefix) {
  if (!object) return null;
  const newObject = {};
  Object.entries(object).forEach(([key, value]) => Reflect.set(newObject, key.replace(`${prefix}_`, ""), value));
  return newObject;
}
