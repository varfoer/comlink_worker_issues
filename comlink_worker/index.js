import * as Comlink from 'comlink';

export async function test() {
    const worker = new Worker(new URL("./worker.js", import.meta.url), {type: "module"});
    worker.onerror = (err) => console.error(err);

    const wrappedWorker = Comlink.wrap(worker);

    console.log("comlink: 1 + 1 =", await wrappedWorker.add(1, 1));
}