let students=[{name:"mohamed", age:40, job:"eng"},
                {name:"amina", age:40, job:"doc"},
                {name:"ayman", age:40, job:"eng"},
                {name:"ahmed", age:40, job:"eng"},
];
table(students);
function table(data){
    document.getElementById("tbl").innerHTML="";
    let id=0;
    data.forEach(element => {
          document.getElementById("tbl").innerHTML+=`
           <tr>
                 <th>${++id}</th>
                <th>${element.name}</th>
                <th>${element.age}</th>
                <th>${element.job}</th>
                <th><button onclick="edit(${id})">edit</button></th>
                <th><button onclick="del(${id})">delet</button></th>
            </tr>
          `  
    });
};
// ده العرض 
function add(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let job=document.getElementById("job").value;
    if(name&& age&& job){
        let student={name:name,age:age , job:job};
        students.push(student);
        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("job").value="";
table(students);}
else{
alert("again");
}
};
// ده الاضافه add
function del(id) {
    id=id-1;
    let temp=[];
    for( const key in students){
if(key!=id){
    temp.push(students[key]);
}
    }
    students=temp;
    table(students);
}
// ده الdlelt
function edit(id){
    let index= id-1;
       document.getElementById("name").value=students[index].name;
        document.getElementById("age").value=students[index].age;
        document.getElementById("job").value=students[index].job;
document.getElementById("btns").innerHTML=`
<button onclick="update(${id})">update</button>
`};
// ده الedit
function update(id){
    let index=id-1;
      let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let job=document.getElementById("job").value;
    if(name&& age&& job){
        let student={name:name,age:age , job:job};
        students[index]=student
        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("job").value="";
        document.getElementById("btns").innerHTML=`
<button onclick="add()">add</button>
`;
table(students);}
else{
alert("again");};
    table(students);
};
// ده الupdate