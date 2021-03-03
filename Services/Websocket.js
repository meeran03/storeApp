export function socket() {
    let socket = new WebSocket(`wss://0f6afc3dc5e3.ngrok.io/ws/orders/`)
    return socket
}

export function socketBoy(id) {
    let socket = new WebSocket(`wss://0f6afc3dc5e3.ngrok.io/ws/deliveryboys/${id}/`)
    return socket
}