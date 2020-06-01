import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview}  from '../../redux/shop/shop.selectors';
import './collection-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionsOverview = ({collections}) =>(

    <div className='collections-overview'>

    {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}

    </div>
)


const mapstateToProps = createStructuredSelector ({
  
    collections: selectCollectionsForPreview
})


export default connect(mapstateToProps)(CollectionsOverview);