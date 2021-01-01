// withRouter is a higher order component. It is a function tahat takes a component and returns a modified one
// In this case it gives access to match, location and history from the Router component
import { withRouter } from 'react-router-dom';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer 
                style={{
                    backgroundImage: `URL(${imageUrl})`
                }} 
            />

            <ContentContainer>
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);