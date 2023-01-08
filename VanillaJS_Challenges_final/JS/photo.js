const photoList = [
    'alberta.jpg',
    'gyeongbok-palace.jpg',
    'mountain-landscape.jpg'
]
const randomPhoto = Math.floor(Math.random() * photoList.length);
document.body.style.backgroundImage = `url(photo/${photoList[randomPhoto]})`;