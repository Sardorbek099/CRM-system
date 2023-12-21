let currentCount
let rasmLinki = ""
let students = [
    {
        name : "Sardorbek",
        phone : "949226511",
        group : "backend",
        imgSrc : "https://picsum.photos/100/100"
    },
    {
        name : "Ahror",
        phone : "97238387",
        group : "backend",
        imgSrc : "https://picsum.photos/100/100"
    },
    {
        name : "Jasur",
        phone : "732847",
        group : "backend",
        imgSrc : "https://picsum.photos/100/100"
    }
    
]

function saveData(){
    let name = document.querySelector(".name").value
    let phone = document.querySelector(".phone").value
    let group = document.querySelector(".group").value
    // console.log(name,phone,group);
    students.push(
        {
            name:name,
            phone:phone,
            group:group,
            imgSrc:rasmLinki
        }
    )

    // document.querySelector(".tbody").innerHTML = '' 
    document.querySelector(".name").value = ''
    document.querySelector(".phone").value = ''
    document.querySelector(".group").value = ''
    document.querySelector(".image").value = '' 
    render(students)
}
function rasmOlish(val){
        val.src = window.URL.createObjectURL(val.files[0])
        rasmLinki = val.src
    }
function searchData() {
    let searchInput = document.querySelector(".searchInput").value
    let searchedStudents = []
    students.map((item) =>{
        if(item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.phone.toLowerCase().includes(searchInput.toLowerCase()) || item.group.toLowerCase().includes(searchInput.toLowerCase())){
            searchedStudents.push(item)
        }
    })
    // document.querySelector(".tbody").innerHTML = ""
    render(searchedStudents)
}
function deleteStudent(counter) {
    students.splice(counter - 1,1)
    render(students)
}
function editStudent(counter) {
    currentCount = counter
    document.querySelector("#name").value = students[counter - 1].name
    document.querySelector("#phone").value = students[counter - 1].phone
    document.querySelector("#group").value = students[counter - 1].group
    document.querySelector("#image").value = students[counter - 1].imgSrc

}
function addEditedStudent(){
    let newName = document.querySelector("#name").value
    let newPhone = document.querySelector("#phone").value
    let newGroup = document.querySelector("#group").value
    let newImage = rasmLinki
    
    students[currentCount - 1].name = newName
    students[currentCount - 1].phone = newPhone
    students[currentCount - 1].group = newGroup
    students[currentCount - 1].imgSrc = newImage

    render(students)
}
render(students)
function render(array) {
    counter = 1
    document.querySelector(".tbody").innerHTML = ''
    array.map((item) =>{
        let tr = document.createElement("tr")
        
        let td = document.createElement("td")
        td.innerText = counter

        let td1 = document.createElement("td")
        td1.innerText = item.name
        
        let td2 = document.createElement("td")
        td2.innerText = item.phone
        
        let td3 = document.createElement("td")
        td3.innerText = item.group
        
        let td4 = document.createElement("td")
        
        let image = document.createElement("img")
        image.classList.add("w-25")
        image.src = item.imgSrc
        image.alt = ""
        td4.append(image)

        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "O'chirish"
        deleteBtn.setAttribute("onclick",`deleteStudent(${counter})`)
        
        let editBtn = document.createElement("button")
        editBtn.innerText = "Tahrirlash"
        editBtn.setAttribute("onclick",`editStudent(${counter})`)
        editBtn.setAttribute("data-bs-toggle", "modal")
        editBtn.setAttribute("data-bs-target", "#exampleModal")

        tr.append(td,td1,td2,td3,td4,deleteBtn,editBtn)

        let tbody = document.querySelector(".tbody")
        tbody.append(tr)
        counter ++
    })
}


// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     } else {
//       var pivot = arr[0];
//       var left = [];
//       var right = [];
  
//       for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//           left.push(arr[i]);
//         } else {
//           right.push(arr[i]);
//         }
//       }
  
//       return quickSort(left).concat(pivot, quickSort(right));
//     }
//   }
  
//   // Test uchun funksiya
//   var arr = [6, 5, 3, 1, 8, 7, 2, 4];
//   console.log("Boshlang'ich massiv: " + arr);
//   var sortedArr = quickSort(arr);
//   console.log("Saralangan massiv: " + sortedArr);
