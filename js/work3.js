const cars = [
    {
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 24000,
      specifications: {
        engine: "2.5L I4",
        horsepower: 203,
        fuelType: "Gasoline",
        transmission: "Automatic",
      },
      owner: {
        name: "John Doe",
        address: {
          street: "123 Maple St",
          city: "Springfield",
          state: "IL",
          zip: "62704",
        },
      },
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2018,
      price: 22000,
      specifications: {
        engine: "1.5L I4",
        horsepower: 192,
        fuelType: "Gasoline",
        transmission: "Automatic",
      },
      owner: {
        name: "Jane Smith",
        address: {
          street: "456 Oak Ave",
          city: "Madison",
          state: "WI",
          zip: "53703",
        },
      },
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2019,
      price: 26000,
      specifications: {
        engine: "2.3L I4",
        horsepower: 310,
        fuelType: "Gasoline",
        transmission: "Manual",
      },
      owner: {
        name: "Bob Johnson",
        address: {
          street: "789 Pine Rd",
          city: "Austin",
          state: "TX",
          zip: "73301",
        },
      },
    },
    {
      make: "Chevrolet",
      model: "Malibu",
      year: 2021,
      price: 27000,
      specifications: {
        engine: "1.5L I4",
        horsepower: 160,
        fuelType: "Gasoline",
        transmission: "Automatic",
      },
      owner: {
        name: "Alice Brown",
        address: {
          street: "101 Elm St",
          city: "Denver",
          state: "CO",
          zip: "80201",
        },
      },
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 35000,
      specifications: {
        engine: "Electric",
        horsepower: 283,
        fuelType: "Electric",
        transmission: "Automatic",
      },
      owner: {
        name: "Charlie Davis",
        address: {
          street: "202 Cedar Dr",
          city: "San Francisco",
          state: "CA",
          zip: "94102",
        },
      },
    },
    {
      make: "BMW",
      model: "X5",
      year: 2021,
      price: 50000,
      specifications: {
        engine: "3.0L I6",
        horsepower: 335,
        fuelType: "Gasoline",
        transmission: "Automatic",
      },
      owner: {
        name: "Emily Wilson",
        address: {
          street: "303 Birch Ln",
          city: "Seattle",
          state: "WA",
          zip: "98101",
        },
      },
    },
    {
      make: "Audi",
      model: "A4",
      year: 2017,
      price: 28000,
      specifications: {
        engine: "2.0L I4",
        horsepower: 252,
        fuelType: "Gasoline",
        transmission: "Automatic",
      },
      owner: {
        name: "David Miller",
        address: {
          street: "404 Walnut St",
          city: "Portland",
          state: "OR",
          zip: "97201",
        },
      },
    },
    {
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2019,
      price: 42000,
      specifications: {
        engine: "2.0L I4",
        horsepower: 255,
        fuelType: "Gasoline",
        transmission: "Automatic",
      },
      owner: {
        name: "Sarah Green",
        address: {
          street: "505 Spruce St",
          city: "Boston",
          state: "MA",
          zip: "02108",
        },
      },
    },
  ];
  
  
  // Попробуйте оформить каждое задание в виде функции
  // 1. Отфильтруйте бензиновые машины и добавьте в новый массив марку и модель
  // пример: ['BMW 520i', 'Audi A5', 'VW Golf']
  
function getCars(carsArray) {
  const gasoline = carsArray.filter(car => car.specifications.fuelType === "Gasoline");  
  const result = gasoline.map(car => `${car.make} ${car.model}`);
  return result;
}

const CarsList = getCars(cars);
console.log(CarsList);

    
  // 2. Отфильтруйте машины которые стоят больше 30000 и добавьте в новй массив объекты
  // пример объектов: {make: 'BMW', model: '528i', ownerName: 'Jack Smith'}
  
function expensiveCars(carsArray) {
  const expensiveCars = carsArray.filter(car => car.price > 30000);
  
  const result = expensiveCars.map(car => ({
    make: car.make,
    model: car.model,
    ownerName: car.owner.name
  }));

  return result;
}
const expensiveCarsList = expensiveCars(cars);
console.log(expensiveCarsList);

  
  
  // 3. Используйте метод map() чтобы создать новый массив из владельцев

function getOwners(carsArray) { 
  const result = carsArray.map(car => ({
    ownerName: car.owner.name
  }));

  return result;
}
const ownersList = getOwners(cars);
console.log(ownersList);


// Сортировка машин по году выпуска
// Задача: Напишите функцию, которая сортирует массив машин по году выпуска (по убыванию) и возвращает новый массив с объектами, содержащими только make, model и year.

function carsSort(carsArray) {
  const sortedCars = carsArray.sort((a, b) => b.year - a.year);
  const result = sortedCars.map(car => ({
    make: car.make,
    model: car.model,
    year: car.year
  }));
  return result;
}
const sortedCars = carsSort(cars);
console.log(sortedCars);
