document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('allabc').addEventListener('click',async()=>{
        let response = await fetch('users.json');
        let eredmeny = await response.json();
        let abcall = eredmeny.users.sort(function(a, b){
            let first = a.lastName.toUpperCase();
            let second = b.lastName.toUpperCase();

            if(first < second){
                return -1;
            }else if( first > second){
                return 1;
            }else{
                return 0;
            }
        });
        let userList = document.getElementById('results');
        userList.textContent = '';
        let table = document.getElementById('restable');
        table.innerHTML = '';
        for (let p of abcall){
            let li = document.createElement('li');
            li.innerHTML = p.lastName.toUpperCase() + ' ' + p.firstName ;
            userList.appendChild(li);
        };
    });
    document.getElementById('connection').addEventListener('click',async()=>{
        let response = await fetch('users.json');
        let eredmeny = await response.json();
        let usertable = eredmeny.users.sort(function(a, b){
            let first = a.username.toUpperCase();
            let second = b.username.toUpperCase();

            if(first < second){
                return -1;
            }else if( first > second){
                return 1;
            }else{
                return 0;
            }
        });
        let userList = document.getElementById('results');
        userList.textContent = '';
        let table = document.getElementById('restable');
        table.innerHTML = '';
        for (let p of usertable){
            let row = document.createElement('tr');

            let name = document.createElement('td');
            let email = document.createElement('td');
            let phone = document.createElement('td');

            name.textContent = p.username;
            email.textContent = p.email;
            phone.textContent = p.phone;

            row.appendChild(name);
            row.appendChild(email);
            row.appendChild(phone);
            table.appendChild(row);
        }
    });
    document.getElementById('heightweight').addEventListener('click',async()=>{
        let response = await fetch('users.json');
        let eredmeny = await response.json();
        let height = eredmeny.users.filter(e => e.height >= parseFloat(document.getElementById('tall').value))
        let userList = document.getElementById('results');
        userList.textContent = '';
        let table = document.getElementById('restable');
        table.innerHTML = '';
        let ot = 0;
        for (let p of height){
            ot += p.weight;
        };
        let li = document.createElement('li');
        li.innerHTML = ot+"kg az össz tömegük";
        userList.appendChild(li);
    });
    document.getElementById('brown').addEventListener('click',async()=>{
        let response = await fetch('users.json');
        let eredmeny = await response.json();
        let brown = eredmeny.users.filter(e => e.eyeColor === 'Brown');
        let userList = document.getElementById('results');
        userList.textContent = '';
        let table = document.getElementById('restable');
        table.innerHTML = '';
        let li = document.createElement('li');
        li.innerHTML = brown.length+" barna szemű van";
        userList.appendChild(li);
    });
});
