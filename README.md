# Entrega Final

### Entrega final del curso de Programacion Backend de Coder House
#### Esta entrega contempla lo visto en el resto de las entregas del curso
#### https://chbam.herokuapp.com/
    
    npm run prd-server -> "prd-server": "nodemon --inspect ./src/server.js",
    npm run tst-server -> "tst-server": "nodemon --inspect ./src/server.js -p 8008",
    npm run test       -> "test": "jest",
    npm run report     -> "report": "jest --no-color 2>./test-reports/test-report.txt"
  
#### Se comprueba el correcto funcionamiento del sistema de signup/login/logout, donde el usuario podra darse de alta en el sistema (el alta del nuevo usuario notifica al mismo a traves de un mail con sus datos), guardando su usuario con contraseńa cifrada en la base de datos Mongo DB Atlas. Estos datos son recuperados posteriormente desde la base de datos al momento de realizar el nuevo login.
