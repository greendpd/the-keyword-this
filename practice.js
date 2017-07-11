//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // 'this' is used to reference the calling object.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //

  // 3) What is the difference between call and apply?

      //Answer
      //The format for 'call' is object.function.call(objToBind, arg1, arg2, ...), allowing an arbitrary number of arguments to be passed to the function.
      //The format for 'apply' is object.function.apply(objToBind,[arr])

  // 4) What does .bind do?

      //Answer
      //It creates a new function that uses the bound object to perform the function that was bound.
      //eg, var newFunction=obj1.function.bind(newObj, arg1, arg2,...)


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user={
  username:"Robert",
  email:"bobsawesome@bob.org",
  getUsername:function(){return this.username;}
}


//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
console.log(user.getUsername());

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

function Car(make, model, year){
  this.make=make;
  this.model=model;
  this.year=year;
  this.move=0;
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

function aCar(make, model, year){
  return {
    make:make,
    model:model,
    year:year
  }
}

var prius2=aCar('Toyota', 'Prius', 2011);


//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

var van=new Car('nissan','quest',1997);
//Car.move=5;
var truck=new Car('ford','ranger',2004);
truck.noVal='99 red balloons';

Car.prototype.moveCar=function(){
  this.move+=10;
  return this.move;
}

Car.prototype.color="green";
Car.prop1="something";
var bike=new Car('Suzuki','ninja','2013');

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
console.log(getYear.call(prius));
console.log(getYear.call(mustang));

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  //window.username, which is undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
//window

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
