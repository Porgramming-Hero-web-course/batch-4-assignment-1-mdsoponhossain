
# The significance of union and intersection types in Typescript.

## union type in ts
The main deffirent between the typescript and javaScript is declaring the type due to the type safety.In TypeScript, a variable is defined that can be assigned various types of values. Essentially, TypeScript can integrate one or more types of data (i.e. number, string, etc.) into one or more fields. There is a union type, which is the one known as a union type. Union types are a powerful way to express multiple union types for a variable. Two or more data types can be interconnected using the pipe ('|') symbol between them.

let value: number | string;   

In the union type the value must contain in the type.
Here, value's type will be the number or the string.


## intersection type in ts
The types of intersection and union are alike, but they are used in entirely different ways. Those types that combine several kinds into a single one are called intersection types. With this, you can combine multiple types to create a single type that has all the necessary properties.


interface Student { 
  student_id: number; 
  name: string; 
} 
  
interface Teacher { 
  Teacher_Id: number; 
  teacher_name: string; 
} 
  
  
type intersected_type = Student & Teacher;   



