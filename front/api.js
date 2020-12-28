import Elemento from './script.js'
window.onload=function(){
    let cont=0;
    let vetor=[]
    let nome=document.querySelector(".name");
    let senha=document.querySelector(".password");
    let email=document.querySelector(".email");
    let confirm=document.querySelector(".confirm");
    const formdata=new FormData();
    let checkVetor=[]
    let selectVetor=[]
    function pegarDados(){

        //campos de um checked box
        let select=document.getElementsByName("produtos")
        let contar=0;
        for(let x=0;x<select.length;x++){
            if(select[x].checked ==true){
                checkVetor[cont]=select[x].value
                contar++;  
                console.log(select[x].value)
            }
        
        }

        //campos de um select
    
        let sele=document.querySelector('#paises')
        let ver=sele.options[sele.selectedIndex]
        selectVetor[0]=ver.value

        let blocNome= document.querySelector(".erroNome")
        if(nome.value == '' || nome.value == null){
        // nome.focus()
        
            
            blocNome.innerHTML="asdasdasd"
            blocNome.style.display='block'
            cont+=1;
        } 
        else{
            blocNome.style.display='none'
        }

        let blocEmail= document.querySelector(".emailVerificar") 
        if(senha.value == '' || senha.value == null){
            senha.focus()
        
            
            blocEmail.innerHTML="asdasdasd"
            blocEmail.style.display='block'
            cont+=1;
            
        }else{
            blocEmail.style.display='none'
        }
        let blocSenha= document.querySelector(".senha") 
        if(email.value=='' ||email.value==null){
            email.focus()
        
            blocSenha.innerHTML="asdasdasd"
            blocSenha.style.display='block'
            cont+=1;
        // validar(".emailVerificar","email errado",'titulo3')
            
        }else{
            blocSenha.style.display='none'
        }
        let blocCon= document.querySelector(".confirmar") 
        if(confirm.value ==''|| confirm.value==null){
            email.focus()
        
            blocCon.innerHTML="asdasdasd"
            blocCon.style.display='block'
            cont+=1;
        // validar(".confirmar","digite a sua senha",'titulo4')
            
        }else{
            blocCon.style.display='none'
        }
        console.log(cont)
    
    }     

    document.querySelector('#submit').addEventListener('submit',function(evt){
        pegarDados()
        if(cont>0){
            cont=0;
            evt.preventDefault();
        }else{
            evt.preventDefault();
        
            env()
            console.log(vetor)
        
        }
        
    })


    function env(){
    
    
    const data=
    {
        nome:nome.value,
        senha:senha.value,
        email:email.value

        }
        var ajax=new XMLHttpRequest();
        ajax.open("POST",'http://localhost:3333/gui')
        ajax.setRequestHeader('Content-Type','application/json')
        ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status==200){
            console.log(ajax.responseText)
        }
    }

    console.log()
    ajax.send(JSON.stringify(data));

    }
}
