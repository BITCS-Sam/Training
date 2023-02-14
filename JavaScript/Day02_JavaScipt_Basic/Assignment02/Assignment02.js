class Person {
    constructor(name, age, salary, sex) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.sex = sex;
    }

    static sort(arr, field, order) {
        if (arr.length <= 1) {
            return arr;
        }

        const pivotIndex = Math.floor(arr.length / 2);
        const pivot = arr[pivotIndex];

        const left = [];
        const right = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === pivotIndex) {
                continue;
            }

            if (order === 'asc') {
                if (arr[i][field] < pivot[field]) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            } else {
                if (arr[i][field] > pivot[field]) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
        }

        return [...Person.sort(left, field, order), pivot, ...Person.sort(right, field, order)];
    }
}

const people = [
    new Person("John Doe", 30, 5000, "Male"),
    new Person("Jane Doe", 25, 6000, "Female"),
    new Person("Jim Smith", 35, 4000, "Male"),
    new Person("Sarah Johnson", 28, 7000, "Female"),
];

const sortedPeople = Person.sort(people, 'age', 'asc');
console.log(sortedPeople);
