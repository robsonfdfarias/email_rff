<?php

class EmailRffDBCateg{
    private $db;
    private $table;
    function __construct(){
        global $wpdb;
        $this->db = $wpdb;
        $this->table = $wpdb->prefix.EMAIL_RFF_TABLE_CATEG;
    }
    function getCatById($id){
        $id = sanitize_text_field($id);
        $res = $this->db->get_results("SELECT * FROM {$this->table} WHERE id={$id}", ARRAY_A);
        return $res[0];
    }
}