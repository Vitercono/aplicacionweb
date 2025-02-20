var temporal_data = [
    {
        "nombre": "Castillo de Neuschwanstein",
        "pais": "Alemania",
        "latitud": 47.5576,
        "longitud": 10.7498,
        "descripcion": "Un icónico castillo de cuento de hadas situado en los Alpes bávaros, construido por el rey Luis II de Baviera.",
        "imagen": "https://imgs.search.brave.com/90oDBgSo5GUIpXmSEOMM9iGt7_NLd3CaahGndG7uU7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbW1h/amFuZWV4cGxvcmVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMS9VbnRp/dGxlZC1kZXNpZ24u/cG5nLndlYnA"
    },
    {
        "nombre": "Castillo de Chambord",
        "pais": "Francia",
        "latitud": 47.6160,
        "longitud": 1.5170,
        "descripcion": "Uno de los castillos más reconocibles del mundo debido a su arquitectura renacentista francesa única.",
        "imagen": "https://imgs.search.brave.com/3CnUxsBtWoNcB3cpGeQG-wEk-DvqWyhRPifentwrrM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/Nzc0MTUwL3Bob3Rv/L2NoYW1ib3JkLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZVp5UHB5/YWxYZ0M1R2tFTXNQ/cmpkRnFLVGNaMjNU/aGFiNDg2ZzZuc2xR/MD0"
    },
    {
        "nombre": "Castillo de Windsor",
        "pais": "Reino Unido",
        "latitud": 51.4839,
        "longitud": -0.6044,
        "descripcion": "El castillo habitado más antiguo y grande del mundo, residencia oficial de la Reina Isabel II.",
        "imagen": "https://imgs.search.brave.com/AQrEBRs4qg1afn-yQzmSsZcZsmceV5oitPJb4TnMwtI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2luZHNvcmdyZWF0/cGFyay5jby51ay93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My9BZXJpYWwtdmll/dy1vZi1XaW5kc29y/LUNhc3RsZS4tTWFz/dGhlYWQuanBn"
    },
    {
        "nombre": "Castillo de Bran",
        "pais": "Rumania",
        "latitud": 45.5150,
        "longitud": 25.3670,
        "descripcion": "Conocido como el 'Castillo de Drácula', este castillo gótico es una de las atracciones más populares de Rumania.",
        "imagen": "https://imgs.search.brave.com/3Rzx0D23MYz5a-sDQkQ2O1KiE6ybHMuOaqqkyJiutTM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzYwLzQyLzY1/LzM2MF9GXzQ2MDQy/NjUxNV9CZVY4TjZN/bEFsSjYyb1JzcHFx/Tm90ckgxMGxXT1Js/ZC5qcGc"
    },
    {
        "nombre": "Castillo de Edinburgh",
        "pais": "Escocia",
        "latitud": 55.9486,
        "longitud": -3.2008,
        "descripcion": "Una fortaleza histórica que domina el horizonte de Edimburgo, con una rica historia que se remonta a la Edad del Hierro.",
        "imagen": "https://imgs.search.brave.com/r2Sf_6A5PHRMnk8bsjk7qFDc8RMfy1qBt6BxNRRKSe4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzIwLzcwLzY2/LzM2MF9GXzcyMDcw/NjY5NF83NXFBWk1G/Q3gwcFpOaDYxaFNk/Y0hBaUFyWXBVOFpD/by5qcGc"
    },
    {
        "nombre": "Castillo de Praga",
        "pais": "República Checa",
        "latitud": 50.0911,
        "longitud": 14.4016,
        "descripcion": "El castillo antiguo más grande del mundo, según el Libro Guinness de los Récords, con una historia que abarca más de mil años.",
        "imagen": "https://imgs.search.brave.com/xoYt1FiUl9M425iRZV2VJW10H7v8YK77pibzgjbb5QM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzMyLzYyLzgx/LzM2MF9GXzEzMjYy/ODEwNV9PQk1oN2tm/TzBKVXFhREhKY2lF/bmEwY2FPdEFRU2Rh/aC5qcGc"
    },
    {
        "nombre": "Castillo de Alhambra",
        "pais": "España",
        "latitud": 37.1760,
        "longitud": -3.5889,
        "descripcion": "Una joya de la arquitectura islámica, este palacio y fortaleza es uno de los monumentos más visitados de España.",
        "imagen": "https://imgs.search.brave.com/p_A6fI2BO83bhlhHt_STI8NRO5i51fh0etLMruL6zk0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsb25hdGlt/ZWJ1ZGdldC5jby51/ay93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMS9hbGhhbWJy/YS1EUDIuanBn"
    },
    {
        "nombre": "Castillo de Hohenwerfen",
        "pais": "Austria",
        "latitud": 47.4833,
        "longitud": 13.1889,
        "descripcion": "Situado en lo alto de una colina, este castillo ofrece vistas impresionantes de los Alpes austriacos.",
        "imagen": "https://imgs.search.brave.com/5hF4ZItDxAXD1UG0JL9cmOZ4fTRgH3vCa-iwlefxtcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTc3/OTM0MDU2L3Bob3Rv/L2hvaGVud2VyZmVu/LWNhc3RsZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SGlP/R2daZXAyT1hrU19u/MVJzTkxEWkJ3Nnox/Z1Niek1XREJoR1NL/cm90dz0"
    },
    {
        "nombre": "Castillo de Malbork",
        "pais": "Polonia",
        "latitud": 54.0397,
        "longitud": 19.0279,
        "descripcion": "El castillo de ladrillo más grande del mundo, construido por los Caballeros Teutónicos en el siglo XIII.",
        "imagen": "https://imgs.search.brave.com/OejzYI0Ol97rjypb5OnY8clnLnA7wECWmZXPRNxp28g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTQ0Mzc3MS9waG90/by9tYWxib3JrLWNh/c3RsZS1mcm9tLWFi/b3ZlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zcWpuTy1R/cEpQMEgza1l1cUxh/TDFjYUlYdVlKSnJl/Q0p4UGdDR3hYQlhR/PQ"
    },
    {
        "nombre": "Castillo de Kilkenny",
        "pais": "Irlanda",
        "latitud": 52.6506,
        "longitud": -7.2492,
        "descripcion": "Un castillo normando en el corazón de Irlanda, conocido por sus jardines y su rica historia.",
        "imagen": "https://imgs.search.brave.com/buV00opqe9ZvijXDAfht8Zaac0YVpE937A5aPgkhIHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaXJlbGFuZC5j/b20vbWVkaWEvSW1h/Z2VzL3RoaW5ncy10/by1kby9hdHRyYWN0/aW9ucy9raWxrZW5u/eS1jYXN0bGUvYTk1/ZWY4Yjc0ZjlmNDg5/NTgyNjNhNjY3MmY1/M2FjMTUuanBnP3c9/MTkzNA"
    },
    {
        "nombre": "Castillo de Carcasona",
        "pais": "Francia",
        "latitud": 43.2064,
        "longitud": 2.3636,
        "descripcion": "Una ciudadela medieval fortificada con una historia que se remonta a más de dos mil años.",
        "imagen": "https://imgs.search.brave.com/xsegFuVzrZBQhGZNQBOujH48MqWGtYNapd74i33hIp0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvc2Ix/MDA2Njg4NGYtMDAz/L2VzL2ZvdG8vZnJh/bmNlLWxhbmd1ZWRv/Yy1jYXJjYXNzb25u/ZS1jYXN0bGUtb24t/dG9wLW9mLWhpbGwt/YXQtc3Vuc2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/TVpNWWVNZWN0eFlH/TG9fUXI0Z1FmcklN/dnVOWFlZQjRCOGlk/blNrVGtJPQ"
    },
    {
        "nombre": "Castillo de Segovia",
        "pais": "España",
        "latitud": 40.9525,
        "longitud": -4.1325,
        "descripcion": "Un impresionante castillo de cuento de hadas que inspiró el diseño del Castillo de Cenicienta de Disney.",
        "imagen": "https://imgs.search.brave.com/yR6J0pOnHJnIOIPBJkeNtDA3p7-mlA8dqFQ49y9bihY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODk1/ODcwMDEvZXMvZm90/by9zZWdvdmlhLWNh/c3RsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9REgzUG5U/YVRaWW1jV0tpTjBK/ZlhNY3M3cjZnRFNi/UHR3ZFA0OWZXQS12/ND0"
    },
    {
        "nombre": "Castillo de Eilean Donan",
        "pais": "Escocia",
        "latitud": 57.2739,
        "longitud": -5.5161,
        "descripcion": "Uno de los castillos más fotografiados de Escocia, situado en una pequeña isla donde se unen tres lagos.",
        "imagen": "https://imgs.search.brave.com/VN0LMZPlMAsUKA_DjtwO5TOkXlSgnG-CnheXAo2Rjq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzY3VicmlydWsu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzAzL2Nhc3Rp/bGxvX2VpbGVhbl9k/b25hbi5qcGc"
    },
    {
        "nombre": "Castillo de Buda",
        "pais": "Hungría",
        "latitud": 47.4960,
        "longitud": 19.0396,
        "descripcion": "Un histórico castillo y palacio real en Budapest, que alberga museos y ofrece vistas panorámicas del Danubio.",
        "imagen": "https://imgs.search.brave.com/O4FKm1pIjjRsVREsbzIYfvR6EKnQOQibM1FSvwbWPf8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnVkYXBlc3Qub3Jn/L2VzL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy85OS9jYXN0/aWxsby1idWRhcGVz/dC5qcGc"
    },
    {
        "nombre": "Castillo de Chenonceau",
        "pais": "Francia",
        "latitud": 47.3249,
        "longitud": 1.0702,
        "descripcion": "Conocido como el 'Castillo de las Damas', este castillo renacentista está construido sobre el río Cher.",
        "imagen": "https://imgs.search.brave.com/vfBa8hiG1Hux9OnhgvS46SZ7dcdKIn_i15bIbWRWYNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubXVzZW1lbnQu/Y29tL2NvdmVyLzAw/MDEvNTAvdGhlLWNo/ZW5vbmNlYXV4LWNh/c3RsZS1pbi1mcmFu/Y2Utd2lkZS1hbmds/ZS12aWV3LWpwZ19o/ZWFkZXItNDk5NDUu/anBlZz93PTU0MA"
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

function editCastle(reference, newName, newDesc, newPais, newImagen){
    reference.nombre = newName;
    reference.descripcion = newDesc;
    reference.imagen = newImagen;
    reference.pais = newPais;

    return;
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
    editCastle,
    getByIndex,
    findAll,
    add,
    removeAt,
    userList,
    checkPwd
}