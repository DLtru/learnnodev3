
function write(message){
    process.stdout.write(message);
}
write('Hello'); 

setTimeout(() => {
    write('\x1b[5D'); write('goodbye');
}, 10_000);