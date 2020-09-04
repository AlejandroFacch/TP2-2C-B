let pedido1 = {
    nombre: 'Caffe Vanilla',
    tipo: 'bebida caliente',
    cliente: 'Robert'
};

let pedido2 = {
    nombre: 'Cold Brew',
    tipo: 'bebida fria',
    cliente: 'Pablo'
};

function pedidosStarbuks(pedido, callbackCliente){
    switch (pedido.nombre) {
        case 'Caffe Vanilla':
            setTimeout(() => {
                callbackCliente(pedido);
            }, 4 * 1000);
            break;
        case 'Cold Brew':
            setTimeout(() => {
                callbackCliente(pedido);
            }, 2 * 1000);
            break;
        default:
            break;
    }
}

// ingresa primero
pedidosStarbuks(pedido1, function (pedido){
    console.log(`${pedido.nombre} finalizado llamar a: ${pedido.cliente}`);
});

// ingresa despues de pedido1
pedidosStarbuks(pedido2, pedido => {
    console.log(`${pedido.nombre} finalizado llamar a: ${pedido.cliente}`);
});

