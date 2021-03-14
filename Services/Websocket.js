export function socket() {
    let socket = new WebSocket(`wss://1a0630fdd603.ngrok.io/ws/orders/`)
    return socket
}

export function socketBoy(id) {
    let socket = new WebSocket(`wss://1a0630fdd603.ngrok.io/ws/deliveryboys/${id}/`)
    return socket
}