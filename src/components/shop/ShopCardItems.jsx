import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const useBodyBoxStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d0cccc",
    height: "100%",
  },
}));

const useStyles = makeStyles(theme => ({
    gridGap: {
        margin: "10px",
        backgroundColor: "#d0cccc",
        cursor: "pointer"
    }
}))

const ShopItems = (props) => {
  const product = props.product;
  const history = useHistory();
  const classBodyBox = useBodyBoxStyles();
  const classes = useStyles();
  const viewType = props.viewType;
  const colums = {
    mobile: 2,
    tablet: 3,
    laptop: 4,
    pc: 5,
  };
  const handleClick = (productId) => {
    history.push(`/${productId}`);
  };
  return (
    <Container disableGutters style={{ height: "100%" }}>
      <Box component={Paper} elevation={4} classes={classBodyBox} p={3} pt={6}>
        <GridList cellHeight={180} cols={colums[viewType]} spacing={10}>
          <GridListTile
            key="Subheader"
            cols={colums[viewType]}
            style={{ height: "auto", marginBottom: "24px" }}
          >
            <ListSubheader component="div">
              <Box display="flex" justifyContent={"center"}>
                <Typography
                  variant={"h4"}
                  component={"div"}
                  style={{
                    fontFamily: "'Old Growth',Arial,sans-serif",
                  }}
                >
                  {"Shop".toLowerCase()}
                </Typography>
              </Box>
            </ListSubheader>
          </GridListTile>
          {product.map((tile) => (
            <GridListTile
              component={Paper}
              key={tile.id}
              elevation={5}
              cols={1}
              className={classes.gridGap}
              onClick={() => handleClick(tile.id)}
            >
              <img src={tile.src} alt={tile.title} />
              <GridListTileBar
                title={tile.name}
                subtitle={<span>${tile.price}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Container>
  );
};

export default ShopItems;
