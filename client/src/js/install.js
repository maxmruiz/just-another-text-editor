const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    
    // Save the event so it can be triggered later.
    deferredPrompt = event;
    
    // Update UI to notify the user they can install the PWA
    butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        
        // We've used the prompt, and can't use it again, clear it
        deferredPrompt = null;
    }
    
    // Hide the install button, the app can't be installed twice
    butInstall.style.display = 'none';
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // App is installed
    console.log('PWA has been installed');
});