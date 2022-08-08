import React from 'react';

const UserSelectedList = (props) => {
    const {selectedListCallback} = props
    const listHanler = () =>{
        selectedListCallback(id)
    }
    return (
        <div onChange={listHanler}>Selected Users
            
        </div>
    );
}

export default UserSelectedList;
