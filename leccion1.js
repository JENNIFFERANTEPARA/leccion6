 /*Lección 1: Introducción a Lenguaje Formal
Ejercicio
● Crear un archivo html
● Crear un archivo js, que se guarde en la misma carpeta que el
archivo html
● En el archivo js, escribe las instrucciones necesarias para que se
muestre “Hola mi nombre es…tu nombre…este es mi primer
script”
● En el archivo html, vincula en archivo js para que este se ejecute
  
    **/
<script>

    let nombre = prompt('Ingrese su nombre completo');
    let contador_palabras = nombre.split(' ');
    console.log(contador_palabras);

    console.log(`Hola mi nombre es: ` + nombre + ` este es mi primer scrip.`);

</script>
