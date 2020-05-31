import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import InventoryItem from './InventoryItem/InventoryItem.component';
import { usePrevious } from '../../utils'

const InventoryList = ({ inventory = [] }) => {
    const { categoryId } = useParams();
    const [newitem, setNewitem] = useState(null);
    const oldInventory = usePrevious([...inventory])
    useEffect(() => {
        if (newitem && inventory.length > oldInventory.length) {
            setNewitem(null);
        }
    }, [newitem, inventory, oldInventory]);
    const inventoryMap = inventory.filter((item) => (
        !categoryId || item.category === categoryId
    )).map((item, i) => <InventoryItem key={ item.id } item={item} />);
    return <Row>
        { inventoryMap }
        {
            newitem &&
            <InventoryItem isNew={newitem} item={newitem} />
        }
        <Col>
            <Button onClick={ () => {
                setNewitem({ name: '', category: null, fields: {} });
            } }>Add New Item</Button>
        </Col>
    </Row>
}

const mapStateToProps = state => {
    return {
        inventory: state.inventoryReducer
    }
}
  

export default connect(mapStateToProps)(InventoryList)