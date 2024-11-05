<?php

if(!defined('WPINC')){
    die();
}

function email_rff_install(){
    global $wpdb;
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    $charset_collate = $wpdb->get_charset_collate();
    $table_categ = $wpdb->prefix.EMAIL_RFF_TABLE_CATEG;
    $sql_categ = "CREATE TABLE IF NOT EXISTS $table_categ (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        title varchar(200) NOT NULL,
        statusItem varchar(20),
        PRIMARY KEY (id)
    ) $charset_collate;";
    dbDelta($sql_categ);
    $table_email = $wpdb->prefix.EMAIL_RFF_TABLE_EMAIL;
    $sql_email = "CREATE TABLE IF NOT EXISTS $table_email(
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        title varchar(200) NOT NULL,
        content TEXT NOT NULL,
        itemType varchar(200),
        itemStatus varchar(20),
        category mediumint(9),
        PRIMARY KEY (id),
        FOREIGN KEY (category) REFERENCES $table_categ(id) ON DELETE CASCADE
    ) $charset_collate;";
    dbDelta($sql_email);
}

function email_rff_uninstall(){
    global $wpdb;
    $table_item = $wpdb->prefix.EMAIL_RFF_TABLE_EMAIL;
    $sqlItem = "DROP TABLE IF EXISTS $table_item;";
    $wpdb->query($sqlItem);
    $table_categ = $wpdb->prefix.EMAIL_RFF_TABLE_CATEG;
    $sqlCateg = "DROP TABLE IF EXISTS $table_categ;";
    $wpdb->query($sqlCateg);
}