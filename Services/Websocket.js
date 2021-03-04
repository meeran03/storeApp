export function socket() {
    let socket = new WebSocket(`wss://3f14ef2e1d68.ngrok.io/ws/orders/`)
    return socket
}

export function socketBoy(id) {
    let socket = new WebSocket(`wss://3f14ef2e1d68.ngrok.io/ws/deliveryboys/${id}/`)
    return socket
}