
function add(x, y) {
    return x + y;
}

onmessage = (message) => {
    postMessage({value: add(message.data.x, message.data.y)});
}