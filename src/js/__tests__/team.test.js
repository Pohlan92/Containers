import Character from "../Character";
import Team from "../Team";

const character = new Character()
const characterObject = character.getCharacters()
const team = new Team(characterObject)

test('create object from Character class', () => {
  expect(character instanceof Character).toBe(true)
})

test('getCharacters method for Character class', () => {
  expect(characterObject).toEqual([
    'magican',
    'swordsman',
    'undead',
    'zombie' 
  ])
})

test('create object from Team class', () => {
  expect(team instanceof Team).toBe(true)
  expect(team.characters).toEqual(characterObject)
})

test('addAll method from Team class', () => {
  const result = team.addAll('runingman', 'ironman')
  expect(result instanceof Set).toBe(true) 
  expect(result).toHaveProperty['runingman']
  expect(result).toHaveProperty['ironman']
})

test('add method from Team class', () => {
  const result = team.add('swordsman')
  const result1 = team.add('superman')
  expect(result).toBe('Этот герой уже есть в команде')
  expect(team.members).toHaveProperty[result1]
})

test('toArray method from Team Class', () => {
  team.addAll('runingman', 'ironman')
  expect(team.toArray()).toEqual(['runingman', 'ironman'])
})





// test('create new Bowerman class', () => {
//   const result = new Bowerman(1,1)
//   expect(result instanceof Bowerman).toBe(true)
//   expect(result instanceof Character).toBe(true)
//   expect(result).toEqual({level: 1, health: 1, attack: 25, defence: 25})
// })

// test('levelUp method for new Bowerman class', () => {
//   const result = new Bowerman(1,1)
//   const resultError = new Bowerman(1,0)
//   result.levelUp()
//   // resultError.levelUp()
//   expect(result).toEqual({level: 2, health: 100, attack: 30, defence: 30})
//   expect(resultError.levelUp()).toBe('error')
// })

// test.each([
//   [1, 'critical'],
//   [5, 'critical'],
//   [16, 'wounded'],
//   [37, 'wounded'],
//   [51, 'healthy'],
//   [154, 'healthy'],
// ])('Check checkHealthLevel function with %d level and %s status', (level, expected) => {
//   const result = checkHealthLevel({ name: '_', health: level });
//   expect(result).toBe(expected);
// });




// test('should sum', () => {
//   const result = sum([1, 2, 3]);

//   expect(result).toBe(6);
// });
