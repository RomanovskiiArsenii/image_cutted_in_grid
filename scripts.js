const setPartsPositions = (() => {
    const imgContainers = document.getElementsByClassName('cutted_image');
    let leftPosition = 110;

    const setPartsPositionsInit = () => {
        for (let i = 0; i < imgContainers.length; i++) {
            leftPosition -= 100;
            imgContainers[i].style.left = `${leftPosition}%`;
        }
    };

    return setPartsPositionsInit;
})();

window.addEventListener('load', setPartsPositions);
