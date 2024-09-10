function start() {
    console.log('Contenido del DOM cargado')

    // ------------- PUNTO 3 ----------------
    //document.querySelector('textarea').innerHTML = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>'

    // ------------- PUNTO 4 ----------------
    document.querySelector('textarea').oninput = function() {
        var inputs = document.querySelectorAll('input')
        for(var i=0; i<inputs.length; i++) {
            inputs[i].disabled = false;
        }
        document.querySelector('button').disabled = false;
    }

    // ------------- PUNTO 5 ----------------
    // a)
    document.getElementById('btn-reemplazar').onclick = function() {
        document.querySelector('#destino').innerHTML = document.querySelector('textarea').value                            
    }

    // b)
    var inputs = document.querySelectorAll('.btn-agregar')
    inputs[0].onclick = function() {
        document.querySelector('#destino').innerHTML += document.querySelector('textarea').value                            
    }

    // c)
    inputs[1].onclick = function() {
        for(var i=0; i<5; i++)
            document.querySelector('#destino').innerHTML += document.querySelector('textarea').value                            
    }

    // d)
    inputs[2].onclick = function() {
        for(var i=0; i<10; i++)
            document.querySelector('#destino').innerHTML += document.querySelector('textarea').value                            
    }

    // e)
    inputs[3].onclick = function() {
        var cant = prompt('Ingrese cantidad')
        for(var i=0; i<cant; i++)
            document.querySelector('#destino').innerHTML += document.querySelector('textarea').value                            
    }

    // ------------- PUNTO 6 ----------------
    // a)
    document.querySelector('.btn-vaciar').onclick = function() {
        document.querySelector('#destino').innerHTML = ''
    }

    // b)
    document.querySelector('.btn-convertir-a-mayusculas').onclick = function() {
        document.querySelector('#destino').innerHTML = document.querySelector('#destino').innerHTML.toUpperCase()
    }

    // c)
    document.querySelector('button').onclick = function() {
        document.querySelector('#destino').innerHTML = document.querySelector('#destino').innerHTML.toLowerCase()
    }

    // ------------- PUNTO 7 ----------------
    var lis = document.querySelectorAll('li')//.innerText = '[OK]' + document.querySelectorAll('li').innerText
    for(var i=0; i<lis.length; i++) {
        lis[i].innerText = '[Ok] ' + lis[i].innerText
    }

}

// ------------- PUNTO 1 ----------------
window.onload = start


