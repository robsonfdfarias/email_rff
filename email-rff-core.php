<?php

if(!defined('WPINC')){
    die();
}


function add_menu_admin_page_email_rff(){
    add_menu_page(
        "Email_Rff", //Título da página
        "Email Rff", //Título do menu
        "manage_options", //nível de permissão
        "Email-Rff", //Slug
        "email_rff_admin_page", //Função chamada
        "dashicons-email-alt", //Ícone https://developer.wordpress.org/resource/dashicons/#admin-generic
        7, //Posição no menu
    );
}

add_action('admin_menu', 'add_menu_admin_page_email_rff');

// $url_rff_dir_editor = EMAIL_RFF_DIR_EDITOR;


if(file_exists(EMAIL_RFF_CORE_INC."email_rff_db_email_controller.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_db_email_controller.php");
}
if(file_exists(EMAIL_RFF_CORE_INC."email_rff_db_cat_controller.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_db_cat_controller.php");
}
if(file_exists(EMAIL_RFF_CORE_INC."email_rff_send_email_controller.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_send_email_controller.php");
}
if(file_exists(EMAIL_RFF_CORE_INC."email_rff_endpoint_check_email.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_endpoint_check_email.php");
}

function email_rff_admin_page(){
    emailRffCreateFolderIfNotExists();
    $emailRffDBCategController = new EmailRffDBCategController();
    $emailRffDBEmailController = new EmailRffDBEmailController();
    $emailRffSendEmailController = new EmailRffSendEmailController();
    $emailRffDBEmailController->actionOnSubmitForm();
    $emailRffDBCategController->actionOnSubmitForm();
    if(isset($_GET['idEmail'])){
        // echo 'ID do email encontrado: '.$_GET['idEmail']; 
        $item = $emailRffDBEmailController->getEmailById($_GET['idEmail']);
        echo '<div id="email_rff_item_data" style="display:none;">'.$item['json'].'</div>';
        echo '<div id="email_rff_item_content" style="display:none;">'.$item['content'].'</div>';
    }
    if(isset($_GET['idCateg'])){
        // echo 'ID do email encontrado: '.$_GET['idEmail'];
        $item = $emailRffDBCategController->getCatById($_GET['idCateg']);
        echo '<div id="email_rff_categ_data" style="display:none;">'.$item.'</div>';
    }
    $emailRffDBCategController->displayTable();
    $emailRffDBCategController->displayFormCateg();
    if(isset($_GET['idEmailSend'])){
        $itemAr = $emailRffDBEmailController->getEmailByIdArray($_GET['idEmailSend']);
        $emailRffSendEmailController->displaySendEmail($itemAr['content'], $itemAr['title']);
    }
    ?>
    <div id="wrap">
        <div class="tab">
            <h1 class="wp-heading-inline">Email RFF</h1><br>

            <span id="urlRff" style="display:none;"><?php echo EMAIL_RFF_URL_EDITOR; ?></span>
            <span id="dirRff" style="display:none;"><?php echo EMAIL_RFF_DIR_EDITOR; ?></span>
            <span id="emailDirInc" style="display:none;"><?php echo EMAIL_RFF_URL_INC; ?></span>
        </div>
        <div id="content" style="background:white; min-height:80vh; padding:20px;">
            <a onclick="emailRffNewEmail()" class="page-title-action">Criar novo email</a>
            <a onclick="openAdminCategEmailRff('adminCat', 'open')" class="page-title-action">Categorias</a>
            
            <div id="emailRffDivForm" style="position:absolute; width:98%; height:90vh; display:none; flex-direction:column; padding: 20px; top:0;left:0; background-color: #fff; margin-left:-20px; z-index:1000;">
                <h1 id="formTituloEmailRff">Você está na new</h1>
                <?php
                    include_once(EMAIL_RFF_DIR_EDITOR."editText2.php");
                ?>
                <form method="post" name="email_rff_formulario" id="email_rff_formulario">
                    <textarea name="email_rff_content" id="email_rff_content" style="display:none;" required></textarea>
                    <p>
                        <input type="text" name="email_rff_title" id="email_rff_title" placeholder="Título" style="width:100%;" required>
                    </p>
                    <p>
                        <label for="email_rff_category">Selecione a categoria: </label>
                        <select name="email_rff_category" id="email_rff_category" required>
                            <?php
                                $emailRffDBCategController->getAllCategInOptions();
                            ?>
                        </select>
                    </p>
                    <input type="hidden" name="email_rff_id_form" id="email_rff_id_form">
                    <button type="submit" name="email_rff_bt_update" id="email_rff_bt_update" onclick="event.preventDefault(), emailRffSubmitForm(this)">Atualizar</button>
                    <button type="submit" name="email_rff_bt_add" id="email_rff_bt_add" onclick="event.preventDefault(), emailRffSubmitForm(this)">Cadastrar</button>
                    <button type="submit" name="email_rff_bt_cancel" id="email_rff_bt_cancel" onclick="event.preventDefault(), emailRffCancel()">Cancelar</button>
                    <button type="submit" name="email_rff_bt_open_delete" id="email_rff_bt_open_delete" onclick="event.preventDefault(), openDeleteEmail()" style="background-color:red;">Deletar</button>
                    <div id="divDelItemRff" style="position:absolute;display:none;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.3);padding-top:30px;">
                        <div id="divDelItemRffInto" style="position:relative; max-width:400px; margin:auto auto; border: 1px solid #cdcdcd; padding:40px;background-color:white;">
                            <div style="font-size:2rem;line-height:2rem;font-weight:bold;">
                                Tem certeza que deseja excluir o email?
                            </div>
                            <button type="submit" name="email_rff_bt_delete" id="email_rff_bt_delete" style="background-color:red;" onclick="event.preventDefault(), emailRffSubmitForm(this)">Deletar</button>
                            <button type="submit" name="abortDeleteEmailRff" id="abortDeleteEmailRff" onclick="event.preventDefault(), cancelDeleteEmail()">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
            <script>
                localStorage.setItem("EMAIL_RFF_URL_EDITOR", document.getElementById('urlRff').innerHTML);
                localStorage.setItem("EMAIL_RFF_DIR_EDITOR", document.getElementById('dirRff').innerHTML);
                localStorage.setItem("EMAIL_RFF_DIR_INC", document.getElementById('emailDirInc').innerHTML);
            </script>
                <?php
                    $emailRffDBEmailController->displayTable();
                ?>
            </div>
        </div>
    </div>
    <?php
    
}

function emailRffCreateFolderIfNotExists(){
    $folder = plugin_dir_path(__FILE__).'imagens';
    if(!is_dir($folder)){
        mkdir($folder, 0777, true);
        // echo "Pasta criada com sucesso";
    }else{
        // echo "a pasta já existe";
    }
}

function emailRffFormatStatus($val){
    if($val=="Enviado"){
        return '<span style="color:green;font-weight:bold;">'.$val.'</span>';
    }else{
        return '<span style="color:red;font-weight:bold;">'.$val.'</span>';
    }
}