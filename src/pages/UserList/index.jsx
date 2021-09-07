import './style.css';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { userRows } from '../../dummyData';
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

export const UserList = () => {
  const classes = useStyles();
  const [data, setData] = useState(userRows);

  const handlerDelete = (id) => {
    setData(data.filter((item) => (
      item.id !== id
    )))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user',
      headerName: 'User',
      width: 175,
      renderCell: (params) => (
        <div className="user-list-user">
          <img className="user-list-img" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 150
    },
    {
      field: 'action',
      style: { outline: "none" },
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link style={{ 
            display: "flex",
            alignItems: "center"
          }} to={`/user/${params.row.id}`}>
            <EditOutlined className="user-list-edit"/>
          </Link>
          <DeleteOutline 
            className="user-list-delete" 
            onClick={() => handlerDelete(params.row.id)}
          />
        </>
      )
    }
  ];

  return (
    <div className="user-list">
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

