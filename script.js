const tbody = document.getElementById("tbody");
let users;
let currentPage = 0;
let pageSize = 10;
let cp = document.getElementById("cp");
let totalPage = 100 / pageSize;

fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then(res => res.json())
  .then((result) => {
      users = result;

      for(var i=0; i<10; i++){
        insertNewRow(users[i])
      }
  });


  function insertNewRow(data){
      let row = tbody.insertRow();
      let cell0 = row.insertCell(0);
      let cell1 = row.insertCell(1);
      let cell2 = row.insertCell(2);

      cell0.innerHTML = data.id;
      cell1.innerHTML = data.name;
      cell2.innerHTML = data.email;     
  }

  function changePage(direction){
      
    if(direction == 'next' && currentPage < totalPage -1){
        currentPage++;
        printRecord();
    }
    else if(direction == 'prev' && currentPage > 0){
        currentPage--;
        printRecord(); 
    }
    else if(direction == 'jump'){
        currentPage = document.getElementById("search").value;
        printRecord();
    }else{
        currentPage = direction;
        printRecord();
    }
     
  } 
  
  function printRecord(){
    tbody.innerHTML = '';
    for(let i = currentPage * pageSize; i < currentPage * pageSize + pageSize; i++){
        insertNewRow(users[i])
    }
  }
