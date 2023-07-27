let contador = 0

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const checkbox = document.createElement("input");
        checkbox.type = 'checkbox'

        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        // Botón para eliminar la tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        // Agregar el botón de eliminar a la tarea
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
        newTask.appendChild(checkbox);

        checkbox.addEventListener('click', function(){
            if(checkbox.checked){
                contador++
                console.log('checheado', contador)
            }
            else{
                contador--
                console.log('deschequeado', contador)
            }
        })

        // Limpiar el campo de entrada
        taskInput.value = "";
    }
}