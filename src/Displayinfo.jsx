import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import "./Displayinfo.css"
export default function Displayinfo({info}){
    const URL="https://plus.unsplash.com/premium_photo-1667662786108-8fe72198def2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM="
    const COLD_URL="https://images.unsplash.com/photo-1529017342279-ca5eb1c54bf7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return<>
    <div className="InfoBox">
        <div className='cardcontainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <div className='weather'>
      <b style={{color:"Black"}}>{info.city}</b> &nbsp; &nbsp;{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnySharpIcon/>:<AcUnitIcon/>}
      </div>
        <Typography gutterBottom variant="h6" component="div">
        Weather Info -{info.condition}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <div className='details'>
             humidity={info.humidity}&deg;C<br></br>
             Temperature={info.temp}&deg;C<br></br>
            The Weather as described as {info.condition} <br></br>
            Feels like as{info.feelslike}&deg;C<br></br>
            Max&Min Temperature={info.tempmax},{info.tempmin}&deg;C
            </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
}