/* 
* create a new firebase projects in console.firebase.google.com
* npm install firebase
* create firebase.init.js & initializa firebase into it. then import getAuth into firebase.init.js as well as export auth.
* Firebase project settiongs> authentication> enable email and password auth.
* create login, sign up components and setup route.
* attach form field handler and form submit handler.
* npm install --save react-firebase-hooks
* useCreateUserWithEmailAndPassword(auth) from react-firebase-hooks.
* if user is created then redirect to expected page by using useNavigate() hook.
* useSignInWithEmailAndPassword(auth) from react-firebase-hooks to sign in.
* go to reactrouter.com>authentication> open stackbliz.
* create RequireAuth component > check user exist? also track user location
* in route into element protected component is being wrapped by RequiredAuth component.
*/

/* 
   Firebase hosting Steps:
* npm install -g firebase-tools (one time, first time from one computer)
* firebase login (one time, first time from one computer)
* firebase init (for each project one time)
* npm run build (build yor project, everytime you want to deploy(example: after modification))
* firebase deploy (everytime you want to deploy(example: after modification))
*/