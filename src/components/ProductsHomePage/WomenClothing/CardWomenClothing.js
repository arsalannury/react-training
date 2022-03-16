import {Typography,Button,CardMedia,CardContent,CardActions,Card,Rating} from '@mui/material'

function CardWomenClothing({image,rate,price}) {
  return (
    <>
     <Card sx={{ maxWidth: 345 , minWidth: 345}}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        loading="lazy"
        alt="product"
        sx={{objectFit: 'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Rating name="half-rating-read" defaultValue={rate}  readOnly />
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily:'unset',fontSize: '.7em'}}>
          این محصول در دسته بندی پر فروش های زمستان قرار دارد
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{fontFamily: 'unset'}}>مشاهده محصول</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default CardWomenClothing