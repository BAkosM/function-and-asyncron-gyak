document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('allabc').addEventListener('click',async()=>{
        console.log("test")
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
        dataShowList(abcall);
    });
    document.getElementById('connection').addEventListener('click',async()=>{

    });
    document.getElementById('heightweight').addEventListener('click',async()=>{

    });
    document.getElementById('brown').addEventListener('click',async()=>{

    });
    function dataShowList(users){
    let userList = document.getElementById('results');
    userList.textContent = '';

    for (let p of users){
        let li = document.createElement('li');
        li.innerHTML = p.lastName + ' ' + p.firstName ;
        userList.appendChild(li);
    }};
});
