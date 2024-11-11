<?php

if(file_exists(EMAIL_RFF_CORE_INC."email_rff_db_cat.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_db_cat.php");
}
if(file_exists(EMAIL_RFF_CORE_INC."email_rff_tools.php")){
    include_once(EMAIL_RFF_CORE_INC."email_rff_tools.php");
}

class EmailRffDBCategController{
    private $db;
    private $tools;
    function __construct(){
        $this->db = new EmailRffDBCateg();
        $this->tools = new EmailRffTools();
    }
    function getAllCateg(){
        $res = $this->db->getAllCateg();
        return $res;
    }
    function getAllCategInOptions(){
        $res = $this->getAllCateg();
        if(count($res)>0){
            foreach($res as $item){
                echo '<option value="'.$item->id.'">'.$item->title.'</option>';
            }
        }
    }
}