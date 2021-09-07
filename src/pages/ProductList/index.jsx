import './style.css'
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { productRows } from '../../dummyData';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const useStyles = makeStyles({
  root: {
      '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
          outline: 'none',
      },
  }
});

export const ProductList = () => {
  const classes = useStyles();
  const [data, setData] = useState(productRows);

  const handlerDelete = (id) => {
    setData(data.filter((item) => (
      item.id !== id
    )))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'product',
      headerName: 'Product',
      width: 280,
      renderCell: (params) => (
        <div className="product-list-user">
          <img className="product-list-img" src={params.row.img} alt="" />
          {params.row.name}
        </div>
      )
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 160,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 180
    },
    {
      field: 'action',
      style: { outline: "none" },
      headerName: 'Action',
      width: 170,
      renderCell: (params) => (
        <>
          <Link style={{ 
            display: "flex",
            alignItems: "center"
          }} to={`/product/${params.row.id}`}>
            <EditOutlined className="product-list-edit"/>
          </Link>
          <DeleteOutline 
            className="product-list-delete" 
            onClick={() => handlerDelete(params.row.id)}
          />
        </>
      )
    }
  ];

  return (
    <div className="products">
      <DataGrid
        className={classes.root}
        rows={data}
        columns={columns}
        pageSize={9}
        disableSelectionOnClick
      />
    </div>
  )
}

