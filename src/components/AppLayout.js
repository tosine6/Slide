import React, {useState, useEffect} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import './Slide.css';
import SideNavigation from './SideNavigation';



import {Switch, Route,BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';
import Game from './Game';
import List from './List';
import SideNav from './SideNav';
import DragAndDrop from './DragAndDrop';
import DragAndDrop1 from './DragAndDrop1';
import FileList from './FileList';
import Videos from './Videos';
import NotFoundPage from './NotFoundPage';
import Chat from './Chat';
import ObjectList from './ObjectList';
import FormApp from './Form';


const {Header, Sider, Content, Footer} = Layout;


const AppLayout = () => {
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
    }, [])

    const handleToggle = (event) =>
    {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
        
    }

    return(
        <Router>
        <Layout>
            <Sider trigger={null}
            collapsible collapsed={collapse}>
                <SideNavigation/>
            </Sider>
            <Layout>
                <Header
                className="siteLayoutBackground"
                style={{padding: 0, background: '#001529'}}>
                    {React.createElement(collapse? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: handleToggle,
                        style: {color: "#fff"}
                    })}
                </Header>
                <Content style={{margin: '24px 16px', padding: '24px', minHeight: "calc(100vh - 114px)", background: "#fff"}}>
                <Switch>
                    <Route exact path="/" component={FormApp}/>
                    <Route exact path="/table" component={ObjectList}/>
                    <Route exact path="/videos" component={Videos}/>
                    <Route exact path="/chat" component={Chat}/>
                    <Route exact path="/sidenav" component={SideNavigation}/>
                    <Route exact path="/file" component={FileList}/>
                    <Route exact path="/drag1" component={DragAndDrop1}/>
                    <Route exact path="/drag" component={DragAndDrop}/>
                    <Route exact path="/chat1" component={Chat}/>
                    <Route exact path="/chat" component={SideNav}/>
                    <Route exact path="/list" component={List}/>
                    <Route exact path="/game" component={Game}/>
                    <Route exact path="/welcome" component={Welcome}/>
                    <Route exact path="/home" component={Home}/>
                </Switch>
                </Content>
                <Footer
                className="siteLayoutBackground"
                style={{padding: 0, background: '#001529'}}>
                </Footer>
            </Layout>
        </Layout>
        </Router>
    );
}

export default AppLayout;