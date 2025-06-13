const user = {
    username: "smrk",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "smrk"
//     console.log(this.username);
// }

const chai = () => {
    let username = "smrk"
    console.log(this);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1+num2 )

const addTwo = (num1, num2) => ({username: "smrk"})


console.log(addTwo(3,4))

// const myArray = [2, 3, 4, 5, 8]

// myArray.forEach()