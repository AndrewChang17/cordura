
const openDialog = (dialogId) => {
    const dialog = document.getElementById(dialogId);
    dialog.showModal();

    dialog.addEventListener('click', function(e) {
        if (e.target === this) {
            dialog.close();
        }
    });
}