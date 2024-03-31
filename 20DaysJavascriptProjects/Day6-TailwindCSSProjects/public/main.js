window.onload = ()=>{
    const menu = document.querySelector("#myList");
    document.querySelector("#myDiv").addEventListener("click", ()=>{
        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden');
        }else{
            menu.classList.add('hidden');
        }
    });
}