export function intersects<T>(A: readonly T[], B: readonly T[]): boolean {
  return A.some((a) => B.includes(a));
}

export function keywordShouldShow(
  urlKeywords: readonly string[],
  keywords: readonly string[]
) {
  if (urlKeywords.includes("*")) {
    return true;
  }
  if (keywords.includes("*")) {
    return true;
  }
  return intersects(urlKeywords, keywords);
}
