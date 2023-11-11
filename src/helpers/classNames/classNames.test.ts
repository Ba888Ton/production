import { classNames } from './classNames'

describe('classNames', () => {
  test('just one class', () => {
    expect(classNames('class')).toBe('class')
  })
  test('class with additional', () => {
    expect(classNames('class', {}, ['class1'])).toBe('class class1')
  })
  test('class with conditional', () => {
    expect(classNames('class', { conditional: true, conditional2: true }, ['class1'])).toBe('class class1 conditional conditional2')
  })
  test('class with falsy conditional', () => {
    expect(classNames('class', { conditional: true, conditional2: false }, ['class1'])).toBe('class class1 conditional')
  })
  test('class with falsy conditional', () => {
    expect(classNames('class', { conditional: true, conditional2: true }, ['class1'])).toBe('class class1 conditional2 conditional')
  })
})
