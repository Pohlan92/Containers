import { ErrorRepository } from "../ErrorRepository";


test.each([
  ['1', 'Передан некорректный код'],
  ['', 'Передан некорректный код'],
  [16, 'Передан некорректный код'],
  [222, 'Unknown error'],
  [405, 'Method Not Allowed'],
  [204, 'No Content'],
  [303, 'See Other'],
])('Check translate method with %d code and %s error description', (code, expected) => {
  const result = ErrorRepository.translate(code);
  expect(result).toBe(expected);
});