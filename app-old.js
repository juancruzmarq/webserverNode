const http = require('http');

http.createServer( (req,res ) =>{
    
    // console.log(req);
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/json'});

    // const persona ={
    //     id: 1,
    //     nombre: 'Juan'  
    // }

    // res.write('id, nombre\n');
    // res.write('1, Juan\n');
    // res.write('2, Carla\n');
    // res.write('3, Sandro\n');
    // res.end();

    // res.write(JSON.stringify(persona));
    // res.write('Hola Mundo');
    // res.end();
    

    res.write('Hola Mundo');
    res.end();
})
.listen(8000);
console.log('Escuchando el puerto', 8000);
