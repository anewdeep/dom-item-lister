// Add item
var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    // console.log(1);

    var itemName = document.querySelector('#item').value;
    // console.log(itemName);
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(itemName));
    var btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-right delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    itemList.appendChild(li);
    item.value = '';
}

// Remove Item
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter
var filterItem = document.querySelector('#filter');
filter.addEventListener('keyup', filterItems);

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.querySelectorAll('li');
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.setAttribute('display', 'block');
        } else {
            item.setAttribute('display', 'none');
        }
    })
}