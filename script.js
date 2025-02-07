function createTable() {
    //Write your code here
	let rn = prompt("Input number of rows")
	let cn = prompt("Input number of columns")
	for(let i=0; i<parseInt(rn,10); i++){
		let table = document.getElementById("myTable").insertRow(i)
		for(let j=0; j<parseInt(cn,10); j++){
			let cell = table.insertCell(j)
			cell.innerHTML = "Row-"+i+" Column-"+j
		}
	}
}
