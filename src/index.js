console.log('lesgooo');

// Model

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

  // create employee list
  const employee_list_background = document.createElement('div');
  employee_list_background.classList.add('employee_list_background');
  background.append(employee_list_background);

  // create employee searchbar
  const employee_searchbar = document.createElement('input');
  employee_searchbar.setAttribute('id', 'employee_searchbar');
  employee_searchbar.type = 'text';
  employee_searchbar.placeholder = 'search employee';
  employee_list_background.append(employee_searchbar);

  // create nav
  const nav_background = document.createElement('div');
  nav_background.classList.add('nav_background');
  background.append(nav_background);

  // create work field
  const work_field_background = document.createElement('div');
  work_field_background.classList.add('work_field_background');
  background.append(work_field_background);
}

// Controller
function click_login() {
  const login_button = document.querySelector('#submit');

  login_button.addEventListener('click', () => {
    render_main_page();
  });
}

click_login();
