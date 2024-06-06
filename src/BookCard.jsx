import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const BookCard = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "20px" }} elevation={2}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${process.env.REACT_APP_API_URL}${book.bookCoverPath}`}
        title={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {book.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
