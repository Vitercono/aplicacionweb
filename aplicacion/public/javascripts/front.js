function showLoginModal() {
    Swal.fire({
        title: "Iniciar sesión",
        html: `
            <input type="text" id="swal-input-user" class="swal2-input" placeholder="Usuario">
            <input type="password" id="swal-input-pass" class="swal2-input" placeholder="Contraseña">
        `,
        focusConfirm: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: false,
        confirmButtonText: "Ingresar",
        preConfirm: () => {
            const username = document.getElementById("swal-input-user").value;
            const password = document.getElementById("swal-input-pass").value;

            if (!username || !password) {
                Swal.showValidationMessage("Ambos campos son obligatorios");
                return false;
            }

            return fetch("/api/login", { // Ajusta esta URL a tu API de autenticación
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                if (!data.success) {
                    Swal.showValidationMessage(data.message);
                    return false;
                }
                
                document.querySelectorAll('button').forEach( (el) =>{
                    el.disabled=false;
                })

                return data;
            })
            .catch(() => {
                Swal.showValidationMessage("Error en la conexión con el servidor");
                return false;
            });
        }
    }).then(result => {
        if (!result.isConfirmed) {
            showLoginModal();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('api/checksession').then(response => response.json()).then(data => {
        if (!data.success){ 
            document.querySelectorAll('button').forEach( (el) =>{
                el.disabled=true;
            })
            showLoginModal();
        }
    })

    
});


if(document.querySelector("#mapa")){

    var map = L.map('mapa').setView([36.73, -4.42], 6);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);    
    
    fetch("/api")
    .then(response => {
        if (response.ok) return response.json();
    })
    .then(data => {
        data.forEach((el, index) => {
            console.log(el.nombre);
            let marker = L.marker([el.latitud, el.longitud]).addTo(map);
            
            marker.addEventListener("click", () => {
                Swal.fire({
                    title: el.nombre,
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#ff0000",
                    confirmButtonText: "Eliminar ubicacion",
                    cancelButtonColor: "#00ffff",
                    cancelButtonText: "Ok"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "¿Seguro que quieres borrar la ubicacion?",
                            text: "Podrás revertir este cambio",
                            showCancelButton: true,
                            cancelButtonColor: "#00ffff",
                            cancelButtonText: "No",
                            confirmButtonColor: "ff0000",
                            confirmButtonText: "Sí, borrar"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                fetch(`/api/delete-castle/${index}`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                                .then((response) => response.json()) // Asegúrate de que la respuesta sea un JSON
                                .then((responseData) => {
                                    if (responseData.success) {
                                        Swal.fire({
                                            title: "Elemento eliminado con exito"
                                        });
                                        marker.remove(); // Elimina el marcador de inmediato
                                    } else {
                                        Swal.fire({
                                            title: "Error",
                                            text: "No se pudo eliminar el castillo",
                                            icon: "error"
                                        });
                                    }
                                })
                                .catch(err => {
                                    console.log('Error al eliminar el castillo:', err);
                                    Swal.fire({
                                        title: "Error",
                                        text: "Hubo un problema al eliminar el castillo.",
                                        icon: "error"
                                    });
                                });
                            }
                        });
                    }
                });
            });
        });
    })
    .catch(err => console.log(err));
    
    const secretSauce = document.querySelector("#secretSauce")
    secretSauce.addEventListener("click",()=>{
        if(!map) return;
        if(window.navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
        
                // Función para calcular la distancia usando la fórmula Haversine
                function haversineDistance(lat1, lon1, lat2, lon2) {
                    const R = 6371; // Radio de la Tierra en km
                    const dLat = (lat2 - lat1) * Math.PI / 180;
                    const dLon = (lon2 - lon1) * Math.PI / 180;
        
                    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);
        
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
                    return R * c; // Resultado en km
                }
        
                // Calcular el castillo más cercano
                let closestCastle = null;
                let minDistance = Infinity;

                fetch("/api")
                    .then(response => {
                        if (response.ok) return response.json();
                    })
                    .then(data =>{
        
                data.forEach(castillo => {
                    const distance = haversineDistance(userLat, userLng, castillo.latitud, castillo.longitud);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestCastle = castillo;
                    }
                });
        
                // Mostrar el resultado con SweetAlert
                if (closestCastle) {
                    Swal.fire({
                        title: 'Castillo más cercano',
                        text: `El castillo más cercano es ${closestCastle.nombre}, ubicado en ${closestCastle.pais}. Está a ${minDistance.toFixed(2)} km de distancia.`,
                        confirmButtonText: '¡Genial!',
                        confirmButtonColor: '#3085d6'
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'No se pudo encontrar ningún castillo cercano.',
                        icon: 'error',
                        confirmButtonText: 'Cerrar',
                        confirmButtonColor: '#d33'
                    });
                }
            }, (error) => {
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo obtener la ubicación del usuario.',
                    icon: 'error',
                    confirmButtonText: 'Cerrar',
                    confirmButtonColor: '#d33'
                });
            });
        })
        }
        
    })

    const botonadd = document.querySelector('button#anyadir');
    botonadd.addEventListener('click', function(){
        botonadd.disabled = true
        map.addEventListener('click',function(e){
            e.preventDefault;
            
            var {lat, lng} = e.latlng;
    
            Swal.fire({
                title: "Introduce el nombre de la ubicacion:",
                input: "text",
                inputAttributes: {
                    autocapitalize: "off"
                },
                showCancelButton: true,
                confirmButtonText: "Confirmar",
            }).then((result) => {
                if (result.isConfirmed) {
                    var name = result.value
    
                    Swal.fire({
                        title: "Introduce el pais donde esta situado el castillo:",
                        input: "text",
                        inputAttributes: {
                            autocapitalize: "off"
                        },
                        showCancelButton: true,
                        confirmButtonText: "Confirmar",
                    }).then((result)=>{
                        if (result.isConfirmed){
                            map.removeEventListener();
                            botonadd.disabled = false

                            var country = result.value
    
                            console.log(name + " | " + country + " | " + lat + " | " + lng)
    
                            fetch('/api/add-castle', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                  nombre:name,
                                  pais:country,
                                  lat:lat,
                                  lng:lng
                                })
                              })
                                .then(response => response.json())
                                .then(data => {
                                  if (data.success) {
                                    console.log('Castillo agregado:', data.data);
                                    window.location.reload();

                                  } else {
                                    console.error('Error:', data.message);
                                  }
                                })
                                .catch(error => {
                                  console.error('Error en la solicitud:', error);
                                });
                        }
                    })
                }
            })
        })

    })

    
}