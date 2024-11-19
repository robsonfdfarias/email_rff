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
                // "content"=>$item['content'],
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
    function getEmailById($id){
        $res = $this->db->get_results("SELECT * FROM {$this->table_email} WHERE id={$id}", ARRAY_A);
        $itemAr = '';
        foreach($res as $item){
            $cat = $this->db_categ->getCatById($item['category']);
            $content = $item['content'];
            $itemAr = '{
                "id": "'.$item['id'].'",
                "title": "'.$item['title'].'",
                "itemStatus": "'.$item['itemStatus'].'",
                "category": {
                    "id": "'.$cat['id'].'",
                    "title": "'.$cat['title'].'",
                    "statusItem": "'.$cat['statusItem'].'"
                }
            }';
            // $itemAr = '{
            //     "id": "'.$item['id'].'",
            //     "title": "'.$item['title'].'",
            //     "content": "<div id="email_rff_conteudo_div">'.$item['content'].'</div>",
            //     "itemStatus": "'.$item['itemStatus'].'",
            //     "category": {
            //         "id": "'.$cat['id'].'",
            //         "title": "'.$cat['title'].'",
            //         "statusItem": "'.$cat['statusItem'].'"
            //     }
            // }';
        }
        return ["json"=>$itemAr, "content"=>$content];
    }
    function getEmailByIdArray($id){
        $res = $this->db->get_results("SELECT * FROM {$this->table_email} WHERE id={$id}", ARRAY_A);
        return $res[0];
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
        return $res;
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
        return $res;
    }
    function deleteEmail($id){
        $res = $this->db->delete(
            $this->table_email,
            array("id"=>$id),
            array("%d"),
        );
        return $res;
    }

    function checkEmail($id){
        $date = date('Y-m-d H-i-s');
        $res = $this->db->update(
            $this->table_email,
            array(
                "itemStatus" => "Enviado",
                "sendingDate" => $date,
            ),
            array("id"=>$id),
            array("%s"),
            array("%d")
        );
        return $res;
    }
}