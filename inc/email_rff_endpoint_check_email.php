<?php

function email_rff_create_page_check_email(){
    add_submenu_page(
        null,
        'Check page',
        'Check page',
        'manage_options',
        'email-rff-check-page',
        'email_rff_check_page'
    );
}
add_action('admin_menu', 'email_rff_create_page_check_email');

function email_rff_check_page(){
    if(!current_user_can('manage_options')){
        wp_die('Você não tem permissão para acessar esta página.');
    }
    ?>
    <div class="wrap">
        <?php
            if(file_exists(EMAIL_RFF_CORE_INC.'email_rff_db_email_controller.PHP')){
                include_once(EMAIL_RFF_CORE_INC.'email_rff_db_email_controller.PHP');
                $emailController = new EmailRffDBEmailController();
                $result = $emailController->checkEmail($_GET['idEmailSend']);
                echo '<h1>'.$result.'</h1>';
            }else{
                echo 'Arquivo de controle da base de dados não existe.';
            }
        ?>
    </div>
    <?php
}