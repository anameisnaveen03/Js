for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4-i; j++) {
        process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}