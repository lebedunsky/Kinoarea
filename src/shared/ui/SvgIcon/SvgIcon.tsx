import { icons } from "./constants";
import { Alert } from "./icons/Alert";
import { AngleBracket } from "./icons/AngleBracket";
import { Arrow } from "./icons/Arrow";
import { AvatarMale } from "./icons/AvatarMale";
import { Camera } from "./icons/Camera";
import { Chat } from "./icons/Chat";
import { Check } from "./icons/Check";
import { CollapseIconUI } from "./icons/CollapseIcon";
import { Dagger } from "./icons/Dagger";
import { Facebook } from "./icons/Facebook";
import { Filters } from "./icons/Filters";
import { GitHub } from "./icons/GitHub";
import { Google } from "./icons/Google";
import { Heart } from "./icons/Heart";
import { Instagram } from "./icons/Instagram";
import { LightLogotype } from "./icons/LightLogotype";
import { Like } from "./icons/Like";
import { Link } from "./icons/Link";
import { Logotype } from "./icons/Logotype";
import { NextArrow } from "./icons/NextArrow";
import { Play } from "./icons/Play";
import { Poster } from "./icons/Poster";
import { PrevArrow } from "./icons/PrevArrow";
import { Robot } from "./icons/Robot";
import { SearchIcon } from "./icons/Search";
import { SendMessage } from "./icons/SendMessage";
import { Twitter } from "./icons/Twitter";
import { YouTube } from "./icons/YouTube";
import type { SvgIconPropsType } from "./types";

export const SvgIcon = ({ icon, className, onClick, color }: SvgIconPropsType) => {
  const svgs = {
    [icons.arrow]: Arrow,
    [icons.collapseIcon]: CollapseIconUI,
    [icons.dagger]: Dagger,
    [icons.facebook]: Facebook,
    [icons.github]: GitHub,
    [icons.google]: Google,
    [icons.logotype]: Logotype,
    [icons.search]: SearchIcon,
    [icons.twitter]: Twitter,
    [icons.avatarMale]: AvatarMale,
    [icons.check]: Check,
    [icons.like]: Like,
    [icons.play]: Play,
    [icons.instagram]: Instagram,
    [icons.youtube]: YouTube,
    [icons.nextArrow]: NextArrow,
    [icons.prevArrow]: PrevArrow,
    [icons.angleBracket]: AngleBracket,
    [icons.heart]: Heart,
    [icons.camera]: Camera,
    [icons.lightLogotype]: LightLogotype,
    [icons.link]: Link,
    [icons.alert]: Alert,
    [icons.poster]: Poster,
    [icons.filters]: Filters,
    [icons.chat]: Chat,
    [icons.robot]: Robot,
    [icons.sendMessage]: SendMessage,
  };

  const IconJSX = svgs[icon];

  if (!IconJSX) return null;

  return <IconJSX className={className} onClick={onClick} color={color} />;
};
