const count = document.getElementById("conta");
const total = document.getElementById("total");

// Array para almacenar las tareas
let tasks = [];
let contador = 0;
let totalcount = 0;

// Función para agregar una tarea a la lista
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({
            text: taskText,
            completed: false
        });
        taskInput.value = "";
        totalcount++;
    
        total.textContent = totalcount;
        renderTasks();
    }
}

// Función para mostrar las tareas en la lista
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const a = document.createElement("a");
        a.textContent = index + '-' + task.text;
        a.className = task.completed ? "list-group-item list-group-item-action active animate__animated animate__flipInX" : "animate__animated animate__flipInX list-group-item list-group-item-action";

        // Marcar tarea como completada al hacer clic en ella
        a.addEventListener("click", () => {
            // tasks[index].completed = !tasks[index].completed;
            // debugger
            if(tasks[index].completed == false){
                tasks[index].completed = true;
                contador++;
                actualizarContador()
            }else{
                tasks[index].completed = false;
                contador--;
                actualizarContador()
            }
            renderTasks()
        });

        taskList.appendChild(a);
    });
}

function actualizarContador() {
    count.textContent = contador;
}

// Inicializar la lista de tareas al cargar la página
renderTasks();