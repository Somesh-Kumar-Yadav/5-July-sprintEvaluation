import navbar from "../components/navbar.js";
import section from "../components/section.js";

let nav = document.querySelector("nav");
let sec = document.querySelector("section");
let sect = document.querySelector(".show");

let main = () => {
	nav.innerHTML = navbar();
	sec.innerHTML = section();
};
main();

let obj = {};
let obj_2 = {};
let t = document.getElementById("tit_le");
let add_notes = document.getElementById("add_notes");
let notes = document.getElementById("notes");
add_notes.addEventListener("click", () => {
	console.log(t);
	send_notes(notes.value, day.value, t.value);
});
let day = document.getElementById("day");

let send_notes = (st, day, t) => {
	console.log(t);
	if (st.length != 0) {
		if (obj[day]) {
			obj[day] += st + "<br/>";
		} else {
			obj[day] = st + "<br/>";
		}
		alert(`Your notes is added to ${day}`);
	} else {
		alert("First write some notes");
	}
	if (obj[day]) {
		obj_2[day] = t;
	} else {
		obj_2[day] = t;
	}
	console.log(obj);
	console.log(obj_2);
};
let go = document.getElementById("go");
go.addEventListener("click", () => {
	let day_ = document.getElementById("day_").value;
	show(day_);
});
let show = (d) => {
	sec.style.display = "none";
	sect.style.display = "flex";
	sect.innerHTML = null;
	let div = document.createElement("div");
	let dayname = document.createElement("h1");
	if (obj_2[d] == undefined || obj_2[d].length == 0) {
		obj_2[d] = "No title";
	}
	dayname.innerHTML = `${d} <br/><span>${obj_2[d]}</span>`;
	let daynotes = document.createElement("p");
	if (obj[d] != undefined) {
		daynotes.innerHTML = `${obj[d]}`;
	} else {
		daynotes.innerHTML = `No notes available for this day`;
	}
	let btn = document.createElement("button");
	btn.innerText = "Back to add notes";
	btn.addEventListener("click", () => {
		goTo();
	});
	div.append(btn, dayname, daynotes);
	sect.append(div);
};
let goTo = () => {
	sec.style.display = "flex";
	sect.style.display = "none";
};
