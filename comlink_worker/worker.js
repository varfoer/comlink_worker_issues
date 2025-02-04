import * as Comlink from 'comlink';

const obj = {
    add(x, y) {
        return x + y;
    }
}

Comlink.expose(obj);