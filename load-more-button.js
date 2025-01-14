document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.elementor-gallery__container');
    const galleryItems = document.querySelectorAll('.e-gallery-item');
    const itemsPerPage = 8;
    let currentPage = 1;

    function showItems() {
        const totalVisible = itemsPerPage * currentPage;
        galleryItems.forEach((item, index) => {
            if (index < totalVisible) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    showItems();

    const loadMoreButton = document.createElement('button');
    loadMoreButton.innerText = 'Załaduj więcej';
    loadMoreButton.classList.add('custom-load-more'); // Przypisz klasę
    galleryContainer.parentElement.appendChild(loadMoreButton);

    loadMoreButton.addEventListener('click', function () {
        currentPage++;
        showItems();
        if (itemsPerPage * currentPage >= galleryItems.length) {
            loadMoreButton.style.display = 'none';
        }
    });
});
