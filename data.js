var row = null;

const studentData = document.querySelector('#studentData');
const studentForm = document.querySelector('#studentForm');
const submitButton = document.getElementById('submitButton')
const studentName = document.getElementById('studentName');
const studentNim = document.getElementById('studentNim');
const studentFaculty = document.getElementById('studentFaculty');
const studentMajor = document.getElementById('studentMajor');

function clearValues(){
    studentName.value = "";
    studentNim.value = "";
    studentFaculty.value = "";
    studentMajor.value = "";
}

//delete & edit
studentData.addEventListener('click', (e)=>{
    target = e.target;
    // console.log(target);
    if(target.classList.contains('delete')){
        target.parentNode.parentNode.remove();
        console.log(target.parentNode.parentNode);
    } 
    if(target.classList.contains('edit')){
        row = target.parentNode.parentNode;

        studentName.value = row.children[0].textContent;
        studentNim.value = row.children[1].textContent;
        studentFaculty.value = row.children[2].textContent;
        studentMajor.value = row.children[3].textContent;
    }
})

//submit
studentForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    target = e.target;

    if(studentName.value == ""|studentNim.value == ""|studentFaculty.value == ""|studentMajor.value == ""){
        alert('isi dlu bg');
    } else{ 
        if( row == null){
            const newData = document.createElement("div");
            newData.classList.add('card');

            newData.innerHTML = `
            <li>${studentName.value}</li>
            <li>${studentNim.value}</li>
            <li>${studentFaculty.value}</li>
            <li>${studentMajor.value}</li>
            <div class="buttons">
            <li></li>
            <button class="btn-submit edit">Edit</button>
            <button class="btn-submit delete">Delete</button>
            <li></li>
            </div>
            `;

            studentData.appendChild(newData);
            row = null;
            clearValues();
        } else{
            if(row.children[0].innerHTML != studentName.value |row.children[1].innerHTML != studentNim.value |row.children[2].innerHTML != studentFaculty.value|row.children[3].innerHTML != studentMajor.value){
                row.children[4].children[0].innerHTML = "(edited)";
            }
            row.children[0].innerHTML = studentName.value;
            row.children[1].innerHTML = studentNim.value;
            row.children[2].innerHTML = studentFaculty.value;
            row.children[3].innerHTML = studentMajor.value;

            clearValues();
            row = null;
        }
        
    }
    
})

function notification(message){
    
}