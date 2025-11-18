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





// PrintBook Details
/*
Problem 6:
Define an interface Book with the following properties:

title (string)
author (string)
publishedYear (number)
isAvailable (boolean)
Then, create a function printBookDetails that accepts an object of type Book and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".

Requirements:
You must define the Book interface correctly.
The printBookDetails function must accept an object that follows to the Book interface.
Sample Input:
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
Sample Output:
Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes

*/


interface Book {
  title : string;
  author: string;
  publishedYear: number;
  isAvailable : boolean;
}

const printBookDetails = (myBook : Book)  => {
  return `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable? "Yes": "No"}`
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const x = printBookDetails(myBook);
console.log(x)


 



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