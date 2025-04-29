function write(message){
    process.stdout.write(message);
}

// text colors
write('\x1b[30m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[31m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[32m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[33m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[34m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[35m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[36m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[37m'); write('Hello'); write('\x1b[0m'); write('\n');

// bg colors
write('\x1b[40m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[41m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[42m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[43m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[44m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[45m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[46m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[47m'); write('Hello'); write('\x1b[0m'); write('\n');

// you can combine bg and text colors
write('\x1b[41m'); write('\x1b[30m'); write('Hello'); write('\x1b[0m'); write('\n');

write('\x1b[1m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[3m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[4m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[5m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[7m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[8m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[9m'); write('Hello'); write('\x1b[0m'); write('\n');

// dim text colors
write('\x1b[2;30m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;31m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;32m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;33m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;34m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;35m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;36m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;37m'); write('Hello'); write('\x1b[0m'); write('\n');

// dim bg colors
write('\x1b[2;40m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;41m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;42m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;43m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;44m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;45m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;46m'); write('Hello'); write('\x1b[0m'); write('\n');
write('\x1b[2;47m'); write('Hello'); write('\x1b[0m'); write('\n');

for(let i=0; i<256; i++){
    write(`\x1b[48;5;${i}m`); write(' '); write('\x1b[0m');
}

for(let i=0; i<256; i++){
    write(`\x1b[48;2;${i};0;0m`); write(' '); write('\x1b[0m');
}