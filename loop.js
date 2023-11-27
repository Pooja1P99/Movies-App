const person = {
    name: 'John',
    age: 30,
    job: 'Engineer'
  };

  Object.entries(person).forEach(function([key, value]) {
    console.log(`${key}: ${value}`)
  });

  Object.entries(person).forEach(([key,value]) => {
    console.log(`${key}: ${value}`)
  })

//   const numbers = [1, 2, 3, 4, 5];
//   const evennum = numbers.filter((num) => {
//     return num>3;
//   })
//   console.log(evennum)



