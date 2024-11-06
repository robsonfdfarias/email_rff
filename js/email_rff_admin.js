
function emailRffSubmitForm(bt){
    let email_rff_formulario = document.getElementById('email_rff_formulario');
    if(email_rff_formulario){
        var inputHidden = document.createElement('input');
        inputHidden.type = 'hidden';
        inputHidden.name = bt.id;
        inputHidden.value = bt.id; 
        email_rff_formulario.appendChild(inputHidden);
        email_rff_formulario.submit();
    }
}
let emailRffDivForm = document.getElementById('emailRffDivForm');
function emailRffCancel(){
    if(emailRffDivForm){
        emailRffDivForm.style.display='none';
    }
}
function emailRffNewEmail(){
    if(emailRffDivForm){
        emailRffDivForm.style.display='block';
    }
}

function openEditEmailRff(varName, value){
    let adminURL = new EmailRffAdminGetUrl();
    adminURL.addUrlParameter(varName, value);
    location.reload();
}

function getVarEditEmailRff(){
    let dt = document.getElementById('email_rff_item_data');
    let data;
    try{
        data = JSON.parse(dt);
    }catch(error){
        console.log("Erro encontrado: "+error);
    }
    let option = document.createElement('option');
    option.value=data.category.id;
    option.textContent = data.category.title;
    option.setAttribute('class', 'apagarOption');
    option.selected = true;
    console.log(option);
    let id = document.getElementById('email_rff_id_form');
    let title = document.getElementById('email_rff_title');
    // let content = document.getElementById('email_rff_content');
    let content = document.getElementById('texto');
    let category = document.getElementById('email_rff_category');
    id.value = data.id;
    title.value = data.title;
    content.value = data.content;
    category.appendChild(option);
    if(emailRffDivForm){
        emailRffDivForm.style.display='block';
    }
}