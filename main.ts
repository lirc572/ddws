import { Application } from "https://deno.land/x/oak/mod.ts";

const wasmCode = await Deno.readFile("adder.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const adder = wasmInstance.exports.adder as CallableFunction;

const app = new Application();

app.use((ctx) => {
  const { a: aStr, b: bStr } = helpers.getQuery(ctx);
  const a = aStr ? Number(aStr) : 0;
  const b = bStr ? Number(bStr) : 0;
  ctx.response.body = `${a} + ${b} = ${adder(a, b)}`;
});

app.addEventListener(
  "listen",
  (e) => console.log("Listening on http://localhost:8080"),
);
await app.listen({ port: 8080 });
