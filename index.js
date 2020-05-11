/**
 * Get the value of the flag passed as a command line argument
 */
const pick = flag => {
  const index = process.argv.indexOf(flag) + 1
  if (!index) return undefined
  return process.argv[index]
}

/**
 * Get a random character from a `set`
 */
const getRandomCharacter = (set) => {
  return set[Math.floor(Math.random() * (set.length - 1))]
}

/**
 * Generate a password
 */
const generatePassword = (length, alphabet) => {
  let result = []
  while (length--) {
    result.push(getRandomCharacter(alphabet))
  }
  return result.join('')
}

// TODO limit alphabet based on args
const digit = '0123456789'
const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabet = `${digit}${lower}${upper}`

let quantity = pick('-n') || 1
const length = pick('-l') || 20

while (quantity--) {
  console.log(generatePassword(length, alphabet))
}
