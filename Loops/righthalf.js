for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= row; col++) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}