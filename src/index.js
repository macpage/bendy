console.log('sldflkksd');

// Model
let loggedIn = false;

function employee(
  id,
  first,
  last,
  age,
  emp_type,
  besides, // is student or something
  time_available, // how much work time to offer
  time_to_work,
  time_worked, // how many hours already worked
  time_remaining, // how many hours to work til all hours are used
  job_start,
  job_end,
  days_worked,
  hours_sum,
  position,
  overtime
) {
  this.id = id;
  this.first = first;
  this.last = last;
  this.age = age;
  this.emp_type = emp_type;
  this.besides = besides;
  this.time_available = time_available;
  this.time_to_work = time_to_work;
  this.time_worked = time_worked;
  this.time_remaining = time_remaining;
  this.job_start = job_start;
  this.job_end = job_end;
  this.days_worked = days_worked;
  this.hours_sum = hours_sum;
  this.position = position;
  this.overtime = overtime;
}

let emp_arr = [];
emp_arr[0] = new employee(
  0,
  'Mac',
  'Sophani',
  23,
  'Full Time',
  '',
  40,
  0,
  0,
  40,
  '01.08.2023',
  '--.--.----',
  0,
  0,
  '',
  0
);
console.log(emp_arr[0].first);

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
  emp_arr.forEach((e) => {
    const employee_box = document.createElement('div');
    employee_box.classList.add('employee_box');
    employee_box.setAttribute('draggable', 'true');
    employee_box.setAttribute('id', 'employee_id_' + e.id);
    employee_list_background.append(employee_box);

    const employee_box_picture = document.createElement('img');
    employee_box_picture.classList.add('employee_box_picture');
    employee_box.append(employee_box_picture);

    const employee_box_text = document.createElement('p');
    employee_box_text.classList.add('employee_box_text');
    employee_box_text.innerHTML = e.first + ' ' + e.last;
    employee_box.append(employee_box_text);

    const employee_box_position = document.createElement('p');
    employee_box_position.classList.add('employee_box_position');
    employee_box_position.innerHTML = e.position;
    employee_box.append(employee_box_position);

    const employee_box_hours = document.createElement('p');
    employee_box_hours.classList.add('employee_box_hours');
    employee_box_hours.innerHTML = e.time_to_work + '/' + e.time_remaining;
    employee_box.append(employee_box_hours);

    const employee_box_status = document.createElement('div');
    employee_box_status.classList.add('employee_box_status');
    employee_box.append(employee_box_status);
  });

  // create nav
  const nav_background = document.createElement('div');
  nav_background.classList.add('nav_background');
  background.append(nav_background);

  const nav_text = document.createElement('h1');
  nav_text.classList.add('nav_text');
  nav_background.append(nav_text);

  const old_date_button = document.createElement('button');
  old_date_button.classList.add('old_date_button');
  old_date_button.innerHTML = 'old';
  nav_background.append(old_date_button);

  const new_date_button = document.createElement('button');
  new_date_button.classList.add('new_date_button');
  new_date_button.innerHTML = 'new';
  nav_background.append(new_date_button);

  // Current weak
  let d = new Date();
  let firstDay;
  let lastDay;
  let day;
  if (d.getDay() == 0) {
    lastDay = new Date(d.setDate(d.getDate() - d.getDay() + 0));
    firstDay = new Date(d.setDate(d.getDate() - d.getDay() - 6));
    day = new Date(d.setDate(d.getDate() - d.getDay() + 2));
    console.log(
      'first day: ' +
        firstDay.getDate() +
        '.' +
        firstDay.getMonth() +
        '.' +
        firstDay.getFullYear()
    );
    nav_text.innerHTML =
      firstDay.getDate() +
      '.' +
      parseInt(firstDay.getMonth() + 1) +
      '.' +
      firstDay.getFullYear() +
      ' - ' +
      lastDay.getDate() +
      '.' +
      parseInt(lastDay.getMonth() + 1) +
      '.' +
      lastDay.getFullYear();
  } else {
    lastDay = new Date(d.setDate(d.getDate() - d.getDay() + 7));
    firstDay = new Date(d.setDate(d.getDate() - d.getDay() - 6));
    nav_text.innerHTML =
      firstDay.getDate() +
      '.' +
      parseInt(firstDay.getMonth() + 1) +
      '.' +
      firstDay.getFullYear() +
      ' - ' +
      lastDay.getDate() +
      '.' +
      parseInt(lastDay.getMonth() + 1) +
      '.' +
      lastDay.getFullYear();
    console.log('last day: ' + lastDay);
  }

  // create work field
  const work_field_background = document.createElement('div');
  work_field_background.classList.add('work_field_background');
  background.append(work_field_background);

  for (let i = 0; i < 7; i++) {
    const day_field = document.createElement('div');
    day_field.classList.add('day_field');
    work_field_background.append(day_field);
  }

  work_field_background.children[0].innerHTML = 'Mon ' + firstDay.getDate();
  work_field_background.children[1].innerHTML =
    'Tue ' + new Date(d.setDate(d.getDate() - d.getDay() + 2)).getDate();
  work_field_background.children[2].innerHTML =
    'Wed ' + new Date(d.setDate(d.getDate() - d.getDay() + 3)).getDate();
  work_field_background.children[3].innerHTML =
    'Thu ' + new Date(d.setDate(d.getDate() - d.getDay() + 4)).getDate();
  work_field_background.children[4].innerHTML =
    'Fri ' + new Date(d.setDate(d.getDate() - d.getDay() + 5)).getDate();
  work_field_background.children[5].innerHTML =
    'Sat ' + new Date(d.setDate(d.getDate() - d.getDay() + 6)).getDate();
  work_field_background.children[6].innerHTML =
    'Sun ' + new Date(d.setDate(d.getDate() - d.getDay() + 7)).getDate();

  document.querySelectorAll('.day_field').forEach((e) => {
    const day_hours = document.createElement('p');
    day_hours.classList.add('day_hours');
    day_hours.innerHTML = '0/16 hrs';
    e.append(day_hours);
  });
}

