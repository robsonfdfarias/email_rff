class EmailRffFetch{
    constructor(endpoint){
        this.endpoint = endpoint;
        this.dir = localStorage.getItem('EMAIL_RFF_DIR_INC');
    }
    fetchEmail(cat){
        fetch("https://viacep.com.br/ws/01001000/json/")
        .then(response => response.json())
        .then((json)=>{
            let div = document.getElementById('divReturnEmailSending');
            if(div){
                console.log(json);
                div.innerHTML = json;
            }else{
                alert('Div de retorno de email não encontrada.');
            }
        })
        .catch(erro => {
            console.log('Erro encontrado: '+erro);
            div.innerHTML = erro;
        });
    }
    sendEmailsFetch(emailUser, urlOpen){
        // let dir = localStorage.getItem('EMAIL_RFF_DIR_INC');
        let url = this.dir+'email_rff_endpoint_sendEmail.php';
        // console.log(url)
        const emails = [
            'est6884@jaraguadosul.sc.gov.br',
            'id10830@jaraguadosul.sc.gov.br',
            'robsonfdfarias@gmail.com',
            'camilacoutofarias@gmail.com',
            'robsonfarias.jw@gmail.com'
        ];
        let index = 0;
        let div = document.getElementById('divReturnEmailSending');
        let rffSubjectEmail = document.getElementById('rffSubjectEmail');
        let rffContentEmail = document.getElementById('rffContentEmail');
        async function sendNext(){
            if(index<emails.length){
                const email = emails[index];
                await fetch(url, {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        emails: email,
                        emailUser: emailUser,
                        subject: rffSubjectEmail.innerHTML,
                        content: rffContentEmail.innerHTML
                    })
                })
                .then(response => response.json())
                .then(json => {
                    div.innerHTML += `<p>${json}</p>`;
                    // console.log(json);
                })
                .catch(erro => {
                    console.log('Erro encontrado: '+erro);
                })
                .finally(()=>{
                    index++;
                    setTimeout(sendNext, 300);
                })
            }else{
                window.open(urlOpen, 'janela', 'height=450, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
            }
        }
        sendNext();
    }
}