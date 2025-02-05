import * as Comlink from 'comlink';

const obj = {
    test() {
        console.log("hello");
    }
}

onmessage = (message) => {
    console.log(message.data, "from worker with import");
}

Comlink.expose(obj);
