let todoInput=document.querySelector(".todoTitle");
let todoForm=document.querySelector("#todoform");
let todoContainer=document.querySelector(".todoContainer");
todoForm.addEventListener("submit",function(e){
    e.preventDefault()
 let value=inputValue();
 let newTodo={
    id:Math.floor(Math.random*10000),
    title:value
 }
 addTodo(newTodo);
 todoInput.value=""
})

function inputValue()
{
    return todoInput.value;
}
function addTodo(todo)
{
    
    let li=document.createElement("li")
    li.setAttribute("id",`${todo.id}`)
    li.innerHTML=` <div>
           <input type="checkbox" name="" id="checkbox">
           <h1>${todo.title}</h1>
           <div>
            <button class="edit">✏️</button>
            <button class="delete">❌</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos ratione optio libero rerum porro!</p>
           </div>
        </div>`
        todoContainer.appendChild(li);

}