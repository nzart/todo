var empty = [];

const toDoForm = document.getElementById('todo');

// const oldPar = document.querySelector('.select').value;

function add() {
    
    var errand = document.getElementById('todo').value;
        
    function push() {
        return empty.push(errand);
    }
    push();
    console.log(empty);

};

function clear() {
    document.getElementById('todo').value = '';
}
     



function newTD() {
    
    if (document.getElementById('todo').value === '') {
        alert('Fill out form!')
    } else {
        
        //New List Item
        var newli = document.createElement('li');
    
        //New Check div    
        var newCheck = document.createElement('div');
        newCheck.classList.add('check');
        
        //New Trash Div
        var newTrash = document.createElement('div');
        newTrash.classList.add('trash');

        //Adding Text to P tag
        var tex = document.getElementById('todo').value;
        var newP = document.createElement('p');
        newP.classList.add('select');
        var p = document.createTextNode(tex);
        

        //Adding Icons
        var check = document.createElement('i');
        check.innerHTML = '<i class="far fa-check-circle"></i>';
        check.addEventListener('click', function() {
            newli.parentNode.removeChild(newli);
            alert('Great job!');
        });

        // let oldPar = document.querySelector('.select').value;
        
        var trash = document.createElement('i');
        trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
        trash.addEventListener('click', function() {
            newli.parentNode.removeChild(newli);

            // let update = prompt('Edit?');

            // // this.oldPar.innerHTML = update;
            // document.querySelector('.select').innerHTML = update;
            // empty[0] = update
        });

        //Add Check to List
        newli.appendChild(newCheck);
        
        //Add icon to Check
        newCheck.appendChild(check);
        
        //Add P tag to List
        newP.appendChild(p);
        newli.appendChild(newP);

        //Add Trash to List
        newli.appendChild(newTrash);
        
        //Add icon to Trash
        newTrash.appendChild(trash);

        //Append
        var list = document.getElementById('list').getElementsByTagName('ul')[0];
        list.appendChild(newli);  
        
    }
};


function display() {

    newTD();
    add();
    clear();
}


document.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            display();
        }
    });

