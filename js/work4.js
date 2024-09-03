class Animal {
    constructor(name, species) {
      this._name = name;       // Приватный атрибут
      this._species = species; // Приватный атрибут
    }
  
    // Геттеры и сеттеры для имени
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    // Геттеры и сеттеры для вида
    get species() {
      return this._species;
    }
  
    set species(value) {
      this._species = value;
    }
  }
  


class Mammal extends Animal {
    constructor(name, species, furColor) {
      super(name, species);
      this._furColor = furColor; // Приватный атрибут
    }
  
    // Геттер и сеттер для цвета шерсти
    get furColor() {
      return this._furColor;
    }
  
    set furColor(value) {
      this._furColor = value;
    }
  }
  
  class Bird extends Animal {
    constructor(name, species, wingSpan) {
      super(name, species);
      this._wingSpan = wingSpan; // Приватный атрибут
    }
  
    // Геттер и сеттер для размаха крыльев
    get wingSpan() {
      return this._wingSpan;
    }
  
    set wingSpan(value) {
      this._wingSpan = value;
    }
  }
  
  class Reptile extends Animal {
    constructor(name, species, scaleType) {
      super(name, species);
      this._scaleType = scaleType; // Приватный атрибут
    }
  
    // Геттер и сеттер для типа чешуи
    get scaleType() {
      return this._scaleType;
    }
  
    set scaleType(value) {
      this._scaleType = value;
    }
  }
  


class Zoo {
    constructor() {
      this._animals = []; // Приватный массив для хранения животных
    }
  
    // Метод для добавления животного
    addAnimal(animal) {
      this._animals.push(animal);
    }
  
    // Метод для вывода списка всех животных
    listAnimals() {
      this._animals.forEach(animal => console.log(`${animal.species}: ${animal.name}`));
    }
  
    // Метод для получения животных по виду
    getAnimalsBySpecies(species) {
      return this._animals.filter(animal => animal.species === species);
    }
  
    // Метод для удаления животного по имени
    removeAnimal(name) {
      this._animals = this._animals.filter(animal => animal.name !== name);
    }
  
    // Метод для подсчета общего количества животных
    countAnimals() {
      return this._animals.length;
    }
  
    // Бонусный метод для кормления животных
    feedAnimals() {
      this._animals.forEach(animal => {
        console.log(`Feeding ${animal.name} the ${animal.species}`);
      });
    }
  }
  


// Создание экземпляров разных животных
const tiger = new Mammal("Tiger", "Panthera tigris", "Orange with black stripes");
const eagle = new Bird("Eagle", "Aquila chrysaetos", 2.3);
const snake = new Reptile("Snake", "Serpentes", "Scales");

// Создание экземпляра зоопарка
const zoo = new Zoo();

// Добавление животных в зоопарк
zoo.addAnimal(tiger);
zoo.addAnimal(eagle);
zoo.addAnimal(snake);

// Вывод списка всех животных
console.log("List of all animals:");
zoo.listAnimals();

// Поиск животных по виду
console.log("\nAnimals of species 'Panthera tigris':");
console.log(zoo.getAnimalsBySpecies("Panthera tigris"));

// Удаление животного по имени
zoo.removeAnimal("Eagle");
console.log("\nAfter removing Eagle:");
zoo.listAnimals();

// Подсчет общего количества животных
console.log("\nTotal number of animals in the zoo:");
console.log(zoo.countAnimals());

// Кормление всех животных
console.log("\nFeeding all animals:");
zoo.feedAnimals();
