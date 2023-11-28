

// let input;

// userInput.addEventListener('keydown', function(e) {
//     if (e.key === 'Enter') {
//         input = userInput.value;
//         userInput.value = ''; // Clear the input field after capturing its value
//         console.log(input);
//     }
// });


function addTask(){
  const taskInput = document.getElementById("user_input");
  const taskList = document.getElementById("list_items");
  const taskText = taskInput.value.trim();

  if(taskText !=="" ){
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    deleteButton.textContent = " ❌";
    deleteButton.onclick = function (){
      taskList.removeChild(li);
    };

    li.append(deleteButton);
    taskList.append(li);
    taskInput.value = "";

  }

}

document.getElementById("user_input").addEventListener("keypress",function (e){

  if(e.key ==="Enter"){
    addTask();
  }

});



// function addTask() {
//     const taskInput = document.getElementById("user_input");
//     const taskList = document.getElementById("list_items");
//     const taskText = taskInput.value.trim();
  
//     if (taskText !== "") {
//       const li = document.createElement("li");
//       li.textContent = taskText;
  
//       const deleteButton = document.createElement("span");
//       deleteButton.className = "delete";
//       deleteButton.textContent = " ❌";
//       deleteButton.onclick = function () {
//         taskList.removeChild(li);
//       };
  
//       li.appendChild(deleteButton);
//       taskList.appendChild(li);
//       taskInput.value = "";
//     }
//   }
  
//   document.getElementById("user_input").addEventListener("keyup", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });
  



// CHAT Gpt ////////////////////////////////////////////////////////////////

// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const taskList = document.getElementById("taskList");
//     const taskText = taskInput.value.trim();

//     if (taskText !== "") {
//         const li = document.createElement("li");
//         li.textContent = taskText;

//         const deleteButton = document.createElement("span");
//         deleteButton.className = "delete";
//         deleteButton.textContent = "❌";
//         deleteButton.onclick = function() {
//             taskList.removeChild(li);
//         };

//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
//         taskInput.value = "";
//     }
// }

// document.getElementById("taskInput").addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         addTask();
//     }
// });

