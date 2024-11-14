var adminURL = new EmailRffAdminGetUrl();
function emailRffSubmitForm(bt){
    let title = document.getElementById('email_rff_title');
    let categ = document.getElementById('email_rff_category');
    if(title==null || title.value==""){
        alert('O campo Título não pode ficar vazio.');
        return;
    }
    if(categ==null || categ.value==""){
        alert('O campo Categoria não pode ficar vazio. Se não houver categoria disponível, inserira uma categoria. para inserir, clique em Cancelar->Categorias->Criar categorias.');
        return;
    }
    let email_rff_formulario = document.getElementById('email_rff_formulario');
    if(email_rff_formulario){
        adminURL.removeUrlParameter('idEmail');
        let texto = document.getElementById('texto').innerHTML;
        let textArea = document.getElementById('email_rff_content');
        textArea.innerHTML = texto;
        var inputHidden = document.createElement('input');
        inputHidden.type = 'hidden';
        inputHidden.name = bt.id;
        inputHidden.value = bt.id; 
        email_rff_formulario.appendChild(inputHidden);
        email_rff_formulario.submit();
    }
}
function emailRffSubmitFormCateg(bt){
    let title = document.getElementById('email_rff_cat_title');
    if(title==null || title.value==""){
        alert('O campo Título não pode ficar vazio.');
        return;
    }
    let email_rff_formulario = document.getElementById('formCategEmailRff');
    if(email_rff_formulario){
        adminURL.removeUrlParameter('idCateg');
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
    adminURL.removeUrlParameter('idEmail');
    if(emailRffDivForm){
        emailRffDivForm.style.display='none';
    }
}
function emailRffNewEmail(){
    if(emailRffDivForm){
        document.getElementById('email_rff_bt_add').style.display='inline';
        document.getElementById('email_rff_bt_delete').style.display='none';
        document.getElementById('email_rff_bt_update').style.display='none';
        emailRffDivForm.style.display='block';
    }
}

function openDeleteEmail(){
    document.getElementById('divDelItemRff').style.display='block';
}
function cancelDeleteEmail(){
    document.getElementById('divDelItemRff').style.display='none';
}

function openEditEmailRff(varName, value){
    // let adminURL = new EmailRffAdminGetUrl();
    adminURL.addUrlParameter(varName, value);
    location.reload();
}

if(document.getElementById('email_rff_item_data')){
    getVarEditEmailRff();
}
function getVarEditEmailRff(){
    document.getElementById('email_rff_bt_add').style.display='none';
    document.getElementById('email_rff_bt_delete').style.display='inline';
    document.getElementById('email_rff_bt_update').style.display='inline';
    let dt = document.getElementById('email_rff_item_data').innerText;
    let data;
    try{
        data = JSON.parse(dt);
    }catch(error){
        console.log("Erro encontrado: "+error);
    }
    console.log(data)
    let option = document.createElement('option');
    option.value=data.category.id;
    option.textContent = 'Atual -> '+data.category.title;
    option.setAttribute('class', 'apagarOption');
    option.selected = true;
    let id = document.getElementById('email_rff_id_form');
    let title = document.getElementById('email_rff_title');
    // let content = document.getElementById('email_rff_content');
    let content = document.getElementById('texto');
    let category = document.getElementById('email_rff_category');
    id.value = data.id;
    title.value = data.title;
    content.innerHTML = document.getElementById('email_rff_conteudo_div').innerHTML;
    category.appendChild(option);
    if(emailRffDivForm){
        emailRffDivForm.style.display='block';
    }
}

verifyOpenDivAdminCategEmailRff();
function verifyOpenDivAdminCategEmailRff(){
    if(adminURL.verifyVarUrl('adminCat')){
        document.getElementById('divAdminCategEmailRff').style.display = 'block';
    }else{
        document.getElementById('divAdminCategEmailRff').style.display = 'none';
    }
}

function openAdminCategEmailRff(varName, value){
    adminURL.addUrlParameter(varName, value);
    // location.reload();
    document.getElementById('divAdminCategEmailRff').style.display = 'block';
}

function closeAdminCategEmailRff(){
    adminURL.removeUrlParameter('adminCat');
    document.getElementById('divAdminCategEmailRff').style.display = 'none';
}

function openFormCategEmailRff(){
    document.getElementById('email_rff_categ_bt_add').style.display = 'inline';
    document.getElementById('email_rff_categ_bt_update').style.display = 'none';
    document.getElementById('email_rff_categ_bt_delete').style.display = 'none';
    document.getElementById('divFormCategEmailRff').style.display = 'block';
}

function closeFormCategEmailRff(){
    adminURL.removeUrlParameter('idCateg');
    document.getElementById('divFormCategEmailRff').style.display = 'none';
}

function editCategFormEmailRff(varName, value){
    adminURL.addUrlParameter(varName, value);
    location.reload();
}

function openEditCatFormEmailRff(){
    document.getElementById('email_rff_categ_bt_add').style.display = 'none';
    document.getElementById('email_rff_categ_bt_update').style.display = 'inline';
    document.getElementById('email_rff_categ_bt_delete').style.display = 'inline';
    document.getElementById('divFormCategEmailRff').style.display = 'block';
    let divDataCateg = document.getElementById('email_rff_categ_data');
    if(divDataCateg){
        let json;
        try{
            json = JSON.parse(divDataCateg.innerHTML);
            let id = document.getElementById('email_rff_cat_id');
            let title = document.getElementById('email_rff_cat_title');
            let statusItem = document.getElementById('email_rff_cat_status');
            id.value = json.id;
            title.value = json.title;
            let option = document.createElement('option');
            option.value = json.statusItem;
            option.textContent = 'Atual -> '+json.statusItem;
            option.selected = true;
            statusItem.append(option);
        }catch(error){
            json = '';
            console.log('Erro encontrado: '+error);
        }
    }
}

verifyOpenDivFormCategEmailRff();
function verifyOpenDivFormCategEmailRff(){
    if(adminURL.verifyVarUrl('idCateg')){
        openEditCatFormEmailRff();
        document.getElementById('divFormCategEmailRff').style.display = 'block';
    }
}
// console.log(adminURL.getUrlParameter('idEmailSend'));

/**
 * Função de envio de emails
 */

function sendEmail(email){
    let classSendEmail = new EmailRffFetch('');
    let url = adminURL.returnUrlWithParameterUpdate('page', 'email-rff-check-page');
    classSendEmail.sendEmailsFetch(email, url);
}

function cancelSendEmail(){
    adminURL.removeUrlParameter('idEmailSend');
    location.reload();
}