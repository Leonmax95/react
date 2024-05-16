import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <p>{greeting}</p>
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
};

export default ItemListContainer;