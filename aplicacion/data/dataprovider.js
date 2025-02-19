var temporal_data = [
    {
        "nombre": "Castillo de Neuschwanstein",
        "pais": "Alemania",
        "latitud": 47.5576,
        "longitud": 10.7498
    },
    {
        "nombre": "Castillo de Chambord",
        "pais": "Francia",
        "latitud": 47.6160,
        "longitud": 1.5170
    },
    {
        "nombre": "Castillo de Windsor",
        "pais": "Reino Unido",
        "latitud": 51.4839,
        "longitud": -0.6044
    },
    {
        "nombre": "Castillo de Bran",
        "pais": "Rumania",
        "latitud": 45.5150,
        "longitud": 25.3670
    },
    {
        "nombre": "Castillo de Edinburgh",
        "pais": "Escocia",
        "latitud": 55.9486,
        "longitud": -3.2008
    },
    {
        "nombre": "Castillo de Praga",
        "pais": "República Checa",
        "latitud": 50.0911,
        "longitud": 14.4016
    },
    {
        "nombre": "Castillo de Alhambra",
        "pais": "España",
        "latitud": 37.1760,
        "longitud": -3.5889
    },
    {
        "nombre": "Castillo de Hohenwerfen",
        "pais": "Austria",
        "latitud": 47.4833,
        "longitud": 13.1889
    },
    {
        "nombre": "Castillo de Malbork",
        "pais": "Polonia",
        "latitud": 54.0397,
        "longitud": 19.0279
    },
    {
        "nombre": "Castillo de Kilkenny",
        "pais": "Irlanda",
        "latitud": 52.6506,
        "longitud": -7.2492
    },
    {
        "nombre": "Castillo de Carcasona",
        "pais": "Francia",
        "latitud": 43.2064,
        "longitud": 2.3636
    },
    {
        "nombre": "Castillo de Segovia",
        "pais": "España",
        "latitud": 40.9525,
        "longitud": -4.1325
    },
    {
        "nombre": "Castillo de Eilean Donan",
        "pais": "Escocia",
        "latitud": 57.2739,
        "longitud": -5.5161
    },
    {
        "nombre": "Castillo de Buda",
        "pais": "Hungría",
        "latitud": 47.4960,
        "longitud": 19.0396
    },
    {
        "nombre": "Castillo de Chenonceau",
        "pais": "Francia",
        "latitud": 47.3249,
        "longitud": 1.0702
    }
]

var usuarios = [
    {
        "nombre":"Administrador",
        "pwd":"264975"
    },
    {
        "nombre":"UnVerified",
        "pwd":"813297"
    }
]

function getByIndex(index){
    return temporal_data[index];
}

function findAll(){
    return temporal_data
}

function userList(){
    return usuarios
}

function getUserByName(name){
    return usuarios.filter(usuario => usuario.nombre === name)
}

function checkPwd(insertedName, insertedPwd) {
    const user = getUserByName(insertedName)[0]
    if (user) {
        return user.pwd === insertedPwd
    }
    return false
}

function add(data){
    temporal_data.push(data)
}

function removeAt(pos){
    temporal_data.splice(pos,1)
}

module.exports = {
    getByIndex,
    findAll,
    add,
    removeAt,
    userList,
    checkPwd
}