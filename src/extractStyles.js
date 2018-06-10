export default function extractStyles(classString, cssModule) {
  if (!classString || !cssModule) return []
  return classString.split(' ').map(className => cssModule[className])
}