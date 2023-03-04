//Task1
// На старте вы получаете массив. Необходимо написать функцию, которая будет
// возвращать массив удвоенных значений исходного массива.
//input: [1, 2, 3]
// output: [2, 4, 6]
// input: [4, 1, 1, 1, 4]
// output: [8, 2, 2, 2, 8]

const doubleTheValue=(arr)=> {
    return arr.map((item) => {
        return item * 2
    })
}

console.log(doubleTheValue([4, 1, 1, 1, 4]))

//Task2
// Напишите функцию, которая будет удалять каждый второй элемент в массиве. Цикл for использовать запрещено!
//input: ['Привет', 'Пока', 'Снова привет']
// output: ['Привет', 'Снова привет']

// const deleteSecondElement=arr2=>arr2.filter((item,idx)=>{
//     return idx % 2===0
// });
// console.log(deleteSecondElement(['Привет', 'Пока', 'Снова привет']));

//Task3
// Возьмите массив с числами, а верните массив, в котором отрицательные числа, становятся положительными, а положительные - отрицательными.
//input: [1, 2, 3, 4, 5]
// output: [-1, -2, -3, -4, -5]

// const invertArray = (arr) => arr.map((item) => -item)
//
// console.log(invertArray([-10, 2, -3, 42, -51]))

//Task4
// Напишите функцию, которая принимает в качестве аргументов 2 параметра: массив и число, а возвращает новый
// массив с тем кол-вом элементов с начала массива, которое было указано в числе.
//input: [0, 1, 2, 3, 5, 8, 13], 3
// output:  [0, 1, 2], 'Вернула первые три значения'

// const  task4=(arr,num)=>{
//     return arr.filter((item)=>{
//         return item<num
//     })
// };
// console.log(task4( [0, 1, 2, 3, 5, 8, 13], 3));


//Task5
// Вернуть новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве.
//input: [22, -6, 32, 82, 9, 25]
// output: [-6, 32, 25])

// const filterByIndex=(arr)=>{
//     return arr.filter((item, idx) =>{
//        return item % idx === 0
//     });
// }
// console.log(filterByIndex([22,-6,32,82,9,25]));
//

//Task6
// Напишите функцию, которая принимает на вход массив,
//  и возвращает новый, в котором все элементы типа string заменены на null.
//input: [4, 6, 'Ivan', 5, 'Denis ']
// output: [4, 6, null, 5 , null]

// const replaceStringWithNull=(arr,idx)=>{
//     return arr.map((item,idx)=>{
//         return typeof item ==="string" ? null : item
//     })
// }
// console.log(replaceStringWithNull([4, 6, 'Ivan', 5, 'Denis ']));

//Task7
// Напишите функцию, которая принимает на вход массив с именами ,
// и возвращает новый, в котором содержатся имена не длиннее 5 символов.
//
// input: ['Евдоким','Ivan', 'Игнат', 'Denis ']
// output: ['Ivan', 'Игнат', 'Denis ']


// const filterNames=(names)=>{
//     return names.filter((name) => name.length <= 5);
// }
// console.log(filterNames(['Евдоким','Ivan', 'Игнат', 'Denis ']))

//Task8
// Напишите функцию, которая принимает на вход массив чисел,
// и возвращает новый, в котором все элементы возведены в куб, и те числа,
// которые кратны и трем и пяти одновременно, заменить их на 0.
//
// input: [7, 8, 15, 30, 2]
// output: [ 343, 512, 0, 0, 8 ]

// const cubeAndFilter=(arr)=>{
//     return arr.map((item) => {
//         if (item % 3 === 0 || item % 5 ===0) {
//             return 0;
//         } else {
//             return item ** 3;
//         }
//     });
// };
// console.log(cubeAndFilter([7, 8, 15, 30, 2]));

//Task9
// Напишите функцию, которая принимает на вход массив слов ,
// и возвращает массив чисел, являющихся длинной слов.
//
// input: ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']
// output: [6, 6, 5, 5, 6]

// const getLengths=(arr)=>arr.map((dlina) => dlina.length)
//
// console.log(getLengths(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']));

//Task10
// Напишите функцию, которая принимает массив чисел
// и возвращает массив строк по шаблону <div>{number}</div>
//
// input: [1, 2, 3, 4, 5 ]
// output: [ <div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div> ]

// const replaceWithDivs = (numbers) => numbers.map((number) => `<div>${number}</div>`);
// console.log(replaceWithDivs([1, 2, 3, 4, 5 ]));

//Task11
// Напишите функцию, которая принимает массив строк
// и возвращает массив строк с четным количеством букв
//Input: ['ab', 'abc', 'abcd']
// Output: ['ab', 'abcd']

// const filterEvenLengthStrings=(strings) => strings.filter((string) => string.length % 2 === 0);
// console.log(filterEvenLengthStrings(['ab', 'abc', 'abcd']));