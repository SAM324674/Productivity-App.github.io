let add=document.getElementById('add');
let addTaskContainer=document.getElementById('add-task');
let addInput=document.getElementById('add-task-input');
let Modify=document.getElementById('task-modify');
let TaskCounter=0;
let addTask=()=>{
    // create list
    if(addInput.value===''){
        alert('enter a task');
    }
    else{
        TaskCounter++;
        const newTaskDiv=document.createElement("li");
        newTaskDiv.classList.add('ToDo-task');
        // append list
        const spanDiv=document.createElement('div');
        spanDiv.classList.add('span-div');
        spanDiv.innerText=addInput.value;
        newTaskDiv.id=`task-${TaskCounter}`;
        newTaskDiv.appendChild(spanDiv);
        const btnDiv=document.createElement('div');
        // create buttons
        const taskDone=document.createElement('button');
        const edit=document.createElement('button');
        const deleteTask=document.createElement('button');

        
            // append task done button
            taskDone.classList.add('modify-btn');
            taskDone.id=`task-done-${TaskCounter}`;
            taskDone.innerHTML='<i class="fa-solid fa-check"></i>';
            btnDiv.appendChild(taskDone);
            // append edit button
            edit.classList.add('modify-btn');
            edit.id=`edit-task-${TaskCounter}`;
            edit.innerHTML='<i class="fa-solid fa-pen"></i>';
            btnDiv.appendChild(edit);
            // append delete button
            deleteTask.classList.add('modify-btn');
            deleteTask.id=`delete-task-${TaskCounter}`;
            deleteTask.innerHTML='<i class="fa-solid fa-minus"></i>';
            btnDiv.appendChild(deleteTask);
    
            // append button div

        btnDiv.classList.add('btn-div');
        newTaskDiv.appendChild(btnDiv);
        Modify.appendChild(newTaskDiv);
        //ADDING EVENT LISTENER TO DELETE BTN
        
            deleteTask.addEventListener('click',removeTask);
            edit.addEventListener('click',editTask);
            taskDone.addEventListener('click',function(e){
                TaskFinish(e);
                newTaskDiv.querySelector(`#edit-task-${TaskCounter}`).disabled=true;
                newTaskDiv.querySelector(`#delete-task-${TaskCounter}`).disabled=true;
            });
        addInput.value='';
    }

}

let TaskFinish=(e)=>{
    const target=e.target;
    const list=target.closest('li');
    list.style.textDecoration='line-through';
    
}
let removeTask=(e)=>{

    const target=e.target;
    const parent=target.closest('li');
    TaskCounter--;
    console.log(parent);
    parent.remove();
}
let editTask=(e)=>{
    const target=e.target;
    const edit_task=target.closest('li');
    console.log(edit_task);
    const inputBox=document.createElement('input');
    inputBox.type='text';
    const taskContent=edit_task.firstChild.textContent;
    inputBox.classList.add('add-task-input');
    inputBox.value=taskContent;
    edit_task.firstChild.replaceWith(inputBox);
    inputBox.addEventListener('keydown',function(e){
        
        if(e.key==='Enter'){
            const text=document.createTextNode(inputBox.value);
            edit_task.firstChild.replaceWith(text);
        }
    });
    
}


add.addEventListener('click',addTask);
addInput.addEventListener('keypress',function(e){
    if(e.key==="Enter"){
        addTask();
    }
    // console.log(e.target);
});
