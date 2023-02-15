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
}

// Controller
function click_login() {
  const login_button = document.querySelector('#submit');

  login_button.addEventListener('click', () => {
    render_main_page();
  });
}

click_login();
