import { someFunction } from "./import";

onmessage = (message) => {
    someFunction();
    console.log(message.data, "from worker with import of local script");
}