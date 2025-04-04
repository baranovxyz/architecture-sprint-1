import Login from "./components/Login";
import Register from "./components/Register";
import InfoTooltip from "./components/InfoTooltip";
import ProtectedRoute from "./components/ProtectedRoute";
import * as auth from "./utils/auth";

// Импорт стилей
import "./styles/auth-form/auth-form.css";
import "./styles/auth-form/__button/auth-form__button.css";
import "./styles/auth-form/__form/auth-form__form.css";
import "./styles/auth-form/__input/auth-form__input.css";
import "./styles/auth-form/__link/auth-form__link.css";
import "./styles/auth-form/__text/auth-form__text.css";
import "./styles/auth-form/__textfield/auth-form__textfield.css";
import "./styles/auth-form/__title/auth-form__title.css";

// Экспорт компонентов для внешнего использования
export { Login, Register, InfoTooltip, ProtectedRoute, auth };
