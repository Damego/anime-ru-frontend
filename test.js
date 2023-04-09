const params = '1,2,3'
const array = params.split(',').map(strGenre => Number(strGenre));

console.log(array.toString())