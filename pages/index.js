import styled from 'styled-components';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';



const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  display: flex;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {/* Primeiro box */}
        <Widget>
          <Widget.Header>
            <h1>Olhaaaaa o Macaaaaco</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        {/* Segundo box */}
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl/>
    </QuizBackground>
  );
}