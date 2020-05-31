import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Card, Col, Form } from 'react-bootstrap';
import { cloneDeep } from 'lodash';
import { fieldTypes, FieldTypesEnum } from '../../utils';

import { updateItem, addItem } from '../../store/actions'

const InventoryItem = ({ item, doItemUpdate, doItemAdd }) => {
    const itemClone = cloneDeep(item);
    const id = itemClone.id;

    const onPropChange = useCallback((obj, prop, value) => {
        obj[prop] = value.nativeEvent.target.value;
    }, []);

    const onItemChange = useCallback((obj) => {
        doItemUpdate(id, obj);
    }, [id, doItemUpdate]);

    return <Col xs={ 12 } sm={ 6 } md={ 3 }>
        <Card>
            <Card.Header className="px-3">
                <Card.Title className="mb-0">
                    <Form.Control
                        type="text"
                        placeholder="Enter Category Name"
                        defaultValue={itemClone.name}
                        onKeyUp={ (value) => onPropChange(itemClone, 'name', value)}
                        onBlur={onItemChange.bind(null, itemClone)}
                        />
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {
                    itemClone.fields.map((field, i) => {
                        const index = i + 1;
                        return (
                            <Form.Group controlId={field.id} key={index}>
                                <Form.Label>{`Field ${index}`}</Form.Label>
                            </Form.Group>
                        )
                    })
                }
            </Card.Body>
        </Card>
    </Col>
};

const mapDispatchToProps = (dispatch) => ({
    doItemUpdate: (id, category) => dispatch(updateItem(id, category)),
    doItemAdd: (id, category) => dispatch(addItem(id, category)),
})
export default connect(null, mapDispatchToProps)(InventoryItem);
