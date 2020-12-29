import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../../components/menu-item/menu-item.component';

import selectDirectorSections from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({id, ...otherSectionProps}) => (
            // <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />    
            <MenuItem key={id} {...otherSectionProps} /> // Same as above
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorSections
})

export default connect(mapStateToProps)(Directory);