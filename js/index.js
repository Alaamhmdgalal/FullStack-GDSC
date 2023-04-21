// alert("Hello World!");

function toggle(here) {
    let x = document.getElementById(here);
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const students = [{
    name: "Alaa",
    age: 22,
    city: "Cairo"
},
{
    name: "Ali",
    age: 20,
    city: "Dahab"
},
{
    name: "Mai",
    age: 40,
    city: "Alex"
}
]

const teacher = {
    name: "Mai",
    age: 40,
    city: "Alex"
}

const numbers = [1, 2, 3, 4]

numbers.forEach(digit => {
    console.log(digit)
})

students.forEach(student => {
    console.log(`Student name: ${student.name}
    Student age : ${student.age}
    Student city: ${student.city}`)
})

for (const index in numbers) {
    console.log(numbers[index])
}

function incrementValue(nums) {
    return nums.map((num) => {
        return num + 1
    })
}

console.log(...numbers)
console.log(incrementValue(numbers))

// console.log(student)