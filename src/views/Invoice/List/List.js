import React from "react";
import "./List.css";
const List = () => {
  return (
    <div className="tableContainer">
      <table className="table mt-5 mx-auto">
        <tr>
          <th><input type="checkbox"></input>  No</th>
          <th>Item Name</th>
          <th className="text-end">Storage Location</th>
          <th className="text-end">Quantity</th>
          <th className="text-end">Rate</th>
          <th className="text-end">Total Amount</th>
          <th className="text-end"></th>
        </tr>
        <tr>
          <td> <input type="checkbox"></input> 1</td>
          <td>Dano Full Cream Milk</td>
          <td className="text-end">Warehouse</td>
          <td className="text-end">15pcs</td>
          <td className="text-end">250.00</td>
          <td className="text-end">3750.00</td>
          <td className="text-end">Edit</td>
        </tr>
        <tr>
          <td> <input type="checkbox"></input>  2</td>
          <td>Dano Full Cream Milk</td>
          <td className="text-end">Warehouse</td>
          <td className="text-end">15pcs</td>
          <td className="text-end">250.00</td>
          <td className="text-end">3750.00</td>
          <td className="text-end">Edit</td>
        </tr>
        <tr>
          <td> <input type="checkbox"></input>  3</td>
          <td>Dano Full Cream Milk</td>
          <td className="text-end">Warehouse</td>
          <td className="text-end">15pcs</td>
          <td className="text-end">250.00</td>
          <td className="text-end">3750.00</td>
          <td className="text-end">Edit</td>
        </tr>
      </table>
    </div>
  );
};

export default List;
