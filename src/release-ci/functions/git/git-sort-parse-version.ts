export function gitSortParseVersion(name: string): number[] {
  return name.split('.').map((num) => parseInt(num, 10));
}
