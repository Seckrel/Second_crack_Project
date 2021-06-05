import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useMutation } from '@apollo/client';
import { LOGOUT_MUTATION } from '../api/LogoutLink';


const UserMenu = (props) => {
  const anchorEl = props.anchorEl;
  const handleClose = props.handleClose;
  const refetch = props.refetch;
  const [LogoutLink, { data, error }] = useMutation(LOGOUT_MUTATION)


  const logOut = async () => {
    await LogoutLink()
      .then(async (res) => {
        await refetch();
        handleClose();
        // window.location.reload(true)
      })
  }

  if (error) return (<div>{error.message}</div>);

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={logOut}>Logout</MenuItem>
    </Menu>
  );
}

export default UserMenu;