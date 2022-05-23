import React from 'react';
import { FcCancel } from 'react-icons/fc';
import { MdOutlinePayment } from 'react-icons/md';
const MyOrderTable = ({product,index}) => {
    const{price,productName,orderedQuantity}=product
    return (
        <tr>
            <th>{index+1}</th>
            <td>{productName.slice(0,25)}</td>
            <td>{orderedQuantity}</td>
            <td>$ {price}</td>
            <td><button class="btn btn-sm  text-2xl">< FcCancel/></button></td>
            <td><button class="btn btn-sm text-2xl "><MdOutlinePayment /> </button></td>
        </tr>
    );
};

export default MyOrderTable;