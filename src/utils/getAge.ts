export default function getAge(year: number, month: number, day: number): number {
  const now = Date.now()
  const milisec = new Date(year, month, day).getTime()
  const diff = now - milisec
  return Math.floor(diff / 1000 / 3600 / 24 / 365)
}
