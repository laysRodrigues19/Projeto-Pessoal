import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();

  const handleHomeClick = () => {
    navigation.navigate('Home');
  };

  const handleProfileClick = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.caixas}>
          <View style={styles.nome}>
            O que é o Twitter e como ele funciona?
          </View>
          <View style={styles.conteudo}>
            <Text>
              O Twitter é uma rede social lançada em 2006 e sem dúvida uma das plataformas sociais mais populares atualmente. Tem 100 milhões de usuários ativos diários e 500 milhões de publicações (em inglês) por dia.
            </Text>
            <Text>
              O Twitter pode ser usado para ler notícias, seguir celebridades e manter o contato com amigos do tempo da escola.
            </Text>
            <Text>
              Mas sua popularidade pode ser intimidadora. Se você ainda não sabe como usá-lo em 2022, será que ainda vale a pena tentar se juntar a essa multidão que já tem tantos anos de experiência?
            </Text> 
            <Text>
              Para sua sorte, o Twitter é muito fácil de usar. Vamos falar sobre o que é o Twitter, quem o usa e como dar os primeiros passos hoje mesmo.
            </Text>
             <Text>
              O Twitter pode ser usado para ler notícias, seguir celebridades e manter o contato com amigos do tempo da escola.
            </Text>
            <View style={styles.nome}>
            O que é o Twitter?
          </View>
            <Text>
              Em 2006, Jack Dorsey, cofundador do Twitter teve uma ideia: criar uma plataforma de comunicação SMS em que amigos pudessem manter contato por atualizarem seus status. No início, o Twitter era bem parecido com torpedos.
            </Text> 
            <Text>
              A ideia evoluiu, em grande parte por conta das sessões de brainstorming com o outro cofundador, Evan Williams.
            </Text>
            <Text>
              Em 21 de março de 2006, Jack enviou o primeiro tweet, que dizia “só estou configurando meu twttr”.
            </Text> 
            <Text>
              O Twitter teve um crescimento explosivo na conferência South By Southwest Interactive 2007 (em inglês), quando mais de 60.000 tweets foram enviados. A equipe do Twitter aproveitou essa conferência para começar a expandir a base de usuários.
            </Text> 
            <Text>
              Por ter começado como uma plataforma SMS, o limite de 140 caracteres era obrigatório, pois era imposto, não pelo Twitter, mas pelas operadoras de celular.
            </Text> 
            <Text>
             No entanto, conforme foi crescendo e se tornando uma plataforma web, o limite foi mantido simplesmente porque se alinhava com a marca. O Twitter é uma plataforma que busca criar conteúdo super enxuto para adaptar-se ao mundo moderno, com muita tecnologia e déficit de atenção.
            </Text> 
            <Text>
            O Twitter cresceu exponencialmente nos últimos 10 anos. Seu objetivo é espalhar informações rapidamente. Embora essas informações nem sempre sejam sérias (como por exemplo, as opiniões da Kim Kardashian sobre maquiagem), às vezes são, como quando manifestantes iranianos usaram o Twitter (em inglês) para reunir-se para protestos.
            </Text> 

            <TouchableOpacity
              style={styles.button}
              onPress={handleHomeClick}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  caixas: {
    flex: 1,
    flexDirection: 'column',
  },
  nome: {
    flex: 1,
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 20
  },
  conteudo: {
    flex: 1,
    flexDirection: 'colomn',
    gap: 30,
    marginTop: -655,
  },
  button: {
    backgroundColor: '#4162b7',
    width: '100%',
    padding: 10,
    borderRadius: 2,
    marginBottom: 15,
    height: '7%',
    marginTop: 50
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 15,
  },
});
