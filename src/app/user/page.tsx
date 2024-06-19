import React from "react";
import {Datagrid, EmailField, List, TextField} from "react-admin";

const UserList = () => {
    return (
        <List>
            <Datagrid　bulkActionButtons={false}>
                <TextField source="id"/>
                <TextField source="name"/>
                <EmailField
                    sx={{ mt: 2, mb: 1, display: 'block' }}
                    source="email"
                />
                <TextField source="phone"/>
                <TextField source="website"/>
            </Datagrid>
        </List>
    )
}

export default UserList