const ball = document.getElementById("ball")
        ball.addEventListener("click", click)

        function click(){
            const result = document.getElementById("result")
            result.innerHTML= texto()         
        }
        
    
        function texto (){
        const frases = Math.floor(Math.random() * 19);
       
            switch(frases){
                case 0:
                    return 'é certo'
                    break
                case 1:
                    return 'É decididamente assim'
                    break
                case 2: 
                    return 'Sem dúvida'
                    break    
                case 3: 
                    return 'Sim, definitivamente'
                    break   
                case 4: 
                    return 'Você pode confiar nisso'
                    break   
                case 5: 
                    return 'A meu ver, sim'
                    break   
                case 6:       
                    return 'Provavelmente'
                    break
                case 7:
                    return 'sim'
                    break
                case 8: 
                    return 'Resposta nebulosa, tente novamente'
                    break    
                case 9: 
                    return 'sinais apontam para sim'
                    break   
                case 10: 
                    return 'melhor não contar agora'
                    break   
                case 11: 
                    return 'Não é possível prever agora'
                    break   
                case 12:
                    return 'Concentre-se e pergunte novamente'
                    break
                case 13:
                    return 'Não conte com isso'
                    break
                case 14: 
                    return 'Minha resposta é não'
                    break    
                case 15: 
                    return 'Minhas fontes dizem não'
                    break   
                case 16: 
                    return ' Outlook não é tão bom'
                    break   
                case 17: 
                    return 'Muito duvidoso'
                    break   
                default:
                    return 'Pergunte novamente mais tarde'
                    break
            }
        }
        

