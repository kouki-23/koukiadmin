import "./productList.css"
import { DataGrid, renderCell } from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material"
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data,setData] = useState(productRows);

    const handleDelete=(id) => {
        setData(data.filter((item) => item.id !==id));
        };

        const columns = [
            { field: 'id', headerName: 'ID', width: 90 },
            { field: 'username', headerName: 'Username', width: 200, renderCell:(params) => {
                return(
                    <div className="prodctListItem">
                        <img src={params.row.img}  alt="" className="productListImg" />
                        {params.row.name}
                    </div>
                )
            }},
            { field: 'stock', headerName: 'Stock', width: 200 },
            {
              field: 'status',
              headerName: 'Status',
              width: 120,
            },
            {
              field: 'price',
              headerName: 'Price',
              width: 160,
            },
            {
              field: 'action',
              headerName: 'Action',
              width: 150,
              renderCell : (params) => {
                return (
                <>
                    <Link to={"/product/"+params.row.id}>
                       <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={() =>handleDelete(params.row.id)} />
                </>
                );
              }
            },
            
          ];
     
          

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8},
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
