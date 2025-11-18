const formateValue = (value: string | number | boolean): string | number | boolean | undefined => {
  if (typeof value === 'string') return value.toUpperCase();
  if (typeof value === 'number') return value * 10;
  if (typeof value === 'boolean') return !value;
}

const getLength = (input: string | any[]): number => {
  if (typeof input === 'string') return input.length;
  if (Array.isArray(input)) return input.length;

  const fallback: never = input;
  return fallback;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface Books {
  title: string;
  rating: number;
}

const filterByRating = (items: Books[]): Books[] => {
  return items.filter(item => item.rating >= 4);
}

interface Users {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: Users[]): Users[] => {
  return users.filter(users => users.isActive === true);
}

const getUniqueValues = <T>(arr1: T[], arr2: T[]): T[] => {
  let result: T[] = []; 

  for (let i = 0; i < arr1.length; i++) {
    result[result.length] = arr1[i]!;
  }

  for (let i = 0; i < arr2.length; i++) {
    let flag = false;

    for (let j = 0; j < result.length; j++) {
      if (arr2[i] === result[j]) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      result[result.length] = arr2[i]!; 
    }
  }

  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i]!;
    let productTotal = product.price * product.quantity;

    if (product.discount) {
      productTotal = productTotal * (1 - product.discount / 100);
    }

    total += productTotal;
  }

  return total;
};