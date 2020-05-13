import React, {Component} from 'react';
import {TableOutlined, SecurityScanOutlined, HomeOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined, VideoCameraAddOutlined} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import {useHistory} from 'react-router'
import 'antd/dist/antd.css';
import './Slide.css';


const SideNavigation = () => {

    const history = useHistory();

    const handleHomeClick = () =>{
        history.push('./home')
    }

    const handleUserClick = () =>{
        history.push('./list')
    }

    const handleGameClick = () =>{
        history.push('/game')
    }

    const handleDragClick = () =>{
        history.push('/drag')
    }

    const handleVideosClick = () =>{
        history.push('/videos')
    }

    const handleTableClick = () =>{
        history.push('/table')
    }

    return(
            <div>
                <div className="content">
                <Menu 
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"
                    onClick={handleHomeClick}>
                        <HomeOutlined/>
                        <span>Home</span>
                    </Menu.Item>
                    <Menu.Item key="2"
                    onClick={handleUserClick}>
                        <UserOutlined/>
                        <span>Users</span>
                    </Menu.Item>
                    <Menu.Item key="3"
                    onClick={handleGameClick}>
                        <SecurityScanOutlined/>
                        <span>Games</span>
                    </Menu.Item>
                    <Menu.Item key="4"
                    onClick={handleDragClick}>
                        <UploadOutlined/>
                        <span>Files</span>
                    </Menu.Item>
                    <Menu.Item key="5"
                    onClick={handleVideosClick}>
                        <VideoCameraAddOutlined/>
                        <span>Videos</span>
                    </Menu.Item>
                    <Menu.Item key="6"
                    onClick={handleTableClick}>
                        <TableOutlined/>
                        <span>Videos</span>
                    </Menu.Item>
                </Menu>
                </div>
            </div>
    );
}

export default SideNavigation;




// import React, {Component} from 'react';
// import {UserOutlined, VideoCameraAddOutlined} from '@ant-design/icons';
// import Icon from '@ant-design/icons';
// import { Layout, Menu } from 'antd';
// import 'antd/dist/antd.css';
// import './Slide.css';


// export default class SideNavigation extends Component{
//     constructor(props){
//         super(props);
//         this.wrapperRef = React.createRef();
//     }

//     handleClick(){
//         const wrapper = this.wrapperRef.current;
//         wrapper.classList.toggle('is-nav-open')
//     }

//     render(){
//         return(
//             <div>
//             <h1>Welcome</h1>
//             <div ref={this.wrapperRef} className="wrappe">
//                 <div className="nav">
//                     <Icon
//                     className="nav__icon"
//                     type="menu-fold"
//                     onClick={() => this.handleClick()}/>
//                     <Layout/>
//                     <div>
//                         <button className="btn btn-primary">Home</button><br/>
//                         <button className="btn btn-primary">Drag</button>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         );
//     }
// }


