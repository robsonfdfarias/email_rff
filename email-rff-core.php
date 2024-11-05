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

function email_rff_admin_page(){
    emailRffCreateFolderIfNotExists();
    
    ?>
    <div id="wrap">
        <div class="tab">
            <h1 class="wp-heading-inline">Email RFF</h1>
            <a onclick="" class="page-title-action" style="margin-top:10px;top:-8px;">Criar novo email</a>

            <span id="urlRff" style="display:none;"><?php echo EMAIL_RFF_URL_EDITOR; ?></span>
            <span id="dirRff" style="display:none;"><?php echo EMAIL_RFF_DIR_EDITOR; ?></span>
        </div>
        <div id="content">
            
            <div id="divForm" style="position:absolute; width:98%; height:90vh; display:none; flex-direction:column; padding: 20px; top:0;left:0; background-color: #fff; margin-left:-20px;">
                <h1 id="formTituloPostsRff">Você está na new</h1>
                <?php
                    //include_once(EMAIL_RFF_DIR_EDITOR."editText2.php");
                ?>
                <form method="post" name="formulario" id="formulario">
                </form>
            </div>
            <script>
                //
            </script>
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
