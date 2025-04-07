console.log("Portfolio website loaded.");

function loadPage(page) {
    fetch(`${page}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        const contentDiv = document.getElementById('main-content');
        if (contentDiv) {
          contentDiv.innerHTML = data;
        }
  
        document.querySelectorAll('.navbar a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
          }
        });
      })
      .catch(err => {
        console.error('Error loading page:', err);
      });
  }
  
  function handleHashChange() {
    const page = window.location.hash.substring(1) || 'about';
    loadPage(page);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    handleHashChange(); 
  });
  
  window.addEventListener('hashchange', handleHashChange); 
  

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);


window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
});


document.addEventListener('click', function (e) {
    const blogItem = e.target.closest('.blog-item');
    if (blogItem && blogItem.hasAttribute('data-blog')) {
      const blogFile = blogItem.getAttribute('data-blog');
      const pageName = blogFile.replace('.html', '');
  
      window.location.hash = pageName; 
      loadPage(pageName); 
    }
  });
  