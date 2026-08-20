const images = import.meta.glob("../assets/images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function getImage(filename) {
  const match = Object.entries(images).find(([path]) =>
    path.endsWith(`/${filename}`)
  );
  return match ? match[1] : "";
}
