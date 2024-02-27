import { expect, test } from 'vitest'

test('my test', () => {
  const name = 'hzz'
  expect(name).toBe('hzz')  // 通过
  // expect({name: 'hz'}).toBe({name: 'hz'})     // 不通过
  expect({name: 'hz'}).toEqual({name: 'hz'})  // 通过
})