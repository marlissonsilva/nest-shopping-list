import './App.css';
import { Menu, Layout } from 'antd'
import Routes from './routes'
import { useHistory, } from 'react-router-dom'
import { PlusOutlined, UnorderedListOutlined, HomeOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;



function App() {
  let history = useHistory();

  function handleClick() {
    history.push("/adicionar")
  }
  return (
    <div className="main">
      <Layout className='main__content'>
        <Sider className='menu'>
          <Menu className='menu__section'>
            <Menu.Item key={1} icon={<HomeOutlined />} onClick={() => history.push('/')}>
              Home
            </Menu.Item>
            <Menu.Item key={2} icon={<PlusOutlined />} onClick={handleClick}>
              Adicionar Produto
            </Menu.Item>
            <Menu.Item key={3} icon={<UnorderedListOutlined />} onClick={() => history.push('/produtos')}>
              Listar Produtos
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className='header'>
            Lista de Compras
          </Header>
          <Content className='content'>
            <Routes />
          </Content>
          <Footer className='footer'>Todos os diretos reservados</Footer>
        </Layout>

      </Layout>
    </div>
  );
}

export default App;
