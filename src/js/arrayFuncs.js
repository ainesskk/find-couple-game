import {v4 as uuidv4} from 'uuid';

export const shuffle = (arr) => {
    const newArr = [...arr];

    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
};

export const formFruitsObject = (arr) => {
    const newObj = {};

    const newArr = shuffle(arr);

    for (const element in newArr) {
        const key = uuidv4();
        newObj[key] = newArr[element];
    }

    return newObj;
}