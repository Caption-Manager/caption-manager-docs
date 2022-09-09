export default function getSlugs(url: string): string[] {
  return new URL(url).pathname.match(/[^\/]+/g) || [];
}
