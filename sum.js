/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/

const calculate = (num1, num2) => {
  const sumOfNums = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(num1 + num2)
    },500)
    if (num1 < 0 || num2 < 0) {
      reject('negetive nazan khoshgele , positive bash !!!');
    }
  });
  sumOfNums
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      alert(error);
    });
};

// calculate(2,5);
