<?php

if(file_exists(EMAIL_RFF_CORE_INC."email_rff_db_email.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_db_email.php");
}
if(file_exists(EMAIL_RFF_CORE_INC."email_rff_tools.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_tools.php");
}

class EmailRffDBEmailController{
    private $db;
    private $tools;
    function __construct(){
        $this->db = new EmailRffDBEmail();
        $this->tools = new EmailRffTools();
    }
    function actionOnSubmitForm(){
        if(isset($_POST['email_rff_bt_update'])){
            $id = $this->tools->checkIfPostVarEmpty($_POST['email_rff_id_form']);
            $title = $this->tools->checkIfPostVarEmpty($_POST['email_rff_title']);
            // $content = $this->tools->checkIfPostVarEmpty($_POST['email_rff_content']);
            $content = $this->tools->clear($_POST['email_rff_content']);
            $category = $this->tools->checkIfPostVarEmpty($_POST['email_rff_category']);
            // echo '<h1>ID: '.$id.'<br>Title: '.$title.'<br>Content: '.$content.'<br>Categoria: '.$category.'<br></h1>';
            $itemStatus = "Aguardando";
            $res = $this->db->updateEmail($id, $title, $content, $itemStatus, $category);
            if($res<=0 || $res==false){
                echo '<div class="notice notice-failure is-dismissible" style="top:-50px;"><p>Não foi possível atualizar o email.</p></div>';
            }else{
                echo '<div class="notice notice-success is-dismissible" style="top:-50px;"><p>E-mail <strong>atualizado</strong> com sucesso!</p></div>';
            }
        }
        if(isset($_POST['email_rff_bt_delete'])){
            $id = $this->tools->checkIfPostVarEmpty($_POST['email_rff_id_form']);
            $res = $this->db->deleteEmail($id);
            if($res<=0 || $res==false){
                echo '<div class="notice notice-failure is-dismissible" style="top:-50px;"><p>Não foi possível deletar o e-mail.</p></div>';
            }else{
                echo '<div class="notice notice-success is-dismissible" style="top:-50px;"><p>E-mail <strong>deletado</strong> com sucesso!</p></div>';
            }
        }
        if(isset($_POST['email_rff_bt_add'])){
            $title = $this->tools->checkIfPostVarEmpty($_POST['email_rff_title']);
            // $content = $this->tools->checkIfPostVarEmpty($_POST['email_rff_content']);
            $content = $this->tools->clear($_POST['email_rff_content']);
            $category = $this->tools->checkIfPostVarEmpty($_POST['email_rff_category']);
            // echo '<h1>ID: '.$id.'<br>Title: '.$title.'<br>Content: '.$content.'<br>Categoria: '.$category.'<br></h1>';
            $itemStatus = "Aguardando";
            $res = $this->db->insertEmail($title, $content, $itemStatus, $category);
            if($res<=0 || $res==false){
                echo '<div class="notice notice-failure is-dismissible" style="top:-50px;"><p>Não foi possível inserir o e-mail.</p></div>';
            }else{
                echo '<div class="notice notice-success is-dismissible" style="top:-50px;"><p>E-mail <strong>inserido</strong> com sucesso!</p></div>';
            }
        }
    }
    function getAllEmails(){
        return $this->db->getAllEmails();
    }
    function getEmailById($id){
        $id = $this->tools->checkIfPostVarEmpty($id);
        return $this->db->getEmailById($id);
    }
}