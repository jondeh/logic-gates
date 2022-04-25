const and = (x, y) => {
  if (x === 1 && y === 1) return 1
  return 0
}

const or = (x, y) => {
  if (x === 1 || y === 1) return 1
  return 0
}

const not = x => {
  if (x === 0) return 1
  return 0
}

const nand = (x, y) => {
  if (x === 0 || y === 0) return 1
  return 0
}

const nor = (x, y) => {
  if (x === 0 && y === 0) return 1
  return 0
}

const xor = (x, y) => {
  if (x === 1 && y === 0) return 1
  if (x === 0 && y === 1) return 1
  return 0
}

const xnor = (x, y) => {
  if (x === y) return 1
  return 0
}

const input = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1]
]
const table = {
  and: input.map(([x, y]) => [x, y, and(x, y)]),
  or: input.map(([x, y]) => [x, y, or(x, y)]),
  not: input.slice(0, 2).map(([x, y]) => [x, not(x)]),
  nand: input.map(([x, y]) => [x, y, nand(x, y)]),
  nor: input.map(([x, y]) => [x, y, nor(x, y)]),
  xor: input.map(([x, y]) => [x, y, xor(x, y)]),
  xnor: input.map(([x, y]) => [x, y, xnor(x, y)])
}
