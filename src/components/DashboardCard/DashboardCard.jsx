import PropTypes from 'prop-types'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import './DashboardCard.css'

export default function OutlinedCard({ info, likes, changeLikes }) {

  const isLiked = () => {
    return likes.includes(info.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />
  }

  const handleClick = () => {
    changeLikes((prev) => likes.includes(info.id) ? prev.filter(i => i !== info.id) : [...prev, info.id]);
  }

  return (
    <Box sx={{ minWidth: 275 }} className="tweet-dashboard">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {info.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {info.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            { isLiked() }
          </Button>
          {info.userId}
        </CardActions>
      </Card>
    </Box>
  );
}

OutlinedCard.propTypes = {
  info: PropTypes.object,
  likes: PropTypes.array,
  changeLikes: PropTypes.func
}
