
export function test() {
    const worker = new Worker(new URL("./worker.js", import.meta.url), {type: "module"});
    worker.onerror = (err) => console.error(err);

    worker.onmessage = (message) => {
        console.log("regular: 1 + 1 =", message.data.value)
    }

    worker.postMessage({x: 1, y: 1});
}