// Controller
// Login
function click_login() {
  const login_button = document.querySelector('#submit');

  login_button.addEventListener('click', () => {
    render_main_page();
    loggedIn = true;
    startDrag();
    dragOver();
    drop();
  });
}

click_login();

// Drag & Drop
function startDrag() {
  let employees = document.querySelectorAll('.employee_box');
  console.log('bro');
  employees.forEach((e) => {
    e.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
      e.currentTarget.style.backgroundColor = 'yellow';
    });
  });
  employees.forEach((e) => {
    e.addEventListener('dragend', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
      e.currentTarget.style.backgroundColor = 'white';
    });
  });
}

function dragOver() {
  document.querySelector('.day_field').addEventListener('dragover', (e) => {
    e.preventDefault();
  });
}

function drop() {
  document.querySelector('.day_field').addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const clone = draggableElement.cloneNode(true);
    const dropzone = document.querySelector('.day_field');
    dropzone.append(clone);
    draggableElement.style.backgroundColor = 'white';
    clone.style.backgroundColor = 'white';
    clone.setAttribute('draggable', 'false');
    e.dataTransfer.clearData();

    clone.querySelector('.employee_box_hours').innerHTML = 0 + '/' + '40';
    //set click event
    clone.addEventListener('click', (e) => {
      let id;
      let s; // shift
      if (e.target !== e.currentTarget) {
        id = e.target.parentElement.id.slice(-1);
        s = e.target.parentElement;
      } else {
        id = e.target.id.slice(-1);
        s = e.target;
      }

      set_employee_shift(id, s);
    });
  });
}

// Set employee shift
function set_employee_shift(id, s) {
  const modal_background = document.createElement('div');
  modal_background.classList.add('modal_background');
  modal_background.style.display = 'flex';
  document.querySelector('body').append(modal_background);

  const modal_overlay = document.createElement('div');
  modal_overlay.classList.add('modal_overlay');
  modal_background.append(modal_overlay);

  let modal_employee_name = document.createElement('p');
  modal_employee_name.classList.add('modal_employee_name');
  modal_employee_name.innerHTML = emp_arr[id].first + ' ' + emp_arr[id].last;
  modal_overlay.append(modal_employee_name);

  let modal_employee_hours_remain = document.createElement('p');
  modal_employee_hours_remain.innerHTML = emp_arr[id].time_remaining;
  modal_overlay.append(modal_employee_hours_remain);

  const modal_role_selection = document.createElement('select');
  modal_overlay.append(modal_role_selection);
  let arr = ['Cash', 'Bar', 'Office'];

  arr.forEach((e) => {
    let option = document.createElement('option');
    option.value = e;
    option.text = e;
    modal_role_selection.append(option);
  });

  // Updating remaing hours
  const modal_hours_text = document.createElement('p');
  modal_hours_text.innerHTML = 'Hours to work: ';
  modal_overlay.append(modal_hours_text);

  let default_hours = emp_arr[id].time_remaining;
  let hours = 0;
  let hours_to_work = 0;
  const inputHandler = (e) => {
    hours = default_hours - e.target.value;
    modal_employee_hours_remain.innerHTML = hours;
    if (e.target.value <= 0 || e.target.value.length === 0) {
      modal_employee_hours_remain.innerHTML = default_hours;
      hours = default_hours;
    }
    modal_hours_text.innerHTML = 'Hours to work: ' + e.target.value;
    hours_to_work = e.target.value;
  };
  const modal_employee_hour = document.createElement('input');
  modal_employee_hour.classList.add('modal_employee_hour');
  modal_employee_hour.type = 'number';
  modal_overlay.append(modal_employee_hour);
  modal_employee_hour.addEventListener('input', inputHandler);
  modal_employee_hour.addEventListener('propertychange', inputHandler);

  // Modal Buttons
  const modal_cancel_btn = document.createElement('button');
  modal_cancel_btn.classList.add('modal_cancel_btn');
  modal_cancel_btn.innerHTML = 'Cancel';
  modal_cancel_btn.addEventListener('click', (e) => {
    modal_background.remove();
  });
  modal_overlay.append(modal_cancel_btn);

  const modal_confirm_btn = document.createElement('button');
  modal_confirm_btn.classList.add('modal_confirm_btn');
  modal_confirm_btn.innerHTML = 'Confirm';
  modal_confirm_btn.addEventListener('click', (e) => {
    // Update values (Hours, Positions)
    const emp = document
      .querySelector('.employee_list_background')
      .querySelector('#employee_id_' + id);
    console.log('hours to work: ' + emp_arr[id].time_to_work);
    emp_arr[id].time_remaining = hours;
    let x = Number(emp_arr[id].time_to_work);
    x = x + Number(hours_to_work);
    emp_arr[id].position = modal_role_selection.value;
    emp_arr[id].time_to_work = x;
    emp.querySelector('.employee_box_hours').innerHTML =
      x + '/' + emp_arr[id].time_available;
    console.log(emp_arr[id]);
    console.log('hours to work: ' + emp_arr[id].time_to_work);
    console.log('hours remaining: ' + emp_arr[id].time_remaining);
    s.querySelector('.employee_box_hours').innerHTML =
      Number(hours_to_work) + '/' + '40';
    console.log('here: ' + s.querySelector('.employee_box_hours').innerHTML);
    modal_background.remove();
  });
  modal_overlay.append(modal_confirm_btn);
}
