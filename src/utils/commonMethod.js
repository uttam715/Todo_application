export function generateUUID() {
  return Math.floor(Math.random() * Date.now());
}

export function searchClassName(element, className, depth) {
  if (depth === 0) return false;
  if (element.classList.contains(className)) return true;
  return searchClassName(element.parentNode, className, depth - 1);
}
