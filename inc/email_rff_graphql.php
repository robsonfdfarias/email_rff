<?php

if(!defined('WPINC')){
    die();
}

function register_custom_table_email_rff_categ_in_graphql(){
    register_graphql_object_type('CustomTableTypesEmailRffCateg', [
        "fields"=>[
            'id'=>[
                'type'=>'ID',
                'description'=>__('ID of the item', 'your_textdomain'),
            ],
            'title'=>[
                'type'=>'String',
                'description'=>__('Título do item', 'your_textdomain'),
            ],
            'statusItem'=>[
                'type'=>'String',
                'description'=>__('status do item', 'your_textdomain'),
            ],
        ]
    ]);
    register_graphql_field('RootQuery', EMAIL_RFF_TABLE_CATEG, [
        'type'=>['list_of'=>'CustomTableTypesEmailRffCateg'],
        'description'=>__('Query de consulta da tabela', 'your_textdomain'),
        'args'=>[
            'id'=>[
                'type'=>'ID',
                'description'=>__('ID do item', 'your_textdomain'),
            ],
            'title'=>[
                'type'=>'String',
                'description'=>__('Título do item', 'your_textdomain'),
            ],
            'statusItem'=>[
                'type'=>'String',
                'description'=>__('Status do item', 'your_textdomain'),
            ],
            'orderBy'=>[
                'type'=>'String',
                'description'=>__('A ordem dos títulos dos elementos retornados', 'your_textdomain'),
            ],
        ],
        'resolve'=>function($root, $args, $context, $info){
            global $wpdb;
            $table_categ = $wpdb->prefix.EMAIL_RFF_TABLE_CATEG;
            $where_clauses = [];
            if(!empty($args['id'])){
                $where_clauses[] = $wpdb->prepare('id = %d', $args['id']);
            }
            if(!empty($args['title'])){
                $where_clauses[] = $wpdb->prepare('title like %s', '%'.$args['title'].'%');
            }
            if(!empty($args['statusItem'])){
                $where_clauses[]=$wpdb->prepare('statusItem = %s', $args['statusItem']);
            }
            $order = '';
            if(!empty($args['orderBy'])){
                // $order=$wpdb->prepare('ORDER BY title %s', $args['orderBy']);
                $order='ORDER BY title '.$args['orderBy'];
            }
            $where = '';
            if(count($where_clauses)>0){
                $where = 'WHERE '.implode(' AND ', $where_clauses);
            }
            $sqlCateg = "SELECT * FROM $table_categ $where $order";
            return $wpdb->get_results($sqlCateg);
        }
    ]);
}

function register_custom_table_email_rff_item_in_graphql(){
    register_graphql_object_type('CustomTableTypesEmailRffItem', [
        "fields"=>[
            "id"=>[
                "type"=>"ID",
                "description" => __('ID do email', 'your_textdomain')
            ],
            "title"=>[
                "type"=>"String",
                "description"=>__('Título do email', 'your_textdomain')
            ],
            "content"=>[
                "type"=>"String",
                "description"=>__('Conteúdo do email', 'your_textdomain')
            ],
            "itemStatus"=>[
                "type"=>"String",
                "description"=>__('Status do email', 'your_textdomain')
            ],
            "category"=>[
                "type"=>"String",
                "description"=>__('Categoria do email', 'your_textdomain')
            ],
            "criationDate"=>[
                "type"=>"String",
                "description"=>__('Data da criação do email', 'your_textdomain')
            ],
            "sendingDate"=>[
                "type"=>"String",
                "description"=>__('Data do envio do email', 'your_textdomain')
            ],
        ]
    ]);
    register_graphql_field('RootQuery', EMAIL_RFF_TABLE_EMAIL, [
        'type'=>['list_of' => 'CustomTableTypesEmailRffItem'],
        'description' => __('Query de consulta da tabela email_rff', 'your_textdomain'),
        'args' => [
            'id' => [
                'type' => 'ID',
                'description' => __('ID do email', 'your_textdomain'),
            ],
            'title' => [
                'type' => 'String',
                'description' => __('Título do email', 'your_textdomain'),
            ],
            // 'content' => [
            //     'type' => 'String',
            //     'description' => __('Conteúdo do email', 'your_textdomain'),
            // ],
            'itemStatus' => [
                'type' => 'String',
                'description' => __('Status do email', 'your_textdomain'),
            ],
            'category' => [
                'type' => 'String',
                'description' => __('Categoria do email', 'your_textdomain'),
            ],
            'criationDate' => [
                'type' => 'String',
                'description' => __('Date de criação do email', 'your_textdomain'),
            ],
            'sendingDate' => [
                'type' => 'String',
                'description' => __('Data de envio do email', 'your_textdomain'),
            ],
            'orderBy' => [
                'type' => 'String',
                'description' => __('Título do email', 'your_textdomain'),
            ],
        ],
        'resolve' => function($root, $args, $context, $info){
            global $wpdb;
            $table_email = $wpdb->prefix.EMAIL_RFF_TABLE_EMAIL;
            $where_clauses = [];
            if(!empty($args['id'])){
                $where_clauses[] = $wpdb->prepare('id = %d', $args['id']);
            }
            if(!empty($args['title'])){
                $where_clauses[] = $wpdb->prepare('title like %s', '%'.$args['title'].'%');
            }
            // if(!empty($args['content'])){
            //     $where_clauses[] = $wpdb->prepare('content like %s', '%'.$args['content'].'%');
            // }
            if(!empty($args['itemStatus'])){
                $where_clauses[] = $wpdb->prepare('itemStatus = %s', $args['itemStatus']);
            }
            if(!empty($args['category'])){
                $where_clauses[] = $wpdb->prepare('category = %s', $args['category']);
            }
            if(!empty($args['criationDate'])){
                $where_clauses[] = $wpdb->prepare('criationDate like %s', '%'.$args['criationDate'].'%');
            }
            if(!empty($args['sendingDate'])){
                $where_clauses[] = $wpdb->prepare('sendingDate like %s', '%'.$args['sendingDate'].'%');
            }
            $where = '';
            if(count($where_clauses)>0){
                $where = 'WHERE '.implode(' AND ', $where_clauses);
            }
            $order = '';
            if(!empty($args['orderBy'])){
                $order = 'ORDER BY title '.$args['orderBy'];
            }
            $sqlEmail = "SELECT * FROM $table_email $where $order";
            return $wpdb->get_results($sqlEmail);
        }
    ]);
}