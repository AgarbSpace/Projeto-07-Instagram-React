export default function Stories(){
    const stories = [<IconeStories background = "assets/stories_background.jpg"imagem = "assets/Vex-icone.png" nome = "Vex" />,
<IconeStories background = "assets/stories_background.jpg"imagem = "assets/Soraka-icone.png" nome = "Soraka" />, 
<IconeStories background = "assets/stories_background.jpg"imagem = "assets/seraphine-icone.png" nome = "Seraphine" />,
<IconeStories background = "assets/stories_background.jpg"imagem = "assets/morgana-icone.jpg" nome = "Morgana" />,
<IconeStories background = "assets/stories_background.jpg"imagem = "assets/sona-icone.jpg" nome = "Sona" />,
<IconeStories background = "assets/stories_background.jpg"imagem = "assets/lux-icone.png" nome = "Lux" />,
<IconeStories background = "assets/stories_background.jpg"imagem = "assets/zyra-icone.jpg" nome = "Zyra" />,
<IconeStories background = "assets/stories_background.jpg"imagem = "assets/ahri-icone.png" nome = "Ahri" />]


    return(
        <section class="stories">
           {stories.map(icone => <div>{icone}</div>) }
        </section>
    )
}

function IconeStories(props){
    return (
        <div class="icone-stories">
            <img class="background" src={props.background} alt="Stories Background" />
            <div class="foto-icone">
                <img src={props.imagem} alt={props.nome}/>
                <span>{props.nome}</span>
            </div>
        </div>
    );
}