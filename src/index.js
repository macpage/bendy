console.log('lesgooo');

// Model
let loggedIn = false;

// View
function render_main_page() {
  // clear body
  const body = document.querySelector('body');
  body.innerHTML = '';

  // create main page
  // create logout button with div
  const header = document.createElement('div');
  header.classList.add('header');
  body.append(header);

  const logout_button = document.createElement('button');
  logout_button.setAttribute('id', 'logout_button');
  logout_button.innerHTML = 'logout';
  header.append(logout_button);

  // create background
  const background = document.createElement('div');
  background.classList.add('background');
  body.append(background);

  // create employee list background
  const employee_list_background = document.createElement('div');
  employee_list_background.classList.add('employee_list_background');
  background.append(employee_list_background);

  // create employee searchbar
  const employee_searchbar = document.createElement('input');
  employee_searchbar.setAttribute('id', 'employee_searchbar');
  employee_searchbar.type = 'text';
  employee_searchbar.placeholder = 'search employee';
  employee_list_background.append(employee_searchbar);

  // create employee list
  for (let i = 0; i < 6; i++) {
    const employee_box = document.createElement('div');
    employee_box.classList.add('employee_box');
    employee_box.setAttribute('draggable', 'true');
    employee_box.setAttribute('id', 'employee_id_' + i);
    employee_list_background.append(employee_box);

    const employee_box_picture = document.createElement('img');
    employee_box_picture.classList.add('employee_box_picture');
    employee_box.append(employee_box_picture);

    const employee_box_text = document.createElement('p');
    employee_box_text.classList.add('employee_box_text');
    employee_box_text.innerHTML = 'Zane Layton';
    employee_box.append(employee_box_text);

    const employee_box_hours = document.createElement('p');
    employee_box_hours.classList.add('employee_box_hours');
    employee_box_hours.innerHTML = "0/20 hr's";
    employee_box.append(employee_box_hours);

    const employee_box_status = document.createElement('div');
    employee_box_status.classList.add('employee_box_status');
    employee_box.append(employee_box_status);
  }

  // create nav
  const nav_background = document.createElement('div');
  nav_background.classList.add('nav_background');
  background.append(nav_background);

  const nav_text = document.createElement('h1');
  nav_text.classList.add('nav_text');
  nav_text.innerHTML = '20.02.23 - 26.02.23';
  nav_background.append(nav_text);

  const old_date_button = document.createElement('button');
  old_date_button.classList.add('old_date_button');
  old_date_button.innerHTML = 'old';
  nav_background.append(old_date_button);

  const new_date_button = document.createElement('button');
  new_date_button.classList.add('new_date_button');
  new_date_button.innerHTML = 'new';
  nav_background.append(new_date_button);

  // create work field
  const work_field_background = document.createElement('div');
  work_field_background.classList.add('work_field_background');
  background.append(work_field_background);

  for (let i = 0; i < 7; i++) {
    const day_field = document.createElement('div');
    day_field.classList.add('day_field');
    work_field_background.append(day_field);
  }

  work_field_background.children[0].innerHTML = 'Mon 20.02';
  work_field_background.children[1].innerHTML = 'Tue 21.02';
  work_field_background.children[2].innerHTML = 'Wed 22.02';
  work_field_background.children[3].innerHTML = 'Thu 23.02';
  work_field_background.children[4].innerHTML = 'Fri 24.02';
  work_field_background.children[5].innerHTML = 'Sat 25.02';
  work_field_background.children[6].innerHTML = 'Sun 26.02';
}

// Controller
// Login
function click_login() {
  const login_button = document.querySelector('#submit');

  login_button.addEventListener('click', () => {
    render_main_page();
    loggedIn = true;
    startDrag();
    dragover();
    drop();
  });
}

click_login();

// Drag & Drop
function startDrag() {
  document;
  let employees = document.querySelectorAll('.employee_box');
  employees.forEach((e) => {
    e.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
      e.currentTarget.style.backgroundColor = 'yellow';
    });
  });
}

function dragover() {
  document.querySelector('.day_field').addEventListener('dragover', (e) => {
    e.preventDefault();
  });
}

function drop() {
  document.querySelector('.day_field').addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = e.target;
    dropzone.append(draggableElement);
    e.dataTransfer.clearData();
  });
}
