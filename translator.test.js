const { morseCode, englishToMorse, morseToEnglish } = require('./translator.js')

// English to Morse
describe('englishToMorse', () => {
  Object.entries(morseCode).forEach(([letter, morse]) => {
    test(`converts ${letter} to ${morse}`, () => {
      expect(englishToMorse(letter)).toBe(morse)
    })
  })

  test('handles spaces as /', () => {
    expect(englishToMorse('A B')).toBe('.- / -...')
  })

  test('handles lowercase input', () => {
    expect(englishToMorse('a')).toBe('.-')
  })

  test('converts full word', () => {
    expect(englishToMorse('SOS')).toBe('... --- ...')
  })
})

// Morse to English
describe('morseToEnglish', () => {
  Object.entries(morseCode).forEach(([letter, morse]) => {
    test(`converts ${morse} to ${letter}`, () => {
      expect(morseToEnglish(morse)).toBe(letter)
    })
  })

  test('handles / as space', () => {
    expect(morseToEnglish('.- / -...')).toBe('A B')
  })

  test('converts full word', () => {
    expect(morseToEnglish('... --- ...')).toBe('SOS')
  })
})