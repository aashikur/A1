# টাইপসক্রিপ্ট টিপস – Interface vs Type & keyof

---

## Interface vs Type

প্রশ্ন: Interface এবং Type এর মধ্যে পার্থক্য কী?

উত্তর:  
TypeScript-এ interface এবং type প্রায় একই কাজ করে, তবে কিছু পার্থক্য আছে।  

- Interface সাধারণত object-এর structure define করতে ব্যবহার হয়।  
- Type আরও versatile; এটি primitive, union, tuple, বা object সব define করতে পারে।  
- Interface সহজেই অন্য interface থেকে extend করা যায়। Type ও extend বা union করা যায়, তবে syntax আলাদা।  

উদাহরণ:  
interface IUser {  
  name: string;  
  age: number;  
}  

type ID = string | number;

---

## keyof

প্রশ্ন: TypeScript-এ keyof এর ব্যবহার কী?

উত্তর:  
keyof দিয়ে আমরা একটি object type-এর সব key-এর union type তৈরি করতে পারি। এটি type-safe code লিখতে খুবই কাজে লাগে।  

উদাহরণ:  
type User = {  
  name: string;  
  age: number;  
}  

type UserKeys = keyof User  
// UserKeys = "name" | "age"  

const key: UserKeys = "name"  
// const key2: UserKeys = "email" // compile-time error  

সারসংক্ষেপ:  
keyof ব্যবহার করে object-এর key নিয়ে safely কাজ করা যায়, এবং ভুল key ব্যবহার করলে TypeScript compile-time error দেখায়।
