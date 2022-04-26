import './App.css';
import { Menu, MenuProps } from 'antd'

import Routes from './routes'
import { Router, useHistory } from 'react-router-dom'
import { PlusOutlined, UnorderedListOutlined, HomeOutlined } from '@ant-design/icons';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  const history = useHistory()
  return (
    <div className="main">
      <Layout className='main__content'>
        <Header className='header'>Lista de Compras</Header>
        <Layout>
          <Sider className='menu'>
            <Menu className='menu__section'>
              <Menu.Item key={1} icon={<HomeOutlined />}>
                <a href="/" rel="">
                  Home
                </a>
              </Menu.Item>
              <Menu.Item key={2} icon={<PlusOutlined />}>
                <a href="/adicionar" rel="">
                  Adicionar Produto
                </a>
              </Menu.Item>
              <Menu.Item key={3} icon={<UnorderedListOutlined />}>
                <a href="/produtos" rel="">
                  Listar Produtos
                </a>

              </Menu.Item>
            </Menu>
          </Sider>
          <Content className='content'>
            <Routes />
          </Content>
        </Layout>
        <Footer className='footer'>Todos os diretos reservados</Footer>
      </Layout>
    </div>
  );
}

export default App;
