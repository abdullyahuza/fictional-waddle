
/************************************
  using the node readline module
*************************************/
var readline = require('readline')

// initiate the interface
readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("Welcome to my JS CLI calculator")
console.log(`1. Addition\n2. Subtraction\n3. Multiplication\n4. Division`)  
readline.question("What do you wanna do today?: ", choice => {

  if(choice == 1){

    readline.question("Enter the numbers separated with comma(optional): ", numbers => {
      numbers = numbers.split(',')
      int_numbers = numbers.map(e => parseInt(e))

      sum = 0
      for(let i=0; i<int_numbers.length; i++){
        sum = sum + int_numbers[i]
      }
      console.log("Sum:", sum)
      readline.close()
    })

  }
  else if(choice == 2){

    readline.question("Enter the first number: ", fnumber => {
        
      readline.question("Enter the second number: ", snum => {
        snum = parseInt(snum)
        console.log("Difference: ",fnumber - snum)
        readline.close()
      })
      
    })

  }
  else if(choice == 3){
    readline.question("Enter the numbers separated with comma(optional): ", numbers => {
      numbers = numbers.split(',')
      int_numbers = numbers.map(e => parseInt(e))

      product = 1
      for(let i=0; i<int_numbers.length; i++){
        product = product * int_numbers[i]
      }
      console.log("Product:", product)
      readline.close()
    })    

  }
  else if(choice == 4){
    readline.question("Enter the first number: ", fnumber => {
      readline.question("Enter the second number: ", snum => {
        if((fnumber/snum) === Infinity || snum < 1){
            console.log("Invalid Division")
            readline.close()
            process.exit(0)
        }    
        snum = parseInt(snum)
        console.log("Quotient: ",fnumber / snum)
        readline.close()
      })
      
    })

  }
  else{
    console.log(`Invalid choice`)
    readline.close()
    readline.close()
  }
})
