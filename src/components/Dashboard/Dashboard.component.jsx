import React from "react";
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import CardComponent from '../InventoryItem/InventoryItem.component';

const DashboardComponent = ({ inventory = [] }) => {
    const inventoryMap = inventory.map((item, i) => <CardComponent key={ item.id } category={item} />);
    return <Row>
        { inventoryMap }
        <Col>
            <Button onClick={ () => {
            } }>Add New</Button>
        </Col>
    </Row>
}

const mapStateToProps = state => {
    return {
        inventory: state.inventoryReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)