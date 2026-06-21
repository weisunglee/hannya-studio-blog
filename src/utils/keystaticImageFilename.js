function pad(value) {
  return String(value).padStart(2, "0");
}

function formatTimestamp(date) {
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    "-",
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds()),
  ].join("");
}

function getSafeExtension(originalFilename) {
  const extension = originalFilename.match(/\.([a-z0-9]+)$/i)?.[1];
  return extension ? extension.toLowerCase() : "png";
}

function getRandomSuffix(random) {
  return Math.floor(random() * 36 ** 4)
    .toString(36)
    .padStart(4, "0")
    .slice(0, 4);
}

export function createKeystaticImageFilename(
  originalFilename,
  { now = new Date(), random = Math.random } = {}
) {
  return `${formatTimestamp(now)}-${getRandomSuffix(random)}.${getSafeExtension(originalFilename)}`;
}
