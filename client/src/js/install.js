const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// Event listener for the appinstalled event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});