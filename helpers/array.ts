export function randomValueFromArray(array: string[]) {
   const randomIndex = Math.floor(Math.random() * array.length);
   console.log(randomIndex);
   return array[randomIndex];
}
