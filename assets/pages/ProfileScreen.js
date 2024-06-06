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

  const handleProfileClick = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.caixas}>
          <View style={styles.nome}>
            Enquete aborda papel do Twitter como ferramenta de divulgação
            científica.
          </View>
          <View style={styles.datas}>11:59 - 15/06/2010</View>
          <View style={styles.conteudo}>
            <Text>
              Que o Twitter é a sensação do momento, não há como negar! De
              jornalistas a políticos, todos querem se integrar a nova forma de
              comunicação por meio da rede mundial de computadores. Um dos
              pontos positivos das redes sociais como o Twitter, uma espécie de
              micro blog que limita o envio de informações, por meio de até 140
              caracteres, é a rapidez com que as informações são propagadas.
            </Text>
            <Text>
              Criado em 2006 por Jack Dorsey, o Twitter (pronuncia-se "tuíter")
              ganhou extensa notabilidade e popularidade por usuários de todo
              mundo. A ferramenta é uma rede social e servidor para microblog
              que permite aos usuários eviar e receber pequenos textos pessoais
              e de outros usuários (em textos de até 140 caracteres, os chamados
              "tweets"),por meio de computadores ou Celular conectado ao website
              do serviço.
            </Text>
            <Text>
              As atualizações são exibidas no perfil de um usuário em tempo real
              e também enviadas a outros usuários seguidores que tenham assinado
              para recebê-las, tudo de forma gratuita.
            </Text> 
            <Text>
              Investigamos o planejamento e os propósitos de uso de materiais de
              divulgação científica em situações formais de ensino. Para tanto, o
              estudo contou com a análise de quatrocentas sequências didáticas 
              produzidas por professores de Ciências em um curso de especialização
              oferecido aos professores da rede estadual de ensino de São Paulo. 
              Trata-se, portanto, de um trabalho de abordagem quali-quantitativa. 
              As análises apontaram oito propósitos distintos de uso da divulgação 
              científica em sala de aula e delinearam, ainda, as ferramentas comunicativas 
              que compõem os suportes de divulgação científica mais utilizados pelos professores.
            </Text>
            <Text>
              Atualmente a Divulgação Científica (DC) tem destaque no contexto da inclusão científica e tecnológica, de modo que é possível encontrar muitas atividades, sejam realizadas em espaços de educação formal e não-formal, ou ainda aquelas no âmbito da comunicação social realizadas pelos veículos de comunicação.
            </Text>
            <Text>
              Com a possibilidade da conexão via aparelho celular o Twitter permite
              que informações e fotos sejam repassadas, tornando-se essencial  em
              caso de socorro a feridos, organização de equipe de resgates e até
              para disseminar notícias que circulam no mundo real e na rede mundial
              de computadores.
            </Text>
          </View>
          <View style={styles.botoes}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleProfileClick}>
              <Text style={styles.buttonText}>Entrar</Text>
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
  datas: {
    marginTop: 40,
    position: 'absolute',
    fontSize: 12,
    color: '#CCCCCC',
  },
  caixas: {
    flex: 1,
    flexDirection: 'column',
  },
  nome: {
    flex: 1,
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  conteudo: {
    flex: 1,
    flexDirection: 'colomn',
    gap: 30,
    marginTop: -485,
  },
  botoes: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#4162b7',
    width: '100%',
    padding: 10,
    borderRadius: 2,
    marginBottom: 15,
    height: '9%',
    marginTop: 530
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 15,
  },
});
