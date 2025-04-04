import Card from "./components/Card";
import AddPlacePopup from "./components/AddPlacePopup";
import ImagePopup from "./components/ImagePopup";
import api from "./utils/api";

// Импорт стилей
import "./styles/card/card.css";
import "./styles/card/__delete-button/card__delete-button.css";
import "./styles/card/__description/card__description.css";
import "./styles/card/__image/card__image.css";
import "./styles/card/__like-button/card__like-button.css";
import "./styles/card/__like-count/card__like-count.css";
import "./styles/card/__title/card__title.css";
import "./styles/places/places.css";
import "./styles/places/__item/places__item.css";
import "./styles/places/__list/places__list.css";

// Экспорт компонентов для внешнего использования
export { Card, AddPlacePopup, ImagePopup, api };
