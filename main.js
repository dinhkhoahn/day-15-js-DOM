let students = [
    {
        id: 1,
        name: "Dan",
        age: 23,
        email: "dan@gmail.com"
    },
    {
        id: 2,
        name: "Ngoc",
        age: 24,
        email: "ngoc@gmail.com"
    },
    {
        id: 3,
        name: "Long",
        age: 21,
        email: "long@gmail.com"
    },
    {
        id: 4,
        name: "Tung",
        age: 23,
        email: "tung@gmail.com"
    },
    {
        id: 5,
        name: "Tram",
        age: 20,
        email: "tram@gmail.com"
    },
    {
        id: 6,
        name: "Trong",
        age: 24,
        email: "trong@gmail.com"
    },
    {
        id: 7,
        name: "Han",
        age: 22,
        email: "han@gmail.com"
    },
    {
        id: 8,
        name: "Lan",
        age: 24,
        email: "lan@gmail.com"
    },
    {
        id: 9,
        name: "Hoa",
        age: 20,
        email: "hoa@gmail.com"
    },
    {
        id: 10,
        name: "Loc",
        age: 24,
        email: "loc@gmail.com"
    },
    {
        id: 11,
        name: "Lam",
        age: 22,
        email: "lam@gmail.com"
    }
]

//Tao element td, tr roi them vao tbody cua table
//Thêm sự kiện click cho tiêu đề, tuổi
let table = document.body.firstElementChild
let tbody = document.querySelector('.student-list')

//Tao tr
for (let i = 0; i < students.length + 1; i++) {
    let tr = document.createElement("tr")
    tbody.appendChild(tr)
}

let numberTd = Object.keys(students[0]).length
let arrKeys = Object.keys(students[0])

//Tao title tr
let firstTr = tbody.firstElementChild
for (let i = 0; i < numberTd; i++) {
    let td = document.createElement("td")
    td.textContent = arrKeys[i]
    firstTr.appendChild(td)
}

//Tao toan bo td va them su kien click vao td
for (let i = 0; i < students.length; i++) {
    //Chon ra tr
    let tr = tbody.children[i+1]

    //Tao td trong tr
    for (let j = 0; j < numberTd; j++) {
        let td = document.createElement("td")
        td.textContent = students[i][arrKeys[j]]
        tr.appendChild(td)

        //Theem sự kiện click cho td
        td.addEventListener("click", function(e) {
            alert(e.currentTarget.textContent)
        })
    }
}

//Thêm sự kiện click cho cac td
// let allTr = tbody.children
// for (let i = 0; i < allTr.length; i++) {
//     for (let j = 0; j < allTr[i].children.length; j++) {
//         let td = allTr[i].children[j]
//         td.addEventListener("click", function(e) {
//             alert(e.currentTarget.textContent)
//         })
//     }
// }



