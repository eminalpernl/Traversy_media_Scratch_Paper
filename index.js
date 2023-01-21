// const express = require('express');

// const app = express();

// const PORT =  process.env.PORT || 5000;

// app.get('/', (req, res)=>{
//     console.log(req.protocol, 'super important');
//     res.send('naper');
// })

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));


//----------------------------------------------------------

// const express = require('express');

// const app = express();

// const PORT =  process.env.PORT || 5000;

// app.get('/', (req, res)=>{
//     console.log(req.protocol, 'super important');
//     res.send('<html><h1>Bu sekilde direkt olarak html kodu yazilabilir</h1></html>');
// })

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));


//----------------------------------------------------------



// const express = require('express');
// const path = require('path');

// const app = express();


// app.get('/', (req, res)=>{

//     res.sendFile(path.join(__dirname, 'public', 'index1.html'));
// })

// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));


//-----------------------Set static folder-----------------------------------


// With Express.js we can make directory we wanted static. And this way we dont
// have to create routing code for every single file.This is not ideal becauese we have to
// put a route manually for every single page. If we want just a static server that serves
// just html, css, imagess staff like that, Express comeswith a functionality to make a certain folder
// which is a static folder. ANd we want to make this folder public


// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static(path.join(__dirname,'public')))
// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));




//-----------------------ADding GET routes wit a dumy API------------------------------------


// const express = require('express');
// const path = require('path');

// const app = express();

// const members = [       //we added here a dummy API
//     {
//         id:1,
//         name:'ahmet hamdi',
//         email: 'ahmethamdi@gmail.com',
//         status: 'active'
//     },
//     {
//         id:2,
//         name:'sait faik',
//         email: 'saitfaik@gmail.com',
//         status: 'active'
//     },
//     {
//         id:3,
//         name:'omer seyfettin',
//         email: 'omerseyfettin@gmail.com',
//         status: 'active'
//     }
// ];

// app.get('/api/members', (req,res)=>{        // when we make a request through the Postman app,
//     res.json(members);                      // it gives the members json file to us.
// })

// app.use(express.static(path.join(__dirname,'public')))
// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));

//-----------------------ADding GET routes wit a dumy API 2------------------------------------

// --------NOT: Here we put the members in a seperate js file and called it as a module.

// const express = require('express');
// const path = require('path');

// const app = express();

// const members = require('./members.js');

// app.get('/api/members', (req,res)=>{        // when we make a request through the Postman app,
//     res.json(members);                      // it gives the members json file to us.
// })

// app.use(express.static(path.join(__dirname,'public')))
// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));




//-----------------------Simple Middleware logger------------------------------------

// NOT: Here we put the members in a seperate js file and called it as a module and added moment module.

// const express = require('express');
// const path = require('path');
// const members = require('./members.js');
// const app = express();
// const moment = require('moment');

// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
//     next()
// }

// app.use(logger);



// app.get('/api/members', (req,res)=>{        // when we make a request through the Postman app,
//     res.json(members);                      // it gives the members json file to us.
// })

// app.use(express.static(path.join(__dirname,'public')))
// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));

//-----------------------Simple Middleware logger------------------------------------

// NOT: Here we put the logger in a seperate js file and called it as a module.

// const express = require('express');
// const path = require('path');
// const members = require('./members.js');
// const app = express();
// const logger = require('./public/middleware/logger');


// // initial logger middelware
// app.use(logger);

// // gets all members
// app.get('/api/members', (req,res)=>{        // when we make a request through the Postman app,
//     res.json(members);                      // it gives all the members json file to us.
// })

// app.use(express.static(path.join(__dirname,'public')))
// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));



//-----------------------get a single member------------------------------------



// const express = require('express');
// const path = require('path');
// const members = require('./members.js');
// const app = express();
// const logger = require('./public/middleware/logger');


// // initial logger middelware
// app.use(logger);

// // get a single member
// app.get('/api/members/:id',(req, res)=>{
//     res.json(members.filter(member => member.id===parseInt(req.params.id))) //req.params.id string,
// })                                                                //member.id ise number oldugu icin
//                                                                   //that is why we use parseInt()

// // gets all members
// app.get('/api/members', (req,res)=>{        // when we make a request through the Postman app,
//     res.json(members);                      // it gives all the members json file to us.
// })

// app.use(express.static(path.join(__dirname,'public')))
// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));


// when we make a request through the Postman we get the filtered member as a response.


//-----------------------get a single member and adding array.some() methods------------------------------------


// //with .some() methods we can take message saying "there is no member with this ID"


// const express = require('express');
// const path = require('path');
// const members = require('./members.js');
// const app = express();
// const logger = require('./public/middleware/logger');


// // initial logger middelware
// app.use(logger);

// // get a single member


// app.get('/api/members/:id',(req, res)=>{

//     const found = members.some(member=>member.id === parseInt(req.params.id));
// if (found) {
//     res.json(members.filter(member => member.id===parseInt(req.params.id)))
// } else {
//     res.status(400).json({ msg: `No member with this ID of ${req.params.id}` })
// }})

// // when we make a request through the Postman (http://localhost:5000/api/members/3), 
// // It gives us single member if there is member with this parameter, If there is no 
// // member of this parameter than it gives us a message and  400 http status code which is bad request.


// // gets all members
// app.get('/api/members', (req,res)=>{        // when we make a request through the Postman app,
//     res.json(members);                      // it gives all the members json file to us.
// })

// app.use(express.static(path.join(__dirname,'public')))
// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));




//-----------------------get a single member and adding array.some() methods------------------------------------

// after  this we've added POST routing to the members.js file (https://youtu.be/L72fhGm1tfE?t=2497)

// const express = require('express');
// const path = require('path');
// const app = express();
// const logger = require('./public/middleware/logger');

// // initial logger middelware
// app.use(logger);

// // Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));



// // use static folder
// app.use(express.static(path.join(__dirname,'public')))

// app.use('/api/members', require('./routes/api/members'))

// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));

// //----------------------- create new member(https://youtu.be/L72fhGm1tfE?t=2700)-------------------------------


// const express = require('express');
// const path = require('path');
// const app = express();
// const logger = require('./public/middleware/logger');

// // initial logger middelware
// app.use(logger);

// // Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));



// // use static folder
// app.use(express.static(path.join(__dirname,'public')))

// app.use('/api/members', require('./routes/api/members'))

// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));



//----------------------- update and delete member(https://youtu.be/L72fhGm1tfE?t=3021)-------------------------------

// NOt; for this we are making changes at member.js file

// const express = require('express');
// const path = require('path');
// const app = express();
// const logger = require('./public/middleware/logger');

// // initial logger middelware
// app.use(logger);

// // Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));



// // use static folder
// app.use(express.static(path.join(__dirname,'public')))

// app.use('/api/members', require('./routes/api/members'))

// const PORT =  process.env.PORT || 5000;

// app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));


//----------------------- express-handlebars(https://youtu.be/L72fhGm1tfE?t=3570)-------------------------------

// NOt; for this we are making changes at member.js file

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const logger = require('./public/middleware/logger');
const members = require('./Members');

// initial logger middelware
app.use(logger);

// Handlebars middlewares

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Members App',
        members
});
});

// use static folder
app.use(express.static(path.join(__dirname,'public')))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

const PORT =  process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`server started on this ${PORT}`));