let ID = 1;
let tareasAgendadas = [];
let tareasRealizadas = [];
const inputTareas = document.querySelector('#tareas-input');
const agregarBtn = document.querySelector('#agregar-button');
const listaTareas = document.querySelector('#tareas-div-div');
const listaRealizadas = document.querySelector('#tareas-realizadas-div');
const cantidadPendientes = document.querySelector('#cantidad-pendientes');
const cantidadRealizadas = document.querySelector('#cantidad-realizadas');


function agregarTareas (){
    for(let tareaind of tareasAgendadas) {
        listaTareas.innerHTML += `
            <div class='template-div'>
                <div class='id-div'>
                    <h4>${tareaind.id}</h4>            
                </div>
                <div class='nombretarea-div'>
                    <h4>${tareaind.tarea}</h4>            
                </div> 
                <button class='button' id='eliminar-button' onclick='eliminarTarea(${tareaind.id})'>Eliminar</button>
                <button class='button' id='realizada-button' onclick='cumplirTarea(${tareaind.id})'>Realizada</button>                
            </div>            
        `       
    }    
}

function agregarTareaRealizada () {
    for(let tarearealizada of tareasRealizadas) {
        listaRealizadas.innerHTML += `
            <div class='template-div'>
                <div class='id-div'>
                    <h4>${tarearealizada.id}</h4>            
                </div>
                <div class='nombretarea-div'>
                    <h4 class='tarea-completa'>${tarearealizada.tarea}</h4>            
                </div>                           
            </div>            
        `       
    }     
}

inputTareas.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        if (inputTareas.value === '') {
            alert("Por favor, incluir una tarea");
            return;
        }
        const nuevasTareas = {id: ID++, tarea: inputTareas.value};    
        tareasAgendadas.push(nuevasTareas);
        cantidadPendientes.textContent = tareasAgendadas.length;
        inputTareas.value = "";
        listaTareas.innerHTML = '';  
    
        agregarTareas();  
    }
})

agregarBtn.addEventListener('click', function(){
    if (inputTareas.value === '') {
        alert("Por favor, incluir una tarea");
        return;
    }
    const nuevasTareas = {id: ID++, tarea: inputTareas.value};    
    tareasAgendadas.push(nuevasTareas);
    cantidadPendientes.textContent = tareasAgendadas.length;
    inputTareas.value = "";
    listaTareas.innerHTML = '';  

    agregarTareas();     
})

function eliminarTarea (id) {
    const indiceTareas = tareasAgendadas.findIndex((ele) => ele.id == id);
    tareasAgendadas.splice(indiceTareas, 1);
    cantidadPendientes.textContent = tareasAgendadas.length;  
    listaTareas.innerHTML = '';
    agregarTareas();
}


function cumplirTarea(id) {
       
    const indiceTareas = tareasAgendadas.findIndex((ele) => ele.id == id);     
    tareasDesplazadas = tareasAgendadas.splice(indiceTareas, 1);    
        
    tareasRealizadas = tareasRealizadas.concat(tareasDesplazadas);
    console.log(tareasRealizadas);
    cantidadPendientes.textContent = tareasAgendadas.length;
    cantidadRealizadas.textContent = tareasRealizadas.length;
        
    listaTareas.innerHTML = '';
    agregarTareas();

    listaRealizadas.innerHTML = '';
    agregarTareaRealizada();   
}


