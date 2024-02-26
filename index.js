const opcaoPedido = [
    {categoria: "lanches", itens: ["x-burguer", "x-frango", "x-salada", "x-cheddar", "x-tudo"]},
    {categoria: "bebidas", itens:  ["coca lata 500ml", "coca 2l", "fanta uva lata 500ml", "fanta laranja lata 500ml", "suco de laranja"]},
    {categoria: "combos", itens: ["2 x-burguer + fritas média + 2 coca lata", "2 x-tudo + balde de fritas + coca 2l"]}
]

const filaUsuario = []

function menuIncial() {
    
    let opcao = ""

    do {
        opcao = prompt(
        "Bem-Vindo à Loui'z Burguer's\n" +
        "Fila de Espera: " + filaDeEspera() + "\n\n" +
        "1. Novo Pedido\n" +
        "2. Pedido Pronto\n\n" +
        "3. Sair"
        )

        switch(opcao) {
            case "1":
                menuPedido()
                break
            case "2":
                atenderProximoCliente() 
                break
            case "3":
                alert("Saindo...")
                break
            default:
                alert("Opção Invalida!")
                break
        }

    } while (opcao !== "3")
   
}

function filaDeEspera() {
    let posicaoFila = ""
    
    for (let i = 0; i < filaUsuario.length; i++) {
        posicaoFila += (i + 1) + "° " + filaUsuario[i] + " - "
    }
    
    return posicaoFila
}

function atenderProximoCliente() {
    if (filaUsuario.length > 0) {
        return alert("Pedido de " + filaUsuario.shift() + " Finalizado!")
    } else {
        return alert("Nenhum cliente na fila!")
    }
}

function menuPedido() {
    let nomeUsuario = ""
    let opcao = ""

    do {
        opcao = prompt(
            "Monte seu pedido :D\n\n" +
            "1. Lanches\n" +
            "2. Bebidas\n" +
            "3. Combos\n" +
            "4. Finalizar pedido\n" +
            "5. Cancelar pedido"
        )

        switch(opcao) {
            case "1":
                opcaoDeLanches()
                break
            case "2":
                opcaoDeBebidas()
                break
            case "3":
                opcaoDeCombos()
                break
            case "4":
                nomeUsuario = prompt("Digite o nome que deseja para que seja chamado em sua vez: ") 
                filaUsuario.push(nomeUsuario)   
                break
            case "5":
                alert("Pedido Cancelado!")
                break
            default:
                alert("Opção Invalida!")
                break
        }

    } while (opcao !== "4" && opcao !== "5")
}

function opcaoDeLanches() {
    const lanches = opcaoPedido.find(function (opcao) {
        return opcao.categoria === "lanches"
    })

    if (lanches) {
        let escolha = prompt(
            "Escolha o seu LANCHE:\n" +
            lanches.itens.map(function(lanche, index) {
                return (index + 1) + ". " + lanche
            }).join("\n")
        )

        escolha = parseInt(escolha);
        
        if (!isNaN(escolha) && escolha > 0 && escolha <= lanches.itens.length) {
            const lancheEscolhido = lanches.itens[escolha - 1]
            alert("Você escolheu: " + lancheEscolhido)
            // Aqui você pode adicionar o lanche escolhido a um objeto ou array de pedidos.
        } else {
            alert("Opção inválida.")
        }
    } else {
        alert("Lanches não disponíveis.")
    }
}
    
function opcaoDeBebidas() {
    const bebidas = opcaoPedido.find(function (opcao) {
        return opcao.categoria === "bebidas"
    })

    if (bebidas) {
        let escolha = prompt(
            "Escolha sua BEBIDA:\n" +
            bebidas.itens.map(function(bebida, index) {
                return (index + 1) + ". " + bebida
            }).join("\n")
        )

        escolha = parseInt(escolha)

        if (!isNaN(escolha) && escolha > 0 && escolha <= bebidas.itens.length) {
            const bebidaEscolhida = bebidas.itens[escolha - 1]
            alert("Você escolheu: " + bebidaEscolhida)
            // Aqui você pode adicionar o lanche escolhido a um objeto ou array de pedidos.
        } else {
            alert("Opção Inválida.")
        }
    } else alert("Bebidas não disponíveis.")
}
    
function opcaoDeCombos() {
    const combos = opcaoPedido.filter(function(opcaoCombos) {
        return opcaoCombos.categoria === "combos"
    }).map(function(opcaoCombos) {
        return opcaoCombos.itens
    })

    alert(combos)
}

    


menuIncial()
console.log(filaUsuario)