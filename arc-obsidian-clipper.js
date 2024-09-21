// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Create a trigger button
    const button = document.createElement('button');
    button.innerText = 'Clip';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = 1000;
    button.style.padding = '10px';
    button.style.background = 'rgba(124, 58, 237, 0.5)'; // 50% transparent new color
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '10px'; // Rounded corners
    button.style.cursor = 'pointer';
  
    // Append button to the body
    document.body.appendChild(button);
  
    // Add event listener to run the bookmarklet code when clicked
    button.addEventListener('click', function() {
        // Import Turndown and Readability modules
        Promise.all([
            import('https://unpkg.com/turndown@6.0.0?module'),
            import('https://unpkg.com/@tehshrike/readability@0.2.0')
        ]).then(async ([{ default: Turndown }, { default: Readability }]) => {
            // Get the selected text or fallback to the page content
            const selection = window.getSelection().toString();
            const { title, content } = new Readability(document.cloneNode(true)).parse();
            const markdownBody = new Turndown().turndown(selection || content);
  
            // Get today's date in the correct format
            const today = new Date().toISOString().split('T')[0];
  
            // Proper YAML Front Matter formatting
            const fileContent = `---
  title: "${title}"
  source: "${document.URL}"
  clipped: "${today}"
  ---
  
  ${markdownBody}`;
  
            // For now, output to console (replace this with actual saving logic if needed)
            console.log(fileContent);
  
            // Optionally redirect to Obsidian with the generated content
            const vault = ''; // Optional: specify the vault name if needed
            const folder = 'Clippings/'; // Optional: specify a folder
            const fileName = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`;
            const vaultName = vault ? `&vault=${encodeURIComponent(vault)}` : '';
            const obsidianUri = `obsidian://new?file=${encodeURIComponent(folder + fileName)}&content=${encodeURIComponent(fileContent)}${vaultName}`;
  
            // Redirect to Obsidian if applicable
            document.location.href = obsidianUri;
        });
    });
  
    // Add keyboard shortcut (Control + Shift + M) to trigger the button click
    document.addEventListener('keydown', function(event) {
      if (event.key === 'M' && event.shiftKey && event.ctrlKey) { // Control + Shift + M
        button.click(); // Programmatically trigger the button click
      }
    });
  
    // Log that the Boost is loaded and working
    console.log('Boost has been successfully applied.');
  });