export default function ColunaPerfilESugestoes (){
    const sugestoes = [<Sugestoes imagem = "assets/sett-icone.png" nome = "Sett" novo = "Novo no Instagram" />,
<Sugestoes imagem = "assets/yasuo-icone.jfif" nome = "Yasuo" novo = "Segue você" />,
<Sugestoes imagem = "assets/ezreal-icone.png" nome = "Ezreal" novo = "Segue você" />,
<Sugestoes imagem = "assets/eve-icone.jpg" nome = "Evelynn" novo = "Segue você" />,
<Sugestoes imagem = "assets/trist-icone.png" nome = "Tristana" novo = "Segue você" />]
    
    return(
        <section class = "colunaPerfilESugestoes">
            <MeuPerfil nome = "Agarb" />
            <div class = "sugestoes">
                {sugestoes.map(pessoas => <div>{pessoas}</div>)}
            </div>
            <Links />
            <Fim />
        </section>
    );
}

function MeuPerfil(props){
    return(
        <div class="meu-perfil">
            <div class="icone-perfil">
                <img src="assets/meu-icone.jpg" alt="Perfil" />
                <div class="infos">
                    <strong>{props.nome}</strong>
                    <p class="nome">{props.nome}</p>
                </div>
            </div>
            <div class="separador-horizontal3"></div>
            <div class="sugestoes-ver-tudo">
                <p class="sugestoes-para-voce">Sugestões para você</p>
                <strong class="ver">Ver tudo</strong>
            </div>
        </div>
    );
}

function Sugestoes(props){
    return (
        <div class="box-sugestoes">
            <div class="box-nome-img">
                <img src={props.imagem} alt= {props.nome}/>
                <div class="nome-sugestoes">
                    <div class="box-nome-sugestoes">
                        <strong class="nome-sugestoes">{props.nome}</strong>
                        <p class="segue-voce">{props.novo}</p>
                    </div>
                </div>
            </div>

            <strong class="seguir">Seguir</strong>
        </div>
    );

}

function Links(){
    return (
        <section class="links" >
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags • 
            Idioma
        </section>
    );
}

function Fim(){
    return (
        <div class="fim">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}