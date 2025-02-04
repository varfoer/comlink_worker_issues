
export function test() {
    const worker = new Worker(new URL("./worker.js", import.meta.url), {type: "module"});
    worker.onerror = (err) => console.error(err);
    worker.onmessage = (event) => console.log(event);

    worker.postMessage("hello");
}