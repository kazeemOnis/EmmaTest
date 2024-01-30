import React from 'react';
import {useRoute} from '@react-navigation/native';
import styled from '../../theme';
import {Avatar, Content, Header} from '../../components';
import {Container, Div, colors} from '../../styles';
import {investors, team, banks, isNumber} from '../../utils';
import {ActivityIndicator} from 'react-native';

interface RouteParam {
  id: number;
  type: 'investor' | 'bank' | 'team';
}

const Wrapper = styled.ScrollView`
  flex: 1;
`;

const PageWrapper = styled.View`
  padding-horizontal: 20px;
  flex: 1;
`;

const EmptyText = styled.Text`
  font-family: 'Nunito';
  color: white;
  font-size: 24px;
  text-align: center;
`;

const AvatarWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-vertical: 16px;
`;

export const DetailScreen: React.FC = () => {
  const route = useRoute();
  const {id, type} = route.params as RouteParam;
  const [loading, setLoading] = React.useState(true);
  const [content, setContent] = React.useState<any>(null);

  React.useEffect(() => {
    setLoading(true);
    if (isNumber(id) && type) {
      switch (type) {
        case 'investor':
          setContent(investors.find(option => option.id === id));
          break;
        case 'bank':
          setContent(banks.find(option => option.id === id));
          break;
        case 'team':
          setContent(team.find(option => option.id === id));
          break;
        default:
          break;
      }
    }
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(loadingTimer);
  }, [id, type]);
  return (
    <Container>
      <PageWrapper>
        <Header />
        <Wrapper showsVerticalScrollIndicator={false}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.aqua} />
          ) : (
            <React.Fragment>
              {content !== null ? (
                <Div>
                  <AvatarWrapper>
                    <Avatar image={content.image} imageWidth={100} />
                  </AvatarWrapper>
                  <Content
                    title={content.title}
                    subtext={content.subtext}
                    content={content.content}
                  />
                </Div>
              ) : (
                <EmptyText>No detail found</EmptyText>
              )}
            </React.Fragment>
          )}
        </Wrapper>
      </PageWrapper>
    </Container>
  );
};
