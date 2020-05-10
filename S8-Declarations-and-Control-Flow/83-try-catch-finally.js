function run(input) {
  try {
    throw 42;
  } 
    catch(e) {
    console.log(e)
  } 
    finally {
    console.log(true);
  }

}
  
  run(5);