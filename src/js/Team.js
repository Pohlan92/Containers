import {Character} from './Character';


export default class Team {
  constructor(characters) {
    this.members = new Set();
    this.characters = characters
  }

  add(character) {
    if (this.members.has(character)) {
      return ('Этот герой уже есть в команде')
    }
        
    this.members.add(character)
    
  }

  addAll(...arg) {
    [...arg].forEach(arg => (this.members.add(arg)))
    return this.members
  }

  toArray() {
    return [...this.members]
  }
}



