const form=document.querySelector("form");
const input=document.querySelector("#txtTaskName");
const btnDeleteAll= document.querySelector("#btnDeleteAll");
const taskList= document.querySelector("#task-list");

// dizi ekleme
const items=["item 1","item 2","item 3","item 4"];

//load items
loadItems();

function loadItems(){
    items.forEach(function(item){
        createItem(item);
    });
}

function createItem(text){
    const li=document.createElement("li");
    li.className="list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text)); // inputtan değil de text değerinden değerler gelsin yani dışarıdan ekleme yapalalım

    const a=document.createElement("a");
    a.classList="delete-item float-end";
    a.setAttribute("href","#");
    a.innerHTML='<i class="fas fa-times"></i>';

    // li ekleme işlemi
    li.appendChild(a);

    //ul ekleme
    taskList.appendChild(li);
}

eventListeners();


function eventListeners (){

    // submit event
form.addEventListener("submit",addNewItem);

    // delete an item
taskList.addEventListener("click",deleteItem);

// delete all items
btnDeleteAll.addEventListener("click",deleteAllItems);


}



// add new item
function addNewItem(e){

    if(input.value=== ""){
        alert("add new item");
    }

    // buradaki değerleri yukarıdaki item içine taşıdık 

    // create item
    createItem(input.value); // bar kısmına yazılıp enterlanan değerleri ekler

    //clear 
    input.value="";
    
    e.preventDefault();
}


// delete an item
function deleteItem(e){
    
    

        if(e.target.className ==='fas fa-times'){
            if(confirm("Are u sure?")){  // işlemi doğrulama alerti oluşturur 
            e.target.parentElement.parentElement.remove();
            }
        }

    

    e.preventDefault(); // a elementi olduğu için bu refersh olmayı önler button gibi elementlerde kullanmaya gerek yoktur
}

// delete all items

function deleteAllItems(){

    if(confirm("are u sure ?")){ 

    //taskList.innerHTML(""); // bütün lileri siler 2.yol ise aşağıda 

 taskList.childNodes.forEach(function(item){ // çağıracağımız bir işlem olmadığı için function içine bir şey yazmamıza gerek yok içinde yapıp bitirecez

    console.log(item); // bütün elemanları yazar text node DAHİL

    if (item.nodeType===1){ // text nodelar karşımıza gelmez
        item.remove();
    }

    });

    }

    e.preventDefault();
}


// reminder :
// node list ile HTML collection arasındaki fark nodelist text nodeları da getirir

 