# 22-Login-Auth-FireBase

Realizaremos un sistema de Login en angular, utilizando formualrios ractivos, y utilizando como base de datos en la la nube Firebase, tomando en cuenta la potente libreria de Angular que nos faciita la conexión con tal servicio, pudiendo tener un registro de usuario, un sistema de login y Logout y autentication

## Preparación de nuestro ambiente de trabajo

Creamos nuestro proyecto 
```js
ng new autentication
```

:::tip
Como buena practica **Siempre** mientras se va creando nuestro proyecto de angular, hay que ir preparando nuestro repositorio en gitHub
:::

Creamos nuestros módulos y componentes segun la arquitectura que esten manejando

### creación de módulos
```js
ng g m components
ng g m pages
```

### creación de componentes
```js
ng g c components/header
ng g c components/login
ng g c components/register

ng g c pages/home
```

## FireBase

Ingresamos a [FireBase](https://firebase.google.com/) para cerar nuetro proyecto en FireBase.

<img :src="$withBase('/img/homeFireBase.png')">

le damos click encomenzar y luego veremos la pantalla para poder crear proeyctos
en esta ventana le damos a + Agregar Proyecto
<img :src="$withBase('/img/fire_crearProeyctos.png')">

Nos pedirá el nombre de nuestro proyecto, le pondremos Angular y luego le damos continuar
<img :src="$withBase('/img/fireBase_Npmbre_proyecto.png')">

Previo a la creacion denuestro proyecto en firebase, nos preguntará si queremos activar el google analitics, para efecto de nuestro ejemplo vamos a desactivar esa opcion y luego le damos click a continuar
<img :src="$withBase('/img/firebase_analitics.png')">

A continuación esperemos que empiece a crear nuestro proyecto
<img :src="$withBase('/img/fireBase_creanso proyecto.png')">

Al finalizar le damos continuar y luego ingrsaremos al dashboard y veremos la siguiente pantalla
<img :src="$withBase('/img/firebase_agregar_app.png')">

y lo que hacemos es hacer click en el siguiente icono para crear nuestra app dentro del proyecto angular que hemos creado
<img :src="$withBase('/img/fireBase_crear_app.png')">

FireBase nos hara una seria de preguntas divida en pasos para poder configurar nuestra app dentro del proyecto que hemos creado
Vamos a colocarle un nombre a nuestra APP, para el ejemplo le vamos a poner **autentication**
<img :src="$withBase('/img/firebase_code_paso1.png')">

Luego que le dimos siguiente al paso 1 nos mostrara la siguiente pantalla con el siguiente codigo el cual nos servirá para configurar nuestro angular para la conxion con fireBase,
<img :src="$withBase('/img/firebase_code_paso2.png')">

:::tip
No, necesitas copiar ese codigo, mas adelante podremos acceder a el
:::

En este punto debemos de ir a nuestra consola y correr el sieguiente comando

```js
npm install firebase
```

A contonuacion junto con el paso 3 de firebase debemos correr el siguiente codigo
<img :src="$withBase('/img/firebase_code_paso3.png')">


```js
npm install -g firebase-tools
```

Para finalizar iremos al punto 4 de nuestra creacion de app en la web de firebase
<img :src="$withBase('/img/firebase_code_paso4.png')">

en este punto iremos a nuestra terminal y debemos logearnos en firebase desde nuestro proyecto 
```js
firebase login
```

Bien ahora lo que debemos de hacer es añadir el paquete de fire a angular y eso lo hacemos con el siguiente comando

```js
ng add @angular/fire
```

A continuación nos va a preguntar que es lo que queremos hacer com ven en la imagen nos mostrara un menu en la que por defcto esta seleccionada la opción de deploy, para seleccionar y deseleccionar una opcion utilizaremos la barra espaciadora y para elegir alguna otra opcion usaremos las flechas del teclado.
en esta oportunidad escogeremos la opción autentication

<img :src="$withBase('/img/fire_add_paso1.png')">


Lo que nos solicitará ahora es que nos identifiquemos elijamos el correo con el que nos hemos logeado

<img :src="$withBase('/img/fire_add_paso2.png')">

Anhora nos pedirá que escojamos el proeycto que previamente hemos creado en la pagina de fireBase, tambien tenemos la opcionón de poder crear aqui mismos en el CLI de fire el proyecto, de momento elijamos el proyecto previamente creado
<img :src="$withBase('/img/fire_add_paso3.png')">

ahora vamos a escoger el app que hemos creado dentro de nuestro proyecto

<img :src="$withBase('/img/fire_add_paso4.png')">

:::danger
**Advertencia**
Desde la versión 15. de angular en adelante, ya no vienen lso archivos de entornos por defecto **enrironment** por tal motivo devemos de crearlos manualmente como se muestra a continuación
:::

Para crear el archivo de variables de entorno **environment** lo haremos con el siguiente comando
```js
ng g e environments/environment
```

este archivo sera creado en la siguiente ruta

```js
> nuestroProeycto/src/app/environments/environment.ts
```

y debemos de moverlo un nivel antes, quedando en esta ubicación
```js
> nuestroProeycto/src/environments/environment.ts
```

:::tip
Una vez creado y movido de ubicación al archivo envionment, volveremos a correr el comando enla terminal ng add @angular/fire
:::

## Preparacion del archivo environment.ts y el archivo app.module

### Archivo 

Primero nos vamos a dirijir a la pagina de FireBase y en la parte superior izquierda hay una icono de una rueda de engranaje de configuracion hacer click ahi 

<img :src="$withBase('/img/rueda_preferencia.png')">

Una vez dentro veremos en la parte inferior del cuadro de configuración veremos un codigo tenemos que seleccionar las variables de entorno y copiarlas

<img :src="$withBase('/img/codigo_enviroment.png')">

ahora vayamos al archivo que hemos creado previamente y colocamos el siguiente codigo
```js
> nuestroProeycto/src/environments/environment.ts
```

y copiamos las variales de entorno dentro del objeto `firebase:{}`

```js
export const environment = {
  firebase: {
    apiKey: "AIzaSyDBGnnPzvJ7yQOTPx7Fd6ld4cHFVyT38ig",
    authDomain: "angular-7e5af.firebaseapp.com",
    projectId: "angular-7e5af",
    storageBucket: "angular-7e5af.appspot.com",
    messagingSenderId: "769746038216",
    appId: "1:769746038216:web:85e02d723d61b8defc64fd"
  },
}
```

Ahora modifiquemos el archivo **app.module.ts** leer los comentarios del código

```ts
//Agregar estos imports
import { environment } from './environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';

//Tabbien agregar esta constante de config
var config = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  projectId: environment.firebase.projectId,
  storageBucket: environment.firebase.storageBucket,
  messagingSenderId: environment.firebase.messagingSenderId,
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //en la seccion de Imports agregar estas dos lineas
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Ahora si volvemos a correr el comando

```js
ng add @angular/fire
```
y no tedrás problema 

## Creación y preparación de formularios en Angular

### Preparar el archivo register.component.ts
1. Vamos a crear un archivo de servicio desde la consola
```ts
ng g s services/user
```

### Preparar el archivo register.component.ts

2. Lo primero que hay que hacer es tener las siguientes importaciones 

```ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
```

Creamos una varible de tipo **FormGrup** para anexar a esta variable nuestro formulario

```ts
export class RegisterComponent implements OnInit {

  formReg!: FormGroup;

}

```
Ahora inyectamos en el constructor una variable de tipo servicio y lo anexamos al archivo de userService que hemos creado con anticipación, y tambien creamos un variable de tipo router para poder hacer la navegacion y redireccionamientos

```ts
export class RegisterComponent implements OnInit {

  formReg!: FormGroup;

  constructor(
    private userservice:UserService,
    private router:Router,
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }
}

```

Dentro del **constructor** vamos a instanciar las variables que vienen del formulario por medio de la variable tipo formGroup

```ts
export class RegisterComponent implements OnInit {

  formReg!: FormGroup;

  constructor(
    private userservice:UserService,
    private router:Router,
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }
}

```

### Creacion de formaurio en el template html - Register
```html
<form [formGroup]="formReg" (ngSubmit)="onSubmit()">
    <div>
        <div class="my-3">
            <label for="email">Email</label>
        </div>
        <div>
            <input type="text" name="email" placeholder="Ingrese correo" class="px-4 py-2 rounded-lg" formControlName="email">
        </div>
    </div>

    <div class="mt-6">
        <div class="my-3">
            <label for="password">Pasword</label>
        </div>
        <div>
            <input type="password" name="password" placeholder="Ingrese password" class="px-4 py-2 rounded-lg" formControlName="password">
        </div>
    </div>

    <div>
        <button class="rounded-lg bg-blue-500 text-blue-900 px-6 py-2 my-6 hover:bg-blure-800 hover:text-white">Registrar</button>
    </div>
</form>
```

:::tip
**Importante**
Quitar el Action en la etiqueta form y colocar el

`[formGroup]="formReg"`

:::

:::tip
**Importante**
Para que el formGroup del archivo TS reconozca los campos

`[formGroup]="formReg"`

:::

```html
<input type="text" name="email" placeholder="Ingrese correo" class="px-4 py-2 rounded-lg" formControlName="email">
<input type="password" name="password" placeholder="Ingrese password" class="px-4 py-2 rounded-lg" formControlName="password">
```

en el boton de registrar le colocamos el decorador click de angular que llame a una funcion llamada onSubmit()

```html
 <button (click)="onSubmit()">Registrar</button>
```

Ahora en el archivo register.component.ts vamos a crear la funcion para el click de este formulario onSubmit

```ts
  onSubmit(){
    this.userservice.register(this.formReg.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch(error =>  console.log(error))
    
  }

```

Como podemos ver en el codigo anterior dentro del archivo unserService, hay un metodo register el cual recibe un objeto
el cual veremos a continuación

```ts
register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
}
```

Previamente a esta funcion debemos tener las sieguientes importaciones en la cabecera del archivo de servicios

```ts
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
```

finalmente, el archivo completo con las fucniones de Registrar, login y logout queda de la siguiente forma


```ts
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private auth:Auth ) { }


  registerUser({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

}

```

El proyecto completo lo pueden descargar de 

[Proyecto](https://github.com/julioizquierdomejia/angular-autentecate.git)
[Link Visual](https://julioizquierdomejia.github.io/angular-autentecate/login)