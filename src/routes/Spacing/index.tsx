import React, { Component } from 'react';
import { View, Text, Alert, SafeAreaView } from 'react-native';
import Layout, { Container } from '../../Layout';
import { Modal, Button, Loader, List, Icon, Spacing } from '../../../components';
import { ComProps } from '../../typings';
const { Header, Body, Card, Footer } = Layout;

export interface ModalViewProps extends ComProps { }

export default class ModalView extends Component<ModalViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <Button>按钮之间的间距</Button>
              <Spacing />
              <Button type="primary">按钮之间的间距</Button>
              <Spacing />
              <Button type="danger">按钮之间的间距</Button>
            </Card>
            <Card title="横向间距 type?: 'horizontal' | 'vertical'">
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
                <Button>按钮之间的间距</Button>
                <Spacing type="horizontal" />
                <Button>间距</Button>
                <Spacing type="horizontal" />
                <Button>间距</Button>
              </View>
            </Card>
            <Card title="间距大小 size?: 'small' | 'default' | 'large'">
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
                <Button>间距</Button>
                <Spacing type="horizontal" size="large" />
                <Button>间距</Button>
                <Spacing type="horizontal" />
                <Button>间距</Button>
                <Spacing type="horizontal" size="small" />
                <Button>间距</Button>
              </View>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}