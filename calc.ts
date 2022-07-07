import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/'

function main (): void 
{
  const firstStr: string = question('Enter a number:\n')
  const operator: string = question('Enter an operator:\n')
  const secondStr: string = question('Enter a second number:\n')

  // const firstNum = isNumber(firstStr)
  // console.log(firstNum);

  const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr)
  // console.log(validInput);

  if (validInput) 
  {
    // console.log(validInput);
    const firstNum: number = parseInt(firstStr)
    const secondNum: number = parseInt(secondStr)
    const result = calculate(firstNum, operator as Operator, secondNum)
    console.log('The result is:', result);
  }
  else
  {
    console.log('\ninvalid input\n');
    main()
  }
}

function calculate(firstNum:number, operator: Operator, secondNum: number)
{
  switch (operator) {
    case '+':
      return firstNum + secondNum
    case '-':
      return firstNum - secondNum
    case '*':
      return firstNum * secondNum
    case '/':
      return firstNum * secondNum
  }
}

function isOperator(operator: string): boolean 
{
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':     
      return true
      default:
        return false
  }
}


function isNumber(str: string): boolean
{
  const maybeNum = parseInt(str)
  const isNum: boolean = !isNaN(maybeNum)
  return isNum
}

main()