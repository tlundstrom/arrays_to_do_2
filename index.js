const arrRev = [1,6,4,9,3,0]

const reverse = (arr) =>{
    //create placeholder for value manipulation
    let temp = null;
    // create a decrementer for value manipulation
    let j = arr.length-1;


    //must stop when incrementer and decrementer are equal
    for(let i = 0;i< j; i++){
        //set place holder to first value in array
        temp = arr[i];
        //swap values for first and last position
        arr[i] = arr[j];
        //set last position for initial value of first position
        arr[j] = temp;
        //decrement
        j--;
        //clear out temp value, just for safety.
        temp = null;
    }
    return arr;
}

//console.log(reverse(arrRev));


const arrRotate = [0,1,2,3,4,5];

//helper fuction to actually move the values

const rotateSingle = (arr, arrLength) =>{
                                            //temporary variable holds the last value in array
    let temp = arr[arrLength-1];
                                            //iterate backwards through array;
    for(let i = arrLength -1; i> 0; i --){
                                            //shift the values forward by one starting at the end of the array
        arr[i] = arr[i - 1];
    }
                                             //set 0th position to the value that was at the end of the array thus wrapping
    arr[0] = temp;
    return arr;
}

const rotateArr = (arr, shiftBy) =>{
                                        //gives intellisense to array length
    const arrLength = arr.length;
                                        //simplifies the shift allowing for millions or billions of shifts while minimizing the number of times the loop is ran
    const shift = shiftBy % arr.length
    
                                        //rotates the array by the set number
    for(let i=0; i < shift; i++){
        rotateSingle(arr, arrLength);
    }
    return arr;
}

//console.log(rotateArr(arrRotate, 130000))

const filterArr = [0,1,2,3,4,5,6,7,8,9,09,765,34,5,3,5,6,-0987,23456]

const filterRange = (arr, min, max) => {
    //counter to track new array length
    let j = 0;
    //iterate through while checking conditions, set new array counter to value of previous if true
    for(let i =0; i< arr.length; i++){
        if(arr[i]>= min && arr[i]<= max){
            arr[j] = arr[i];
            j++
        }
    }
    //trunicate the remaining array;
    arr.length = j;
    return arr;
}

//console.log(filterRange(filterArr,0,7));


const array1 = [0,9,8,7,6];
const array2 = [5,4,3,2,1];

const myConcat =(arr1,arr2) =>{
    // create new array and counter to track length and place;
    let newArray = [];
    let j = 0;
    //set new array length each time an array is concatenate
    j = arrSetter(newArray, arr1, j);
    j = arrSetter(newArray, arr2, j);
    
    return newArray
}

const arrSetter = (newArr, arr, j) =>{
    //iterate through given array setting values and incrementing new array counter;
    for(let i = 0; i<arr.length; i++){
        newArr[j] = arr[i];
        j++
    }
    return j;
}

console.log(myConcat(array1,array2));

