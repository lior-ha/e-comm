// withRouter is a higher order component. It is a function tahat takes a component and returns a modified one
// In this case it gives access to match, location and history from the Router component
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div 
                className="background-image"
                style={{
                    backgroundImage: `URL(${imageUrl})`
                }} 
            />

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);