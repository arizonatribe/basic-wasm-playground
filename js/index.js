const wasm = import("./bindgenhello");

async function run() {
    try {
        const { hello } = await wasm;
        hello("world");
    } catch (err) {
        console.error(err);
    }
}

run();
