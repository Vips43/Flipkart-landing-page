function func(name,age) {
  return{
  name: name,
  age: age,
  greet: function(){
    console.log(`hello my name is ${this.name} and my age is ${this.age} .`)
  }
  }
}

const p = func('vipul', 27);
const p2 = func('jay', 28)
p.greet();
p2.greet();