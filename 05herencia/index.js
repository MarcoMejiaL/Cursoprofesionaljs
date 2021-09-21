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
console.log(bebe2)