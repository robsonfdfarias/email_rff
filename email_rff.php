<?php
/*
Plugin Name: Email Rff
Description: Plugin com um editor de texto personalizado para envio de email e registro no banco de dados.
Version: 1.0
Author: Robson Ferreira de Farias
*/

if(!defined('WPINC')){
    die();
}


 //Definição das constantes
 define('EMAIL_RFF_CORE_INC', dirname(__FILE__).'/inc/'); //Caminho da pasta dos arquivos PHP
 define('EMAIL_RFF_DIR_IMG', dirname(__FILE__).'/img/'); //Caminho da pasta das imagens
 define('EMAIL_RFF_URL_IMG', plugins_url('img/', __FILE__)); //Caminho da pasta das imagens
 define('EMAIL_RFF_URL_INC', plugins_url('inc/', __FILE__)); //Caminho da pasta das imagens
 define('EMAIL_RFF_URL_CSS', plugins_url('css/', __FILE__)); //Caminho da pasta dos arquivos CSS
 define('EMAIL_RFF_URL_JS', plugins_url('js/', __FILE__)); //Caminho da pasta dos arquivos JS
 define('EMAIL_RFF_URL_EDITOR', plugins_url('rffeditor/', __FILE__)); //URL da pasta dos arquivos do editor
 define('EMAIL_RFF_DIR_EDITOR', dirname(__FILE__).'/rffeditor/'); //Caminho da pasta dos arquivos do editor


 // Adiciona o CSS e JS
// function email_rff_adicionar_scripts() {
//     wp_enqueue_style('email-rff-editor-p1-css', plugin_dir_url(__FILE__) . 'rffeditor/editorRobsonFarias.css');
//     wp_enqueue_style('email-rff-editor-p2-css', plugin_dir_url(__FILE__) . 'rffeditor/janMovEdiExc.css');
//     wp_enqueue_style('email-rff-editor-p3-css', plugin_dir_url(__FILE__) . 'rffeditor/print.css');
//     wp_enqueue_style('email-rff-modal-css', plugin_dir_url(__FILE__) . 'css/email_rff_style.css');
//     wp_enqueue_script('email-rff-modal-js', plugin_dir_url(__FILE__) . 'js/email_rff_functions.js', array('jquery'), null, true);

// }
  
//   add_action('admin_enqueue_scripts', 'email_rff_adicionar_scripts');

//  // Adiciona o CSS e JS
//  function email_rff_adicionar_scripts_wp() {
//     wp_enqueue_style('email-rff-editor-p1-css', plugin_dir_url(__FILE__) . 'rffeditor/editorRobsonFarias.css');
//   }
  
//   add_action('wp_enqueue_scripts', 'email_rff_adicionar_scripts_wp');

   /**
   * Includes PHP
   */
if(file_exists(plugin_dir_path(__FILE__).'email-rff-core.php')){
    require_once(plugin_dir_path(__FILE__).'email-rff-core.php');
}

