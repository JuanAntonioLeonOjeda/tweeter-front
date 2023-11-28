import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import './TweetCard.css'

export default function BasicCard({ data }) {
  return (
    <Card className="tweet-container" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { data.title }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          { data.body }
        </Typography>
      </CardContent>
      <CardActions className="likes-container">
        <FavoriteIcon className="heart-icon" />
        { data.likes }
        {/* <Button size="small">butotn</Button> */}
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  data: PropTypes.object
}
