export default function getAvatar(name) {
  const base = "https://ui-avatars.com/api/";
  const nameFormatted = name.trim().toLowerCase().replace(" ", "+");
  return `${base}?name=${nameFormatted}&background=f5f2e7&color=2c3333&format=svg`;
}
