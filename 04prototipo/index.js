/* function Hijas(name,age){
    const bebes ={
        name:name,
        age:age
    }


bebes.saludar=function(){
    console.log(`hola mi nombre es: ${this.name} y mi edad es de ${this.age}` )
}
return bebes;
}
const bebe =Hijas("barbara" ,10)
bebe.saludar()
const bebe2= Hijas("elis" , 3);
bebe2.saludar();
 */
/* const metodos ={
    saludar: function(){
        console.log(`hola mi nombre es: ${this.name}` )
}
}
function Hijas(name){
    const bebes ={
        name:name,
    };  
    bebes.saludar = metodos.saludar;
return bebes;
}


const bebe =Hijas("barbara" ,10)
bebe.saludar()
const bebe2= Hijas("elis" , 3);
bebe2.saludar(); */
/* ------------------------------------ */
/* const metodos ={
    saludar: function(){
        console.log(`hola mi nombre es: ${this.name}` )
}
} */
/* function Hijas(name){
    const bebes = Object.create(Hijas.prototype);
    bebes.name = name;
    return bebes;
}
Hijas.prototype.saludar = function(){
    console.log(` soy bebe ${this.name}`)
}


const bebe =Hijas("barbara" ,10)
bebe.saludar()
const bebe2= Hijas("elis" , 3);
bebe2.saludar(); */
function Hijas(name, edad){
    /* const bebes = Object.create(Hijas.prototype); */
    this.name = name;
    this.edad= edad;
    /* return bebes; */
}
Hijas.prototype.saludar = function(){
    console.log(` soy bebe ${this.name} y tengo ${this.edad}`)
}


const bebe = new Hijas("barbara" ,10)
bebe.saludar()
const bebe2= new Hijas("elis" , 3);
bebe2.saludar();