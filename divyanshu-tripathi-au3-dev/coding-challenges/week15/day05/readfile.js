// // I have attached a CSV file here that contains the data for the percentage of computerized schools in each 
// state of India.
// // Please write a program that reads this file, sort the data based on the percentage in descending order 
// and print the sorted data to the console. So, when you run this program, you will see the state with the maximum 
// computerized school at the top.
// // The only rule we have here is - To sort the data, use the bubble sort algorithm.

const fs = require('fs')

let data = fs.readFileSync('computers-datafile.csv', 'utf-8').split('\r\n').map(item => item.split(','))

let bubblesort = array => {

    for(let i = 0; i < array.length; i++){
        for(let j = array.length -1 ; j > i; j--){

            if( array[j][1] > array[j-1][1]){

                [array[j], array[j-1]] = [array[j-1], array[j]]
            }
        }
    }
        return array;

}

console.log(bubblesort(data))