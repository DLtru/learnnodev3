
function write(message){
    process.stdout.write(message);
}
let date = new Date().toTimeString().substring(0,8);
write(date); 

setInterval(() => {
    write('\x1b[8D');
    date = new Date().toTimeString().substring(0,8);
    write(date);
}, 1000);