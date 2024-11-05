
<div id="ferramentas">
    <!-- <button id="testeSel" onclick="printPDF()">Imprimir</button> -->
    <select name="typefontface" id="typefontface">
        <option value="padrao" name="padrao" id="padrao"  disabled selected>Font</option>
        <option value="monospace" name="monospace" id="monospace">Monospace</option>
        <option value="Arial" name="Arial" id="Arial">Arial</option>
        <option value="Courier" name="Courier" id="Courier">Courier</option>
        <option value="Verdana" name="Verdana" id="Verdana">Verdana</option>
        <option value="Tahoma" name="Tahoma" id="Tahoma">Tahoma</option>
        <option value="Inter" name="Inter" id="Inter">Inter</option>
        <option value="Bebas Neue" name="Bebas Neue" id="Bebas Neue">Bebas Neue</option>
    </select>
    
    
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/bold.svg" title="Colocar em Negrito" onClick="negrito(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" unselectable="on" spaw_state="true" id="negrito" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/italic.svg" title="Colocar em Itálico" onClick="italico(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="italico" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/underline.svg" title="Colocar em Sublinhado" onClick="sublinhado(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="sublinhado" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/strikeout.svg" title="Adicionar linha riscada" onClick="addStrikeThrough(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="strike" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignright.svg" title="Alinhar a direita" onClick="alinharDireita()" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignleft.svg" title="Alinhar a esquerda" onClick="alinharEsquerda()" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignhorizontalcenter.svg" title="Centralizar" onClick="alinharCentro()" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/alignblock.svg" title="Justificar" onClick="justificar()" />
    <select name="tamFont" id="tamFont">
        <?php
            for($i=1; $i<8; $i++){
                echo '<option value="'.$i.'"  name="'.$i.'" id="'.$i.'">'.$i.'</option>';
            }
        ?>
        <option value="padrao" name="padrao" id="padrao" disabled selected>Size</option>
    </select>
    
    <!-- <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/defaultbullet.svg" title="Marcador" onClick="unOrdenarLista()" /> -->
    <!-- <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/defaultnumbering.svg" title="Numeração" onClick="ordenarLista()" /> -->
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/defaultbullet.svg" title="Marcador" onClick="addTagOrder('ul', 'disc')" id="unOrdenarLista" />
    <!-- <a title="desfaz" id="desfaz"> desfaz </a> - 
    <a title="desfaz" id="refaz"> resfaz </a> -  -->
    <!-- <a title="desfaz" id="impHist"> imprimiHistory </a> -->
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/defaultnumbering.svg" title="Numeração" onClick="addTagOrder('ol', 'decimal')" id="ordenarLista" />
    

    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/color.svg" title="Mudar a cor do texto" onclick="window.open('<?php echo POSTS_RFF_URL_EDITOR; ?>windowColorText.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no')" />
    
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/backcolor.svg" title="Cor de destaque do texto" onClick="window.open('<?php echo POSTS_RFF_URL_EDITOR; ?>windowColorBackGroundText.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no')" />

    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/resetattributes.svg" title="Remover formatação" onClick="removeFormatT()" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/subscript.svg" title="Colocar em subescrito" onClick="addSubScript(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="subescrito" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/superscript.svg" title="Colocar em superescrito" onClick="addSuperScript(), this.setAttribute('style', 'background-color:#cdcdcd;'), selectElem()" id="superescrito" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/changecasetoupper.svg" title="Deixar texto em caixa alta" onClick="upperAndLowerCase('upper')" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/changecasetolower.svg" title="Deixar texto em caixa baixa" onClick="upperAndLowerCase('lower')" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/capitalize.svg" title="Deixar iniciais das palavras em caixa alta" onClick="upperAndLowerCase('upperAndLower')" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/capitular.svg" title="Inserir capitular" onClick='capitular()' id="p" />

    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/insertShadowText.svg" title="Inserir sombra no texto" onClick="insertTag('rffTextShadow')" id="rffTextShadow" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/insertNeonText.svg" title="Inserir um neon no texto" onClick="insertTag('rffNeonText')" id="rffNeonText" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/insertNeonTextEColorWhite.svg" title="Inserir um neon no texto e deixar o texto transparente" onClick="insertTag('rffNeonTextEColorWhite')" id="rffNeonTextEColorWhite" />
    
    
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/rffText3D.svg" title="rffText3D" onClick="insertTag('rffText3D')" id="rffText3D" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/rffTextSimples.svg" title="rffText3DSimples" onClick="insertTag('rffText3DSimples')" id="rffText3DSimples" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/rffTextExtreme.svg" title="rffText3DExtreme" onClick="insertTag('rffText3DExtreme')" id="rffText3DExtreme" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/rffTextDegrade.svg" title="rffTextDegrade" onClick="insertTag('rffTextDegrade')" id="rffTextDegrade" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/coroa2.svg" title="rffEfeitoBGText" onClick="abreJanEfeitosTexto()" />

    <!-- <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/coroa2.svg" title="rffEfeitoBGText" onClick="upperAndLowerCase('upper')" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/coroa2.svg" title="rffEfeitoBGText" onClick="upperAndLowerCase('upperAndLower')" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/coroa2.svg" title="rffEfeitoBGText" onClick="upperAndLowerCase('lower')" /> -->
    
    <select name="formatH" id="formatH">
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
        <option value="h4">H4</option>
        <option value="h5">H5</option>
        <option value="reset">Normal</option>
        <option value="padrao" disabled selected name="padrao" id="padrao">Hs</option>
    </select>
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/hangingindent.svg" title="Identar linha" onClick="addIdent()" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/hangingindentremove.svg" title="Remove a identação" onClick="addOutIdent()" />

    <!-- <img src="<?php //echo POSTS_RFF_URL_EDITOR; ?>imgEditor/copy.svg" title="Copiar" onClick="copiar()" />
    <img src="<?php //echo POSTS_RFF_URL_EDITOR; ?>imgEditor/paste.svg" title="Colar" onClick="colar()" />
    <img src="<?php //echo POSTS_RFF_URL_EDITOR; ?>imgEditor/cut.svg" title="Recortar" onClick="recortar()" /> -->

    <!-- <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/redo.svg" title="Refazer" onClick="refazer()" id="refaz" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/undo.svg" title="Desfazer" onClick="desfazer()" id="desfaz" /> -->
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/redo.svg" title="Refazer" id="refaz" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/undo.svg" title="Desfazer" id="desfaz" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/insertvideo.svg" title="Inserir Vídeo" onClick="openWindowInsertVideo()" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/graphic.svg" title="Inserir Imagem" onClick="openWindowInsertImage()" />
    <!-- <img src="<?php //echo POSTS_RFF_URL_EDITOR; ?>imgEditor/editImage.svg" title="Acrescentar a função de editar as imagens" onClick="funcBtImg()" /> -->
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/inserttable.svg" title="Inserir tabela" onClick="insertTable()" />
    
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/inserthyperlinkcontrol.svg" title="Inserir hiperlink" onClick="openWindowLink()" id="insertHyperLink" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/removehyperlink.svg" title="Remover hiperlink" onClick="unlink()" />

    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/emotions.svg" title="Inserir emotions" style="width:40px; height:auto;" onClick="abreJanEmotions()" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/citacao.png" title="Inserir uma citação" onClick="insertTag('cite'), this.setAttribute('style', 'background-color:#cdcdcd;')" id="cite" />
    

    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/breakPage.svg" title="Inserir quebra de página" onClick="insertBreakPage()" unselectable="on" spaw_state="true" id="breakPage" />
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/summary.svg" title="Inserir/remover Sumário" onClick="setOrRemoveHeading()" unselectable="on" spaw_state="true" id="sumario" />
    <!-- <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/print.svg" title="Imprimir" onClick="pdf()" id="print" /> -->
    <img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/pastTextWordWeb.svg" title="Colar um conteúdo tirado da WEB ou do Word" onClick="openPasteContentOfWeb()" unselectable="on" spaw_state="true" id="pasteContentOfWeb" />
    
    <!-- <img src="<?php //echo POSTS_RFF_URL_EDITOR; ?>imgEditor/pastTextWordWeb.svg" title="Capitular" onClick="capitular()" unselectable="on" spaw_state="true" id="pasteContentOfWeb" /> -->
    
    <a href="https://www.youtube.com/@RobsonFarias-os2di" target="_blank"><img src="<?php echo POSTS_RFF_URL_EDITOR; ?>imgEditor/tutorial.svg" alt="Saiba como usar o editor" title="Saiba como usar o editor"></a>
    
</div>