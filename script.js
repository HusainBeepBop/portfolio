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
        document.getElementById('main-content').innerHTML = data;
  
        // Set active tab
        document.querySelectorAll('.navbar a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
          }
        });
      })
      .catch(err => {
        console.error('Error loading page:', err);
        document.getElementById('main-content').innerHTML = `<p style="color:red;">Failed to load ${page}.html</p>`;
      });
  }
  