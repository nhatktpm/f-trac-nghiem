import React from 'react';
import { useEffect } from 'react';
import listTestApi from '../../../api/listTestApi';


function ListTest(props) {

    useEffect(() => {
        const getListTest = async () => {
            const listTeatPart1 = await listTestApi.getAll();
            console.log(listTeatPart1.data)
        }
        getListTest();
    }, []);


    return (
        <div>
            goi api
        </div>
    );
}

export default ListTest;