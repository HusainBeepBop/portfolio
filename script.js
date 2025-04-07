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
  
  document.addEventListener('DOMContentLoaded', function () {
    loadPage('about'); 
  });
  