const employees = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    position: "Software Engineer",
    department: "Engineering",
    email: "alice.johnson@example.com",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    position: "Product Manager",
    department: "Product",
    email: "bob.smith@example.com",
  },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Davis",
    position: "UX Designer",
    department: "Design",
    email: "carol.davis@example.com",
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Martinez",
    position: "Data Analyst",
    department: "Analytics",
    email: "david.martinez@example.com",
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Lee",
    position: "HR Manager",
    department: "Human Resources",
    email: "eva.lee@example.com",
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Wilson",
    position: "Marketing Specialist",
    department: "Marketing",
    email: "frank.wilson@example.com",
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Taylor",
    position: "Sales Representative",
    department: "Sales",
    email: "grace.taylor@example.com",
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Anderson",
    position: "Customer Support",
    department: "Support",
    email: "henry.anderson@example.com",
  },
  {
    id: 9,
    firstName: "Ivy",
    lastName: "Moore",
    position: "Finance Coordinator",
    department: "Finance",
    email: "ivy.moore@example.com",
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Taylor",
    position: "Legal Advisor",
    department: "Legal",
    email: "jack.taylor@example.com",
  },
];
let clientList = document.querySelector(".clientList");
let displayCLient = document.querySelector(".displayCLient");
function renderClients() {
  clientList.innerHTML = "";
  employees.map((employee) => {
    let div = document.createElement("div");
    div.innerHTML = `<li onclick="showCLient(${employee.id})">${employee.firstName}<span onclick="removeClient(this.parentElement)">X</span></li>`;
    clientList.appendChild(div);
  });
}

renderClients();

function showCLient(id) {
  let user = employees.find((a) => id === a.id);
  //   console.log(user);
  displayCLient.innerHTML = "";
  displayCLient.innerHTML = `<div>
  <h2>Name:- ${user.firstName} ${user.lastName}</h2>
  <p>Position ${user.position}</p>
  <p>Department ${user.department}</p>
  <p>Email ${user.email}</p>
  </div>`;
}

function removeClient(client) {
  client.remove();
}

document.getElementById("clientForm").addEventListener("click", addClient);

function addClient() {
  document.querySelector(".fo").classList.toggle("show");
}

//collect data from form
let count = 11;
let formData = document.querySelector("form>button");

formData.addEventListener("click", addClentToDB);
function addClentToDB(e) {
  e.preventDefault();
  let firstName = document.querySelector("form>#firstName");
  let lastName = document.querySelector("form>#lastName");
  let position = document.querySelector("form>#position");
  let department = document.querySelector("form>#department");
  let email = document.querySelector("form>#email");
  let obj = {
    id: count++,
    firstName: firstName.value,
    lastName: lastName.value,
    position: position.value,
    department: department.value,
    email: email.value,
  };

  employees.push(obj);
  //   console.log(employees);
  renderClients();
}

