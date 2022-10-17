import { Grid, FormControl, TextField } from "@material-ui/core";

function AdressInfo({ userData, handleAddressOnChange }) {
  return (
    <form onSubmit={"handleSubmit"}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              value={userData.firstName}
              label="First Name"
              onChange={handleAddressOnChange}
              name="firstName"
              type="text"
              fullwidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl>
            <TextField
              autoFocus
              margin="dense"
              name="lastName"
              id="lastName"
              value={userData.lastName}
              label="Last Name"
              onChange={handleAddressOnChange}
              type="text"
              fullwidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="phnNumber"
              name="phnNumber"
              value={userData.phnNumber}
              label="Phn. Number"
              onChange={handleAddressOnChange}
              type="number"
              fullwidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="address"
              name="address"
              value={userData.address}
              label="Address"
              onChange={handleAddressOnChange}
              type="text"
              fullwidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="city"
              name="city"
              value={userData.city}
              label="City"
              onChange={handleAddressOnChange}
              type="text"
              fullwidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="state"
              name="state"
              value={userData.state}
              label="State"
              onChange={handleAddressOnChange}
              type="text"
              fullwidth
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

export default AdressInfo;
