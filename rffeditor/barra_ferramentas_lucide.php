<div id="ferramentas" class="rfflucide">
    <?php
        $styleSelect = 'height:fit-content; width:120px; font-size:14px; line-height:19px; margin:auto; padding:0 10px';
    ?>
    <!-- <button id="testeSel" onclick="printPDF()">Imprimir</button> -->
    <select name="typefontface" id="typefontface" style="<?php echo $styleSelect; ?>">
        <option value="padrao" name="padrao" id="padrao"  disabled selected>Font</option>
        <option value="monospace" name="monospace" id="monospace">Monospace</option>
        <option value="Arial" name="Arial" id="Arial">Arial</option>
        <option value="Courier" name="Courier" id="Courier">Courier</option>
        <option value="Verdana" name="Verdana" id="Verdana">Verdana</option>
        <option value="Tahoma" name="Tahoma" id="Tahoma">Tahoma</option>
        <option value="Inter" name="Inter" id="Inter">Inter</option>
        <option value="Bebas Neue" name="Bebas Neue" id="Bebas Neue">Bebas Neue</option>
    </select>
    
    
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/bold.svg" title="Colocar em Negrito" onClick="negrito(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" unselectable="on" spaw_state="true" id="negrito" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/italic.svg" title="Colocar em Itálico" onClick="italico(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="italico" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/underline.svg" title="Colocar em Sublinhado" onClick="sublinhado(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="sublinhado" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/strikethrough.svg" title="Adicionar linha riscada" onClick="addStrikeThrough(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="strike" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/align-right.svg" title="Alinhar a direita" onClick="alinharDireita()" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/align-left.svg" title="Alinhar a esquerda" onClick="alinharEsquerda()" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/align-center.svg" title="Centralizar" onClick="alinharCentro()" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/align-justify.svg" title="Justificar" onClick="justificar()" />
    <select name="tamFont" id="tamFont" style="<?php echo $styleSelect; ?>">
        <?php
            for($i=1; $i<8; $i++){
                echo '<option value="'.$i.'"  name="'.$i.'" id="'.$i.'">'.$i.'</option>';
            }
        ?>
        <option value="padrao" name="padrao" id="padrao" disabled selected>Size</option>
    </select>
    
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/list.svg" title="Marcador" onClick="addTagOrder('ul', 'disc')" id="unOrdenarLista" />
    
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/list-ordered.svg" title="Numeração" onClick="addTagOrder('ol', 'decimal')" id="ordenarLista" />
    

    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/baseline.svg" title="Mudar a cor do texto" onclick="window.open('<?php echo POSTS_RFF_URL_EDITOR; ?>windowColorText.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no')" />
    
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/brush.svg" title="Cor de destaque do texto" onClick="window.open('<?php echo POSTS_RFF_URL_EDITOR; ?>windowColorBackGroundText.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no')" />

    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/eraser.svg" title="Remover formatação" onClick="removeFormatT()" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/subscript.svg" title="Colocar em subescrito" onClick="addSubScript(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="subescrito" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/superscript.svg" title="Colocar em superescrito" onClick="addSuperScript(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="superescrito" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/case-upper.svg" title="Deixar texto em caixa alta" onClick="upperAndLowerCase('upper')" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/case-lower.svg" title="Deixar texto em caixa baixa" onClick="upperAndLowerCase('lower')" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/case-sensitive.svg" title="Deixar iniciais das palavras em caixa alta" onClick="upperAndLowerCase('upperAndLower')" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/letter-text.svg" title="Inserir capitular" onClick='capitular()' id="p" />

    
    <select name="formatH" id="formatH" style="<?php echo $styleSelect; ?>">
        <option value="h1">Título 1 → (ctrl+alt+1)</option>
        <option value="h2">Título 2 → (ctrl+alt+2)</option>
        <option value="h3">Título 3 → (ctrl+alt+3)</option>
        <option value="h4">Título 4 → (ctrl+alt+4)</option>
        <option value="h5">Título 5 → (ctrl+alt+5)</option>
        <option value="reset">Normal</option>
        <option value="padrao" disabled selected name="padrao" id="padrao">Parágrafos</option>
    </select>
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/indent-increase.svg" title="Identar linha" onClick="addIdent()" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/indent-decrease.svg" title="Remove a identação" onClick="addOutIdent()" />

    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/redo.svg" title="Refazer" id="refaz" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/undo.svg" title="Desfazer" id="desfaz" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/youtube.svg" title="Inserir Vídeo" onClick="openWindowInsertVideo()" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/image-plus.svg" title="Inserir Imagem" onClick="openWindowInsertImage()" />
    <!-- <img src="<?php //echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/editImage.svg" title="Acrescentar a função de editar as imagens" onClick="funcBtImg()" /> -->
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/table.svg" title="Inserir tabela" onClick="insertTable()" />
    
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/link-2.svg" title="Inserir hiperlink" onClick="openWindowLink()" id="insertHyperLink" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/link-2-off.svg" title="Remover hiperlink" onClick="unlink()" />

    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/smile-plus.svg" title="Inserir emotions" onClick="abreJanEmotions()" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgsLucide/quote.svg" title="Inserir uma citação" onClick="insertTag('cite'), this.setAttribute('style', 'background-color:#cdcdcd;')" id="cite" />
    
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/insertShadowText.svg" title="Inserir sombra no texto" onClick="insertTag('rffTextShadow')" id="rffTextShadow" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/insertNeonText.svg" title="Inserir um neon no texto" onClick="insertTag('rffNeonText')" id="rffNeonText" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/insertNeonTextEColorWhite.svg" title="Inserir um neon no texto e deixar o texto transparente" onClick="insertTag('rffNeonTextEColorWhite')" id="rffNeonTextEColorWhite" />
    
    
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/rffText3D.svg" title="rffText3D" onClick="insertTag('rffText3D')" id="rffText3D" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/rffTextSimples.svg" title="rffText3DSimples" onClick="insertTag('rffText3DSimples')" id="rffText3DSimples" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/rffTextExtreme.svg" title="rffText3DExtreme" onClick="insertTag('rffText3DExtreme')" id="rffText3DExtreme" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/rffTextDegrade.svg" title="rffTextDegrade" onClick="insertTag('rffTextDegrade')" id="rffTextDegrade" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/coroa2.svg" title="rffEfeitoBGText" onClick="abreJanEfeitosTexto()" />


    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/breakPage.svg" title="Inserir quebra de página" onClick="insertBreakPage()" unselectable="on" spaw_state="true" id="breakPage" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/summary.svg" title="Inserir/remover Sumário" onClick="setOrRemoveHeading()" unselectable="on" spaw_state="true" id="sumario" />
    
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/pastTextWordWeb.svg" title="Colar um conteúdo tirado da WEB ou do Word" onClick="openPasteContentOfWeb()" unselectable="on" spaw_state="true" id="pasteContentOfWeb" />
    <img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/shortcode.svg" title="Inserir shortcode" onClick="insertShortcode()" unselectable="on" spaw_state="true" id="shortcode" />
    
    <a href="https://www.youtube.com/@RobsonFarias-os2di" target="_blank"><img class="img" src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/tutorial.svg" alt="Saiba como usar o editor" title="Saiba como usar o editor"></a>
    
</div>