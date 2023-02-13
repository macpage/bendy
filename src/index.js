console.log('lesgooo');

// Model

// View
function render_main_page() {
  // clear body
  const body = document.querySelector('body');
  body.innerHTML = '';

  // create main page
}

// Controller
function click_login() {
  const login_button = document.querySelector('#submit');

  login_button.addEventListener('click', () => {
    render_main_page();
  });
}

click_login();
