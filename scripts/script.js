function fname() {
  console.log('hello')
  
  return function inner() {
    console.log("hii")
  }
}
fname();