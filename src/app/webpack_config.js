   module.exports = {
     name: 'products',
     remotes: {
       auth: 'auth@http://localhost:3001/remoteEntry.js',
       cart: 'cart@http://localhost:3002/remoteEntry.js',
     },
     shared: {
       '@angular/core': { singleton: true },
       '@angular/common': { singleton: true },
       '@angular/router': { singleton: true }
     }
   };