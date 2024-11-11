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

function email_rff_admin_page(){
    emailRffCreateFolderIfNotExists();
    $emailRffDBCategController = new EmailRffDBCategController();
    $emailRffDBEmailController = new EmailRffDBEmailController();
    $emailRffDBEmailController->actionOnSubmitForm();
    if(isset($_GET['idEmail'])){
        // echo 'ID do email encontrado: '.$_GET['idEmail'];
        $item = $emailRffDBEmailController->getEmailById($_GET['idEmail']);
        echo '<div id="email_rff_item_data" style="display:none;">'.$item.'</div>';
    }
    ?>
    <div id="wrap">
        <div class="tab">
            <h1 class="wp-heading-inline">Email RFF</h1><br>

            <span id="urlRff" style="display:none;"><?php echo EMAIL_RFF_URL_EDITOR; ?></span>
            <span id="dirRff" style="display:none;"><?php echo EMAIL_RFF_DIR_EDITOR; ?></span>
        </div>
        <div id="content" style="background:white; min-height:80vh; padding:20px;">
            <a onclick="emailRffNewEmail()" class="page-title-action">Criar novo email</a>
            <a onclick="emailRffNewEmail()" class="page-title-action">Categorias</a>
            
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
                    <button type="submit" name="email_rff_bt_delete" id="email_rff_bt_delete" onclick="event.preventDefault(), emailRffSubmitForm(this)">Deletar</button>
                    <button type="submit" name="email_rff_bt_add" id="email_rff_bt_add" onclick="event.preventDefault(), emailRffSubmitForm(this)">Cadastrar</button>
                    <button type="submit" name="email_rff_bt_cancel" id="email_rff_bt_cancel" onclick="event.preventDefault(), emailRffCancel()">Cancelar</button>
                </form>
            </div>
            <script>
                //
            </script>

                <?php
                    $arr = $emailRffDBEmailController->getAllEmails();
                    // echo '<pre>'.print_r($arr, true).'</pre>';
                    echo '<table class="wp-list-table widefat fixed striped" style="table-layout: auto !important;">
                        <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                Título
                            </td>
                            <td>
                                Status
                            </td>
                            <td>
                                Categoria
                            </td>
                            <td>
                                Ação
                            </td>
                        </tr>';
                    foreach($arr as $email){
                        if($email['itemStatus']=="Enviado"){
                            $valueBt = "Reenviar";
                        }else{
                            $valueBt = "Enviar";
                        }
                        echo '<tr>';
                        echo '<td>';
                        echo $email['id'];
                        echo '</td>';
                        echo '<td>';
                        echo '<a onclick="openEditEmailRff(\'idEmail\', '.$email['id'].')" style="cursor:pointer;">'.$email['title'].'</a>';
                        echo '</td>';
                        echo '<td>';
                        echo emailRffFormatStatus($email['itemStatus']);
                        echo '</td>';
                        echo '<td>';
                        echo '<span id="'.$email['category']['id'].'">'.$email['category']['title'].'</span>';
                        echo '</td>';
                        echo '<td>';
                        echo '<a class="btstatusTable" onclick="openEditEmailRff(\'idEmail\', \''.$email['id'].'\')">'.$valueBt.'</a>';
                        echo '</td>';
                        echo '</tr>';
                    }
                    echo '</table>';
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