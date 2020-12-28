
window.onload=function(){
    let cont=0;
    let vetor=[]
    let nome=document.querySelector(".name");
    let senha=document.querySelector(".password");
    let email=document.querySelector(".email");
    let confirm=document.querySelector(".confirm");
    let checkVetor=[]
    let selectVetor=[]
    CriarInput()
    CriarSelect();
    function pegarDados(){
   
        //campos de um checked box
        let select=document.getElementsByName("produtos")
        let contar=0;
        for(let x=0;x<select.length;x++){
            if(select[x].checked ==true){
                checkVetor[contar]=select[x].value
                contar++;  
              //  console.log(select[x].value)
            }
          
        }
        console.log(checkVetor)
        //campos de um select
     
        let sele=document.querySelector('#paises')
        let ver=sele.options[sele.selectedIndex]
        selectVetor[0]=ver.value
        console.log(selectVetor)
        let blocNome= document.querySelector(".erroNome")
        if(nome.value == '' || nome.value == null){
          // nome.focus()
         
             
             blocNome.innerHTML="Digite o seu nome"
             blocNome.style.display='block'
             cont+=1;
        } 
        else{
            blocNome.style.display='none'
        }

        let blocEmail= document.querySelector(".emailVerificar") 
        if(email.value == '' || email.value == null){
            senha.focus()
          
            
            blocEmail.innerHTML="Digite o seu email"
            blocEmail.style.display='block'
            cont+=1;
            
        }else{
            blocEmail.style.display='none'
        }
        let blocSenha= document.querySelector(".senha") 
        if(senha.value=='' ||senha.value==null){
            email.focus()
           
            blocSenha.innerHTML="Digite a sua senha"
            blocSenha.style.display='block'
            cont+=1;
           // validar(".emailVerificar","email errado",'titulo3')
            
        }else{
            blocSenha.style.display='none'
        }
        let blocCon= document.querySelector(".confirmar") 
        if(confirm.value ==''|| confirm.value==null){
            email.focus()
          
            blocCon.innerHTML="Confirme a sua senha corretamente"
            blocCon.style.display='block'
            cont+=1;
           // validar(".confirmar","digite a sua senha",'titulo4')
            
        }else{
            blocCon.style.display='none'
        }
        console.log(cont)
      
    }     
    function liparVetor(){
        for(let x=0;x<checkVetor.length;x++){
            checkVetor.pop();
        }
        selectVetor.pop();
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
        liparVetor()   
    })

     function env(){
        const data=
         {
           nome:nome.value,
           senha:senha.value,
           email:email.value,
           paises:selectVetor,
           produtos:checkVetor
    
         }
        var ajax=new XMLHttpRequest();
        ajax.open("POST",'http://localhost:3333/gui')
        ajax.setRequestHeader('Content-Type','application/json')
        ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status==200){
            console.log(ajax.responseText)
        }
     }
  
     ajax.send(JSON.stringify(data));

     }
     function CriarInput(){
        let vetor=['Brasil','EUA','França']
        let formulario=document.querySelector(".inputLabel")
        let select=document.createElement('select')
        select.setAttribute('id','paises')
        vetor.map((valor)=>{
            let option=document.createElement('option')
            option.setAttribute('id',`${valor}`)
            option.setAttribute('value',`${valor}`)
            option.text=`${valor}`
            select.appendChild(option)
        })
        formulario.appendChild(select)
    }
     function CriarSelect(){
        let vetor=['peixe','frango','Boi']
        let formulario=document.querySelector(".inputLabel")
        vetor.map((value)=>{
            let input=document.createElement('input'); 
            let label=document.createElement('label')
            input.className="roupas"
            input.setAttribute("type","checkbox")
            input.setAttribute("name","produtos")
            input.setAttribute("value",`${value}`)
            input.setAttribute("id",`${value}`)
            label.innerHTML=`${value}`
            label.className="atributos"
            formulario.appendChild(input)
            formulario.appendChild(label)
        })
     }

}