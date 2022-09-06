let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
	
  if(customerData.visits > 2){
    greeting = `Welcome back,${firstName}! So glad to see you again!`
  } else if(customerData.visits == 2){
    greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`
  } else if(customerData.key = undefined){
    greeting = 'Welcome! Is this your first time?'
  }
	
  return greeting;
}
let output = greetCustomer('Joe');
console.log(output);
