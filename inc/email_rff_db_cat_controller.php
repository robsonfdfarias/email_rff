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
    function getCatById($id){
        $id = $this->tools->checkIfPostVarEmpty($id);
        $res = $this->db->getCatById($id);
        $json = '{
            "id": "'.$res['id'].'",
            "title": "'.$res['title'].'",
            "statusItem": "'.$res['statusItem'].'"
        }';
        return $json;
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
    function insertCateg($title, $status){
        $title = $this->tools->checkIfPostVarEmpty($title);
        $status = $this->tools->checkIfPostVarEmpty($status);
        $res = $this->db->insertCateg($title, $status);
        if($res<=0 || $res==false){
            echo '<div class="notice notice-failure is-dismissible"><p>Não foi possível inserir a categoria.</p></div>';
        }else{
            echo '<div class="notice notice-success is-dismissible"><p>Categoria <strong>inserida</strong> com sucesso!</p></div>';
        }
    }
    function updateCateg($id, $title, $status){
        $id = $this->tools->checkIfPostVarEmpty($id);
        $title = $this->tools->checkIfPostVarEmpty($title);
        $status = $this->tools->checkIfPostVarEmpty($status);
        $res = $this->db->updateCateg($id, $title, $status);
        if($res<=0 || $res==false){
            echo '<div class="notice notice-failure is-dismissible"><p>Não foi possível atualizar a categoria.</p></div>';
        }else{
            echo '<div class="notice notice-success is-dismissible"><p>Categoria <strong>atualizada</strong> com sucesso!</p></div>';
        }
    }
    function deleteCateg($id){
        $id = $this->tools->checkIfPostVarEmpty($id);
        $res = $this->db->deleteCateg($id);
        if($res<=0 || $res==false){
            echo '<div class="notice notice-failure is-dismissible"><p>Não foi possível excluir a categoria.</p></div>';
        }else{
            echo '<div class="notice notice-success is-dismissible"><p>Categoria <strong>excluída</strong> com sucesso!</p></div>';
        }
    }
    function actionOnSubmitForm(){
        if(isset($_POST['email_rff_categ_bt_add'])){
            $this->insertCateg($_POST['email_rff_cat_title'], $_POST['email_rff_cat_status']);
        }
        if(isset($_POST['email_rff_categ_bt_update'])){
            $this->updateCateg($_POST['email_rff_cat_id'], $_POST['email_rff_cat_title'], $_POST['email_rff_cat_status']);
        }
        if(isset($_POST['email_rff_categ_bt_delete'])){
            $this->deleteCateg($_POST['email_rff_cat_id']);
        }
    }
    function displayTable(){
        $table = '<div id="divAdminCategEmailRff" style="display:none; position:absolute; top:0;left:0; background-color:white; width:calc(100% - 40px);min-height:calc(100% - 100px);padding:20px; z-index:103; padding-top: 60px;">';
        $table .= '<div class="btCloseEmailRff" onclick="closeAdminCategEmailRff()">X</div>';
        $table .= '<h1>Categorias</h1>';
        $table .= '<a onclick="openFormCategEmailRff()" class="page-title-action" style="margin-top:10px;">Criar categoria</a>';
        $table .= '<br><table class="wp-list-table widefat fixed striped" style="table-layout: auto !important;"><tbody>';
        $table .= '<tr>
                    <td>
                        ID
                    </td>
                    <td>
                        Título
                    </td>
                    <td>
                        Status
                    </td>
                    <td>
                        Ações
                    </td>
                </tr>';
        $content = $this->getAllCateg();
        foreach($content as $item){
            $table .= "<tr>
                        <td>
                            {$item->id}
                        </td>
                        <td>
                            <a onclick=\"editCategFormEmailRff('idCateg', {$item->id})\" style='cursor:pointer;'>{$item->title}</a>
                        </td>
                        <td>
                            {$item->statusItem}
                        </td>
                        <td>
                            <a onclick=\"editCategFormEmailRff('idCateg', {$item->id})\" style='cursor:pointer;'>Editar</a>
                        </td>
                    </tr>";
        }
        $table .= '</tbody></table>';
        $table .= '</div>';
        echo $table;
    }

    function displayFormCateg(){
        $table = '<div id="divFormCategEmailRff" style="display:none; position:absolute; top:0;left:0; background-color:white; width:calc(100% - 40px);min-height:calc(100% - 100px);padding:20px; z-index:106; padding-top: 60px;">';
        $table .= '<h1>Formulário de categorias de e-mail</h1><br>';
        $table .= '<form method="post" id="formCategEmailRff" name="formCategEmailRff">';
        $table .= '<input type="hidden" name="email_rff_cat_id" id="email_rff_cat_id">';
        $table .= '<input type="text" style="width:100%;border-radius:4px 4px 4px 0px;" name="email_rff_cat_title" id="email_rff_cat_title" placeholder="Insira o título" required>';
        $table .= '<select id="email_rff_cat_status" name="email_rff_cat_status" style="padding:4px 20px;border-radius:0 0px 4px 4px; border-top:0px;" required>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                </select>';
        $table .= '<br>';
        $table .= '<button type="submit" class="btsubmitEmailRff" name="email_rff_categ_bt_add" id="email_rff_categ_bt_add" onclick="event.preventDefault(), emailRffSubmitFormCateg(this)">Cadastrar</button>';
        $table .= '<button type="submit" class="btsubmitEmailRff" name="email_rff_categ_bt_update" id="email_rff_categ_bt_update" onclick="event.preventDefault(), emailRffSubmitFormCateg(this)">Atualizar</button>';
        $table .= '<button type="submit" class="btsubmitEmailRff btEmailRffDel" name="email_rff_categ_bt_delete" id="email_rff_categ_bt_delete" onclick="event.preventDefault(), emailRffSubmitFormCateg(this)">Deletar</button>';
        $table .= '<button type="submit" class="btsubmitEmailRff" name="email_rff_categ_bt_cancel" id="email_rff_categ_bt_cancel" onclick="event.preventDefault(), closeFormCategEmailRff()">Cancelar</button>';
        $table .= '</form>';
        $table .= '</div>';
        echo $table;
    }
}