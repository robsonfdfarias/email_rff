<?php

if(file_exists(EMAIL_RFF_CORE_INC."email_rff_db_cat.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_db_cat.php");
}
class EmailRffDBEmail{
    private $db;
    private $table_email;
    private $db_categ;
    function __construct(){
        global $wpdb;
        $this->db = $wpdb;
        $this->table_email = $wpdb->prefix.EMAIL_RFF_TABLE_EMAIL;
        $this->db_categ = new EmailRffDBCateg();
    }
    function getAllEmails(){
        $res = $this->db->get_results("SELECT * FROM {$this->table_email}", ARRAY_A);
        $items = [];
        foreach($res as $item){
            $cat = $this->db_categ->getCatById($item['category']);
            $items[] = [
                "id"=>$item['id'],
                "title"=>$item['title'],
                "content"=>$item['content'],
                "itemStatus"=>$item['itemStatus'],
                "category"=>[
                    "id" => $cat['id'],
                    "title" => $cat['title'],
                    "statusItem" => $cat['statusItem'],
                ]
            ];
        }
        return $items;
    }
    function insertEmail($title, $content, $itemStatus, $category){
        $res = $this->db->insert(
            $this->table_email,
            array(
                "title" => $title,
                "content" => $content,
                "itemStatus" => $itemStatus,
                "category" => $category,
            )
        );
        if($res<=0 || $res==false){
            echo '<div class="notice notice-failure is-dismissible" style="top:-50px;"><p>Não foi possível inserir o e-mail. Erro: '.$this->db->last_error.'</p></div>';
        }else{
            echo '<div class="notice notice-success is-dismissible" style="top:-50px;"><p>E-mail <strong>inserido</strong> com sucesso!</p></div>';
        }
    }
    function updateEmail($id, $title, $content, $itemStatus, $category){
        $res = $this->db->update(
            $this->table_email,
            array(
                "title" => $title,
                "content" => $content,
                "itemStatus" => $itemStatus,
                "category" => $category,
            ),
            array("id"=>$id),
            array("%s"),
            array("%d"),
        );
        if($res<=0 || $res==false){
            echo '<div class="notice notice-failure is-dismissible" style="top:-50px;"><p>Não foi possível atualizar o email. Erro: '.$this->db->last_error.'</p></div>';
        }else{
            echo '<div class="notice notice-success is-dismissible" style="top:-50px;"><p>E-mail <strong>atualizado</strong> com sucesso!</p></div>';
        }
    }
    function deleteEmail($id){
        $res = $this->db->delete(
            $this->table_email,
            array("id"=>$id),
            array("%d"),
        );
        if($res<=0 || $res==false){
            echo '<div class="notice notice-failure is-dismissible" style="top:-50px;"><p>Não foi possível deletar o e-mail. Erro: '.$this->db->last_error.'</p></div>';
        }else{
            echo '<div class="notice notice-success is-dismissible" style="top:-50px;"><p>E-mail <strong>deletado</strong> com sucesso!</p></div>';
        }
    }
}