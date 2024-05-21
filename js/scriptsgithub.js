document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página apigithub.html
    if (window.location.pathname.includes('/apigithub.html')) {
        // Nombre de usuario fijo
        const miNombreDeUsuario = 'Eduardo-G0nzalez';

        function obtenerDatosUsuario(username) {
            const url = `https://api.github.com/users/${username}`;

            // Solicitud GET con fetch, Solicitud de tipo AJAX
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error al obtener los datos del usuario: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // Actualizar el contenido de HTML con los datos del usuario
                    document.getElementById('nombre').textContent = data.name || 'Nombre no disponible';
                    document.getElementById('bio').textContent = data.bio || 'Biografía no disponible';
                    document.getElementById('seguidores').textContent = data.followers || '0';
                    document.getElementById('repositorios').textContent = data.public_repos || '0';
                })
                .catch(error => {
                    console.log('Error:', error);
                    alert('Error al obtener los datos del usuario.');
                });
        }

        // Llamar a la función para obtener los datos del usuario al cargar la página
        obtenerDatosUsuario(miNombreDeUsuario);
    }
});
