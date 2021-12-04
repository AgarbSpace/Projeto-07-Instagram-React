export default function MenuTopo(){
    return (
        <header class ="menuTopo">
            <LogoDaPagina />
            <BarraDePesquisa />
            <IconesDoMenu />
            <IconeAviaoMobile />
        </header>
    )
}

function LogoDaPagina(){
    return (
        <div class="logoDaPagina">
            <ion-icon class="icone" name="logo-instagram"></ion-icon>
            <div class="separador-vertical"></div>
            <img src="assets/logo.png" alt="Logo Instagram" />
        </div>
    );
}

function BarraDePesquisa(){
    return(
        <div class="pesquisa">
            <input type="text" class="Busca" placeholder="Pesquisar"/>
        </div>
    )
}

function IconesDoMenu(){
    return (
        <div class="iconesDoMenu">
            <ion-icon class="icone" name="paper-plane-outline" ></ion-icon>
            <ion-icon class="icone icone-none" name="compass-outline"></ion-icon>
            <ion-icon class="icone icone-none" name="heart-outline"></ion-icon>
            <ion-icon class="icone icone-none" name="person-outline"></ion-icon>
        </div>
    )
}

function IconeAviaoMobile(){
    return (
        <ion-icon class="icone icone-aviao" name="paper-plane-outline" ></ion-icon>
    );
}

