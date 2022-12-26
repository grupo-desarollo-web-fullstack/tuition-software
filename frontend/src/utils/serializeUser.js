export default function serializeUser(user) {
  if (!user) return null;
  const newUser = {};
  Object.entries(user).forEach(([key, value]) =>
    Reflect.set(newUser, key.replace("estudiante_", ""), value)
  );
  return newUser;
}
