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
    function getAllCateg(){
        $res = $this->db->get_results("SELECT * FROM {$this->table}");
        return $res;
    }
    function insertCateg($title, $status){
        $res = $this->db->insert(
            $this->table,
            array(
                "title"=>$title,
                "statusItem"=>$status,
            ),
        );
        return $res;
    }
    function updateCateg($id, $title, $status){
        $res = $this->db->update(
            $this->table,
            array(
                "title"=>$title,
                "statusItem"=>$status,
            ),
            array("id"=>$id),
            array("%s"),
            array("%d"),
        );
        return $res;
    }
    function deleteCateg($id){
        $res = $this->db->delete(
            $this->table,
            array("id"=>$id),
            array("%d"),
        );
        return $res;
    }
}