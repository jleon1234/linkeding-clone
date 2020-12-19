import { Avatar } from '@material-ui/core';
import './Sidebar.css';

const Sidebar = () => {

    const recetItems = (topic) => (
        <div className="sidebar__recetItem">
            <span className="sidebar__hash">#</span>
            <p> {topic} </p>
        </div>
    )

    return ( 
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMGRlZ3JhZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h3>Juan Pablo</h3>
                <h4>jleon4811@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewd you</p>
                    <p className="sidebar__statNumber">2,546</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">1,546</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recetItems('Rect js')}
                {recetItems('programming')}
                {recetItems('softwareengineer ing')}
                {recetItems('design')}
                {recetItems('developer')}
            </div>
        </div>    
    );
}
 
export default Sidebar;