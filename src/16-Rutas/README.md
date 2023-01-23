# 16 - RUTAS - Routing
<img :src="$withBase('/img/cabecera-rutas.png')">

Angular cuenta con un poderoso y sencillo sistema de rutas, el cual nos permite a los desarrolladores poder tener un mejor control y mayor dominio del tema, facilitando tareas 

## Consideraciones

Para poder tener un sistema de rutas y navegacion debemos de tener las siguientes consideraciones

* Lo mejor es que al crear un proyecto de angular desde cero consideremos en tener rutas en nuestro desarrollo
* Lo que siempre se debe de hacer en todo proyecto es tener en cuenta el alcance de los artefactos en todo el proeycto
* Considerar los paquetes relacionados a rutas y tenerlos importados en TS del módulo en donde se encuentra el componente que lo necesite
* Configurar el archivo del módulo de rutas

## Primeras Pasos

Al momento de crear el proyecto deberiamos de crearlo aceptando las rutas 

```js
ng new nombre_del_proyecto
```

Al momento de crear un proyecto sl CLI de angualar, preoguntará si queremos tener rutas en nuestro proycto y les decimos que si


```js
Would you like to add Angular routing? (y/N)
```


Antes de iniciar con el desarrollo en si, tenemos que tener bien configurado el proyecto

## Manos a la obra

una vez creado el proyecto para neustro ejercicio vamos a crear dos módulos **PageModule** y **ComponentsModules**
para eso corremos los siguiente comando dentro de neustra carpeta del proyecto

```js
ng generate module pages
ng generate module conponents
```

ahora vamos a crear **HomeComponent**  **ServiciosComponent**  **PortafolioComponent**  **ContactosComponent** como conponentes dentro del módulo pages

```js
ng generate components pages/home
ng generate components pages/servicios
ng generate components pages/portafolio
ng generate components pages/contactos
```

ahora vamos a crear **HeaderComponent** y **footerComponent** como conponentes dentro del módulo components

```js
ng generate components components/navbar
ng generate components components/footer
```

:::tip
**Siempre** y antes de iniciar a desarrollar un proyecto hay que vincular los archivos de módulo a módulo
el **app.module.ts** de de tener importado los otros módulos, y cada uno de los módulos deben de exportar sus compoentes para que puedan ser alcanzados por el modulo toor **app.module.ts**
:::