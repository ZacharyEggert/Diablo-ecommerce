import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import ItemAPI from '../api/item';
import TopBar from '../components/TopBar';

const ItemView = () => {

    const { id } = useParams();

    const [editMode, setEditMode] = React.useState(false);

    useEffect(() => {
        console.log('ItemView: ' + id );
        ItemAPI.getOne(id).then(res => {
            console.dir(res.data);
        }).catch(err => {
            console.error(err);
        });
    }, [id]);

    const saveItem = () => {
        console.log('saveItem');
        setEditMode(false);
    }

    return (
        <div>
            <TopBar screen='ItemView' editMode={editMode} setEditMode={setEditMode} saveItem={saveItem} />
            <h1>ItemView</h1>
        </div>
    );
};

export default ItemView;
