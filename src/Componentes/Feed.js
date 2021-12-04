export default function Feed(){
    return(
        <Posts />
    );
}

function Posts(){
const post = [
    <section class = "posts">
        <Usuario imagem = "assets/kaisa-icone.jpg" nome = "Kai'Sa" />
        <SeparadorFeed />
        <Fotos foto = "assets/kaisa-post.jpg" descricao = "Kai'Sa Post"/>
        <IconesFoto />
        <Curtidas nome = "Zyra" quantidade = "1.267.986"/>
    </section>,
    <section class = "posts">
        <Usuario imagem = "assets/Vex-icone.png" nome = "Vex" />
        <SeparadorFeed />
        <Fotos foto = "assets/vex-post.jpg" descricao = "Vex Post"/>
        <IconesFoto />
        <Curtidas nome = "Amumu" quantidade = "3.784"/>
    </section>,
    <section class = "posts">
        <Usuario imagem = "assets/seraphine-icone.png" nome = "Seraphine" />
        <SeparadorFeed />
        <Fotos foto = "assets/seraphine-post.jpg" descricao = "Seraphine Post"/>
        <IconesFoto />
        <Curtidas nome = "Akali" quantidade = "875.943"/>
    </section>
]

return (
    post.map(postagens => <div>{postagens}</div> )
)
}

function Usuario(props){
    return(
        <div class="usuario">
            <div class="box-usuario">
                <img src={props.imagem} alt={props.nome} />
                <span>{props.nome}</span>
            </div>
            <ion-icon class="tres-pontos" name="ellipsis-horizontal-outline"></ion-icon>
        </div>
    );
}

function SeparadorFeed(){
    return (
        <div class="separadorFeed"></div>
    );
}

function Fotos(props){
    return (
        <div class="fotos">
            <img src={props.foto} alt={props.descricao} />
        </div>
    )
}

function IconesFoto(){
    return(
        <div class="icones-foto">
            <div class="iconesInferioresDaFoto">
                <ion-icon class="dimensao" name="heart-outline"></ion-icon>
                <ion-icon class="dimensao" name="chatbubble-outline"></ion-icon>
                <ion-icon class="dimensao" name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon class="dimensao icone-salvar" name="bookmark-outline"></ion-icon>
        </div>
    );
}

function Curtidas(props){
    return (
        <div class="curtidas-usuarios">
            <img class="mini-icone" src="assets/zyra-icone.jpg" alt="Zyra" />
            <p>Curtido por <strong>{props.nome}</strong> e <strong>outras {props.quantidade} pessoas</strong></p>
        </div>
    );
}