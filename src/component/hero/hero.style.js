import { makeStyles } from "@material-ui/core";
import {CatWomanHero} from "../../constants/images";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundImage: `url(${CatWomanHero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',  
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))
