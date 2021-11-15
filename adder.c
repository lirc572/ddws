int adder (int a, int b) {
    return a + b;
}

/**
 * To compile this file:
 * emcc adder.c -O2 -s WASM=1 -s SIDE_MODULE=1 -o adder.wasm
 **/
