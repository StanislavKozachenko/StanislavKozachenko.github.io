let today = document.getElementById('todayis');
let time = document.getElementById('time');
let date = new Date();
let day = date.getDay();
today.innerHTML = moment().format("DD MM YYYY");
time.innerHTML = moment().format('LT');

let classnames = {
	n1: 'Михаил',
	n2: 'Станислав',
	n3: 'Олег',
	n4: 'Иван',
	n5: 'Кирилл',
	n6: 'Владислав К.',
	n7: 'Матвей',
	n8: 'Владислав Т.',
	n9: 'Максим',
	n10: 'Мария',
	n11: 'Дмитрий',
	n12: 'Даниил'
};

let myp = {
	week: 0,
	fromDate: null,
	toDate : null,
	d0: null,
	d1: null,
	dt: null
};

//
let tp = document.getElementById('thisperson');

if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {	

 myp.d0 = new Date('September 2, 2019'); // Пуск сайта.
	 myp.d1 = new Date();
	 myp.dt = Math.round((myp.d1.getTime() - myp.d0.getTime()) / (1000*60*60*24));	

	myp.fromDate = myp.d0;
	myp.toDate = myp.d1;
	CalculateWeekendDays();
	function CalculateWeekendDays(){
   
		console.log(myp.fromDate + 'br' + myp.toDate);
    while(myp.fromDate < myp.toDate){
        myp.fromDate.setDate(myp.fromDate.getDate() + 1);
        if(myp.fromDate.getDay() == 0 || myp.fromDate.getDay() == 6){
            ++myp.week;
        }
    }
}
	
console.log(myp.week);

	//


	myp.dt-=myp.week;
		
	if(myp.dt % 12 == 1) {
		tp.innerHTML = classnames.n1;
	} else if(myp.dt % 12 == 2){
		tp.innerHTML = classnames.n2;
	} else if(myp.dt % 12 == 3){
		tp.innerHTML = classnames.n3;
	} else if(myp.dt % 12 == 4){
		tp.innerHTML = classnames.n4;
	} else if(myp.dt % 12 == 5){
		tp.innerHTML = classnames.n5;
	} else if(myp.dt % 12 == 6){
		tp.innerHTML = classnames.n6;
	} else if(myp.dt % 12 == 7){
		tp.innerHTML = classnames.n7;
	} else if(myp.dt % 12 == 8){
		tp.innerHTML = classnames.n8;
	} else if(myp.dt % 12 == 9){
		tp.innerHTML = classnames.n9;
	} else if(myp.dt % 12 == 10){
		tp.innerHTML = classnames.n10;
	} else if(myp.dt % 12 == 11){
		tp.innerHTML = classnames.n11;
	} else if(myp.dt % 12 == 0){
		tp.innerHTML = classnames.n12;
	}

}
if(day == 0 || day == 6) {	
	tp.innerHTML = 'Сегодня выходной.';
}
