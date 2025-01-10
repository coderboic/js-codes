/*let count =0;
function increment(){
	console.log(count);
	count++;
}
// setInterval is used to repeatedly executr specified function of code at fixed intervals
setInterval(increment,1000);
*/
// q2
/*
let count=0;
function increment(){
	console.log(count);
	count++;
	work();
}
function work(){
	setTimeout(increment,1000);
}
work();*/
// q3
/*
const fs=require("fs");
function read(err,data){
	console.log(data);
}
fs.readFile("a.txt","utf-8",read);
fs.readFile("b.txt","utf-8",read);
console.log("done");*/
// q4
/*const fs=require("fs");
function writeCallback(err){
	console.log("written something to the file");
	fs.readFile("a.txt","utf-8",readCall);
}
function readCall(err,data){
	console.log(data);
}
fs.writeFile("a.txt","added   something     new      ",writeCallback);*/
// medium q1
/*const fs=require("fs");
const data=fs.readFileSync("a.txt","utf-8");
console.log(data);
let  ans="";
let t=false;

for (let i = 0; i < data.length; ++i) {
    // Skip leading and consecutive spaces
    if (data[i] === ' ') {
        if (!t) { // If the previous character was not a space, add a space
            ans += ' ';
            t = true;
        }
    } else {
        // Add non-space characters to the result and reset the space tracker
        ans += data[i];
        t = false;
    }
}
function writeCall(err){
	console.log("written something to the file");
	fs.readFile("a.txt","utf-8",readCall);
}
function readCall(err,data){
	console.log(data);
}
fs.writeFile("a.txt",ans,writeCall);*/
// q2
/*
function time(){
	let  now=new Date();
	let  hours=now.getHours();
	let  minutes=now.getMinutes();
	let seconds=now.getSeconds();
	let  ampm=hours >= 12 ? 'PM' : 'AM';
	let timeS = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
	console.log(timeS);
	setTimeout(time,1000);
}
time();*/
/*
//q1 hard
function fun(resolve){
	 setTimeout(resolve,10000);
}
function main(){
	console.log("executed this after 10 seconds");
}
function setTimeoutPromise(){
	return new Promise(fun);
}
setTimeoutPromise().then(main);*/
// q2 hard
/*function busyWait(milliseconds){
	const start=Date.now();
	while(Date.now()-start < milliseconds){
		//Busy
	}
}
function resolveAfterDelay(resolve){
	busyWait(10000);
	resolve();
}
function sleep(){
	return new Promise(resolveAfterDelay);
}
function main(){
	console.log("complete");
}
sleep().then(main);
*/
let totalTime = 0;

function wait1(t, t1, t2, resolve) {
    const start = Date.now();
    while (Date.now() - start < t) {
        totalTime++;
    }
    wait2(t1, t2, resolve);
}

function wait2(t1, t2, resolve) {
    const start = Date.now();
    while (Date.now() - start < t1) {
        totalTime++;
    }
    wait3(t2, resolve);
}

function wait3(t, resolve) {
    const start = Date.now();
    while (Date.now() - start < t) {
        totalTime++;
    }
    resolve();
}

function calculateTime() {
    return new Promise((resolve) => wait1(1000, 3000, 9000, resolve));
}

function main() {
    console.log("done with the promisified function");
    console.log(`total time taken is: ${totalTime / 1000}`);
}

calculateTime().then(main);



































