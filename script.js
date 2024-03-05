// Obter a data atual
const hoje = new Date();

// Extrair os componentes da data
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Os meses são zero-based
const dia = String(hoje.getDate()).padStart(2, '0');

// Formatar a data como YYYY-MM-DD
const dataFormatada = `${ano}-${mes}-${dia}`;

console.log(dataFormatada);
var horario1 = [];

$(document).ready(function(){
    let idClicado; // Variável para armazenar o id do botão .horariosL clicado
    //horario1 = JSON.parse(localStorage.getItem('horario1')) || [];
    localStorage.clear();
    
    $(".horariosL").each(function(){
        let id = $(this).attr('id');
        for(let i = 0; i < horario1.length; i++) {
            if(horario1[i].id === id) {
                $(this).removeClass("horariosL").addClass("horariosO");
                break;
            }
        }
    });

    $(".horariosL").click(function(){
        idClicado = $(this).attr('id');
        let situacao = $(this).attr('class');
        if (situacao === "horariosL") {
            console.log("Livre");
            $("#formulario").css("display", "flex");
        }else{
            console.log("Ocupado");
        }
    });

    $("#enviar").click(function(){
        if($("#nome").val() === "" || $("#telefone").val() === "") {
            alert("Preencha todos os campos");
        }else{
            var nome = $("#nome").val();
            var telefone = $("#telefone").val();
            var servico = $("#servico option:selected").text();
            var pagamento = $("#fpagamento option:selected").text();
            horario1.push({nome: nome, telefone: telefone, servico: servico, pagamento: pagamento, id: idClicado});
            console.log(horario1);
            $("#"+idClicado).removeClass("horariosL").addClass("horariosO");
            $("#formulario").css("display", "none");
            $("#formulario input").val('');
            alert("Horário reservado com sucesso!");
            //localStorage.setItem('horario1', JSON.stringify(horario1));
        }
    });
});