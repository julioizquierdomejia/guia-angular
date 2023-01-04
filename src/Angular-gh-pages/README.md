# Haciendo deploy de una app en Angular a GitHub Pages

Muchos de nosotros cuando terminamos un proyecto el cual es solo de frontend queremos compartirlo con personas para que puedan ver nuestros avances o usarlo como portafolio, es por ello que acá te muestro una pequeña guía en donde te muestro paso a paso a hacer un deploy a un host gratuito, está vez lo haremos con GithubPages de Github.

La idea es poder tener un link visual el cual es un dominio de github y que el mismo github nos aloje nuestro proyecto

# Paso 1
## Crear una aplicacion Angular

Nos ubicamos en el directorio en donde tenemos todos nuestros proyectos de Angular y ejecutamos el siguiente comando para crear un nuevo proyecto de angular, para efectos de pruebas le pondremos angular-hg-pages
``````js
ng new angular-hg-pages
``````

El proyecto demora en crearse unos minutos dependiendo de la conexión a internet que tengamos, lo que siempre recomiendo es que mientras se ejecuta la creacion de nuestro peoyecto angular, podemos ir creando el repositorio en nuestra cuenta de Github

# Paso 2
## Crear el repositorio en GitHub

Ingresamos a [Github](https://github.com/) para cerar nuetro repositorio.

<img :src="$withBase('/img/home-github.png')">

Luego le damos al boton verde

<img :src="$withBase('/img/nuevo-repositorio.png')">

::: tip
Una vez dentro colocamos un nombre a nuestro repositorio, siempre recomiendo utilizar el mismo nombre del peoyecto que hemos creado, corto y simple apra que sea de facil acceso, es por que que hay que pensar bien el nonmbre del proyecto que se le va a colocar al mismo desde su creación en angular
:::

Colocamos el nombre del repositorio y luego abajo le damos al boton crear
<img :src="$withBase('/img/crear-repositorio.png')">

::: tip
Es importante que se cree el repositorio como public
:::

# Paso 3
## Vinculamos nuestro proyecto local a nuestro repositrio remoto de GitHub

una vez creado el proyecto de Angular ingresamos a la carpeta del proyecto 

``````js
cd angular-hg-pages
``````

una vez dentro de la carpeta del proeycto debemos de correr lso siguiente comandos para poder vincular el proyecto a nuestro repositorio

``````js
git remote add origin https://github.com/julioizquierdomejia/angular-hg-pages.git
git branch -M main
git push -u origin main
``````

:::tip
Recordemos que en el codigo de arriba esta con mi repositorio de ejemplo, uds deben de hacerlo con su propio repositorio que han creado
:::


# Paso 4
## Revisamos que nuestra aplicacion en nuestro ambiente local este creada de manera satisfactoria

Corremos la siguiente sentencia en nuestra terminal para ver nuestor proyecto local

``````js
ng serve -o
``````

Si no hemos modificado nada deberiamos ver lo siguiente
<img :src="$withBase('/img/app.png')">

# Paso 5
## Ahora si veremos como hacer un Deploy a GitHub Page - dependencia node

Primero vamos a isntalatar una dependencia de Node 

``````js
npm i angular-cli-ghpages
``````

# Paso 6
## Ahora si veremos como hacer un Deploy a GitHub Page - Add la dependencia a nuestro proyecto

Luego de ello debemos añadir la dependeicia de node a nuestro proyecto de angualar

``````js
ng add angular-cli-ghpages
``````

Luego de ello solo para comprobrar debio agregar las siguientes lineas a nuestro archivo angular.json
<img :src="$withBase('/img/angularjson.png')">

# Paso 7
## Vamos a hacer el deploy de nuestor proyecto
Antes de iniciar hay qeue saber unas cuantas cosas

:::tip
Todos los usuarios de GitHub tenemos una ruta base en donde se van a publicar nuestras Paginas de Git
y tienen la siguiente estructura

* https://

* Seguido de nuestro nombre de usuario en mi caso mi nombre de usuario es **julioizquierdomejia**

* Seguido de esto debemos de colocar **.github.io**, 

* Quedando asi nuestra direccion base de nuestras paginas en GitHub **_`https://julioizquierdomejia.github.io/`_**
:::

Una vez que tengamos muy claro ese punto tambien tenemos que tener a la mano el nombre de nuestro repositorio si recuerdan el mio de prueba se llama **angular-hg-pages** ya que esto le debemos de agregar al final de nuestra base para el href al crear nuestro deploy

Ahora si Manos a la obra

corramos el siguiente comando 
``````js
ng deploy --base-href=https://julioizquierdomejia.github.io/angular-hg-pages/
``````

:::danger
Recuerden **cambiar** su **nombre de usuario** y el **nombre de su repositorio**
No olviden, al final de su nombre de github.io
:::

finalmente debemos de tener en la terminal el siguiente resultado
<img :src="$withBase('/img/resultado.png')">

Luedo de unos minutos ingresamos a [Github](https://github.com/) y le damos al menu **Settings**

<img :src="$withBase('/img/menu.png')">

Luego al menu Pages

<img :src="$withBase('/img/page.png')">

y en el resultado de la derecha debemos de ver como ya se generó el link para visitar nuestra app de angualr on line

<img :src="$withBase('/img/public.png')">

Y ahora podran compartir la siguiente direccion de su sitio web y sera público
<img :src="$withBase('/img/final.png')">

:::tip
Siempre mantener su repositorio actualizado con **git push origin main**

Sin embargo cuando quieran actualizar su git page deberan correr el comando del deploy
:::