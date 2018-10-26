let hh,mm,ss;
let w;
let dots = 8;
let x;
let hOffset;
let months,days;
let can;
function setup() {
	let ww = window.screen.availWidth - (window.outerWidth - window.innerWidth);
	let wh = window.screen.availHeight - (window.outerHeight - window.innerHeight);

    let can = createCanvas(ww*0.9,wh*0.9);
	can.position(ww/2-width/2,wh/2 - height/2);
	hh = [], mm = [], ss = [];
	w = width/10;
	hOffset = height * 0.1;
	for(let i =0;i<dots;i++) {
		hh[i] = new Bit(i*w + w/2, height/4 - hOffset, w*0.95, false);
    	mm[i] = new Bit(i*w + w/2, height/2 - hOffset, w*0.95, false);
    	ss[i] = new Bit(i*w + w/2, 3* height/4 - hOffset, w*0.95, false);
    }

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

}

function setBits(val, bits)	{

	val = val.toString(2);
	for(let i =0;i<dots; i++)	{
		if(i>= val.length)		{
			bits[dots - i -1].status = false;
		}
		else		{
			bits[dots - i -1].status = Boolean(parseInt(val[(val.length - i - 1)]));
		}
	}
	return bits;
}

function mousePressed()	{
    for(let i =0;i<dots;i++)	{   hh[i].clicked();
    	mm[i].clicked();
    	ss[i].clicked();
    }
}

function draw() {
	background(0);
    hh = setBits(hour(),hh);
    mm = setBits(minute(),mm);
    ss = setBits(second(),ss);
    for(let i =0;i<dots;i++) {
        hh[i].show();
        mm[i].show();
        ss[i].show();
    }
    let h = hour().toString();
    if(h.length <2)
    	h = "0" + h;
    let m = minute().toString();
    if(m.length <2)
        m = "0" + m;
    let s = second().toString();
    if(s.length <2)
        s = "0" + s;
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(w);
    text(h,width-w,height/4 - hOffset);
    text(m,width-w,height/2 - hOffset);
    text(s,width-w,height*0.75 - hOffset);
    let today = new Date();
    textSize(w*0.5);
    let date = "";
    date += days[today.getDay()] + ", " + today.getDate().toString() + " " + months[today.getMonth()] + " " + today.getFullYear().toString();
    text(date,width/2,height*0.75 + hOffset);
}