const numbers = [5,0,9,1,7,4,2,6,3,8];
//1
	let numbers1 = numbers.toString();
//2
	numbers1 = numbers1.split(",");
	numbers1 = numbers1.join("+");
	console.log(numbers1);

//3 Bonus
	let numbers2 = numbers.slice();
	for( let i = 0; i < numbers2.length+100; i++) {	
		let temp;
		for(let j = 0; j < numbers2.length; j++) {
			if(numbers2[j] < numbers2[j+1]) {
				temp = numbers2[j];
				numbers2[j]=numbers2[j+1];
				numbers2[j+1]=temp;
			}
		}
	}
	console.log(numbers2);
