//your JS code here. If required.
const tableBody = document.getElementById("book-list")
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn")
const submit = document.getElementById("submit");
const arrrayOfRows = [title,author,isbn]
submit.addEventListener('click',addRowToTable)
function addRowToTable(){
	const rowEle = document.createElement("tr");
	rowEle.setAttribute("class","row-ele")
	for(let i = 0;i<4;i++){
		const data = document.createElement("td");
		if(i ==  3){
			const deleteButton = document.createElement("button");
			deleteButton.textContent ="x"
			deleteButton.setAttribute("class","delete-button")
			data.appendChild(deleteButton)
		}
		else{
		data.textContent = arrrayOfRows[i].value;
		}
		rowEle.appendChild(data);
	}
	tableBody.appendChild(rowEle)
}


