import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { red, blue, green, yellow } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import { updateFeed } from "../redux/actionCreators";
import { Div } from "./Style";
import Dialog from "./Dialog";
const useStyles = makeStyles((theme) => ({
  title: { fontFamily: "Montserrat", fontSize: 20 },
  cover: {
    maxWidth: 400,
    backgroundPosition: "center",
    padding: "15px 10px",
    margin: "6px 0",
    overflow: "unset !important",
  },
  wrapper: {
    maxWidth: 400,
  },
  container: {},
  button: {},
}));
function HomePage(props) {
  const {
    initiateUpdateFeed,
    store: { addNewFeedRes },
  } = props;
  const [state, setState] = useState({
    toggleDialog: false,
    compData: {},
    anchorEl: "",
  });
  const { toggleDialog, compData, anchorEl } = state;
  const colors = [red, blue, green, yellow];
  const colorVariant = [100, 200, 300, 400, 500, 450, 600];
  const classes = useStyles();
  function updateState(fieldKey, value) {
    setState((prevState) => {
      return { ...prevState, [fieldKey]: value };
    });
  }
  function handleConfirm(updatedFeed) {
    initiateUpdateFeed(updatedFeed);
    updateState("anchorEl", "");
    updateState("toggleDialog", false);
    updateState("compData", {});
  }
  function handleClose() {
    updateState("anchorEl", "");
    updateState("toggleDialog", false);
    updateState("compData", {});
  }
  return (
    <Div>
      {addNewFeedRes.map((feed) => {
        const randColor = colors[Math.floor(Math.random() * colors.length)];
        const variantColor =
          randColor[
            colorVariant[Math.floor(Math.random() * colorVariant.length)]
          ];
        const upDate = new Date(feed.updatedAt);
        const today = new Date();
        const timeStamp = `${
          upDate === today ? today.toDateString() : upDate.toLocaleTimeString()
        } `;
        return (
          <Card sx={{ maxWidth: 345 }} className={classes.cover}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: variantColor }} aria-label="recipe">
                  {feed.title.substring(0, 1).toUpperCase()}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon
                    onClick={(e) => {
                      updateState("compData", feed);
                      updateState("anchorEl", e.currentTarget);
                    }}
                  />
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={anchorEl !== ""}
                    onClose={() => updateState("anchorEl", "")}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={() => updateState("toggleDialog", true)}>
                      <EditIcon />
                      Update Feed
                    </MenuItem>
                  </Menu>
                </IconButton>
              }
              title={feed.title}
              subheader={timeStamp}
            />
            {feed.imgUrl && (
              <CardMedia
                component="img"
                height="190"
                image={feed.imgUrl}
                alt="image"
              />
            )}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {feed.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip title="Add to Favorites">
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        );
      })}
      <Dialog
        open={toggleDialog}
        compData={compData}
        handleConfirm={handleConfirm}
        handleClose={handleClose}
      />
    </Div>
  );
}

const mapStateToProps = ({ reducer }) => ({
  store: reducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    initiateUpdateFeed: (payload) => dispatch(updateFeed(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
