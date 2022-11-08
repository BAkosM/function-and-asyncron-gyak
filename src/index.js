var i = 0;
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
        i=1;
        dataShow(abcall,i);
    });
    document.getElementById('connection').addEventListener('click',async()=>{

    });
    document.getElementById('heightweight').addEventListener('click',async()=>{
        let response = await fetch('users.json');
        let eredmeny = await response.json();
        let height = eredmeny.users.filter(e => e.height >= parseFloat(document.getElementById('tall').value))
        i=3;
        dataShow(height,i);
    });
    document.getElementById('brown').addEventListener('click',async()=>{
        let response = await fetch('users.json');
        let eredmeny = await response.json();
        let brown = eredmeny.users.filter(e => e.eyeColor === 'Brown');
        i=4;
        dataShow(brown,i);
    });
    function dataShow(users,fid){
    let userList = document.getElementById('results');
    userList.textContent = '';
    if (fid == 1){
        for (let p of users){
            let li = document.createElement('li');
            li.innerHTML = p.lastName + ' ' + p.firstName ;
            userList.appendChild(li);
        };
    } else if (fid == 2){

    } else if(fid == 3){
        let ot = 0;
        for (let p of users){
            ot += p.weight;
        };
        let li = document.createElement('li');
        li.innerHTML = ot+"kg az össz tömegük";
        userList.appendChild(li);
    } else if(fid == 4){
        let li = document.createElement('li');
        li.innerHTML = users.length+" barna szemű van";
        userList.appendChild(li);
    }};
});
