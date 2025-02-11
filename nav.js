var todo = [

];

var alltodo = JSON.stringify(todo)

localStorage.setItem("todo", alltodo)

function Addtodofunc() {


  var taskinput = document.getElementById("usertodo").value
  var dateinput = document.getElementById("datetodo").value


  var newuser = {
    Task: taskinput,
    status : "incomp",

    date: dateinput

  }
  todo.push(newuser)

  var alltodo = JSON.stringify(todo)

  localStorage.setItem("todo", alltodo)
  readdata()

}

function readdata() {
  var tbody = document.getElementById("tbodydata")
  tbody.innerHTML = "";
  var item = localStorage.getItem("todo")
  var todoitem = JSON.parse(item)
  todoitem.forEach(
    (element, index) => {


      console.log(element)
      tbody.innerHTML += `

        <tr>
          <th>${index + 1}</th>
          <td>${element.Task}</td>
          <td>${element.date}</td>

          <th scope="col">
            <button class="btn btn-secondary btn-sm" onclick="complete(${index})">Complete</button>
            <button class="btn btn-danger btn-sm">Delete</button>
          </th>
        </tr>
`












    }
  )


}
function complete(TaskId) {

  var item = localStorage.getItem("todo");
  var item = JSON.parse(item);
  var singletask = todoitem(TaslId);
  var singletask = "comp"
  console.log(singletask)




  // console.log(TaskId + 1);


}
