import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserInfo from './MyAccountComponent';
import { useMutation } from '@apollo/client';
import { LOGOUT_MUTATION } from '../../api/LogoutLink';
import { useState, Fragment } from 'react';


const UserMenu = (props) => {
  const anchorEl = props.anchorEl;
  const handleClose = props.handleClose;
  const refetch = props.refetch;
  const [LogoutLink] = useMutation(LOGOUT_MUTATION)
  const [userInfoDialogOpen, setUserInfoDialogOpen] = useState(false);


  const logOut = async () => {
    await LogoutLink()
      .then(async (res) => {
        localStorage.removeItem('userName');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('phnNumber');
        await refetch();
        handleClose();
      })
      localStorage.removeItem("cartList");
  }


  return (
    <Fragment>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          handleClose();
          setUserInfoDialogOpen(true)
        }
        }>My account</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
      <UserInfo open={userInfoDialogOpen} setOpen={setUserInfoDialogOpen} />
    </Fragment>
  );
}

export default UserMenu;