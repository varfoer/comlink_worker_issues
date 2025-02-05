
export function testWorkerWithImport() {
    const worker = new Worker(new URL("./worker_with_import.js", import.meta.url), {type: "module"});
    worker.onerror = (err) => console.error(err);

    worker.postMessage("hello");
}

export function testWorkerWithoutImport() {
    const worker = new Worker(new URL("./worker_without_import.js", import.meta.url), {type: "module"});
    worker.onerror = (err) => console.error(err);

    worker.postMessage("hello");
}

export function testWorkerWithLocalImport() {
    const worker = new Worker(new URL("./worker_with_local_import.js", import.meta.url), {type: "module"});
    worker.onerror = (err) => console.error(err);

    worker.postMessage("hello");
}