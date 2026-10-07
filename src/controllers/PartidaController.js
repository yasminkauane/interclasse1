const PartidaView = require ('../views/PartidaView');

const PartidaController ={
    registrarPartida(sistema){
        sistema.listarEquipes();
        try{
            const idEquipeA = PartidaView.PerguntarIdEquipe("Digite ID equipe A: ");
            const idEquipeB = PartidaView.PerguntarIdEquipe("Digite ID equipe B: ");
            const golsA = PartidaView.perguntarGols("Informe gols da equipe A: ");
            const golsB = PartidaView.perguntarGols("Informe gols da equipe B: ");
            const { equipeA, equipeB } = sistema.registrarPartida(idEquipeA, idEquipeB, golsA, golsB);
            PartidaView.mostrarRegistrada(equipeA.modalidade, equipeB.modalidade, golsA, golsB);
        } catch (erro) {
            PartidaView.mostrarErroCadastro(erro.menssage);
        }
    },
    listar(sistema){
        PartidaView.listarPartidas(sistema.listarPartidas());
    }
}