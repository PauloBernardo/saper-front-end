const Button = ({text, action, className}) => {
    return <button onClick={action} className={className}>{text}</button>
}

function renderButtons() {
    const elementButtons = <div className={'row'}>
        <Button text={'Adicionar Item'} action={addItemList} className={'col-6 btn btn-primary'} />
        <Button text={'Remover Item'} action={removeItemList} className={'col-6 btn btn-danger'} />
    </div>
    const addDomContainer = document.querySelector('#buttonsRoot');
    const addRoot = ReactDOM.createRoot(addDomContainer);
    addRoot.render(elementButtons);
}

window.onload = function() {
    const domContainer = document.querySelector('#like_button_container');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(LikeButton));

    const element = <h1 onClick={() => console.log("Clicou no texto!")} className={'text-white'}>Hello, world</h1>;
    const rootContainer = document.querySelector('#root');
    const rootDOM = ReactDOM.createRoot(rootContainer);
    rootDOM.render(element);

    renderButtons();
}

function addItemList() {
    const lista = document.querySelector(".lista-aleatoria");
    const newItem = document.createElement("li");
    newItem.className = "list-group-item";
    let text = prompt("Descreva o novo item:")
    if (!text) return;
    newItem.innerHTML = text;
    lista.appendChild(newItem);
}

function removeItemList() {
    const lista = document.querySelector(".lista-aleatoria");
    if (lista.children.length > 0) {
        lista.removeChild(lista.childNodes.item(lista.children.length))
    }
}
