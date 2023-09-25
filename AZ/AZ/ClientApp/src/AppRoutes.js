import { Counter } from "./components/Counter";
import CreateNew from "./components/CreateNew";
import { FetchData } from "./components/FetchData";
import { History } from "./components/History";
import { Home } from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/dang-ky',
    element: <Signup />
  },
  {
    path: '/dang-nhap',
    element: <Signin />
  },
  {
    path: '/danh-sach-san',
    element: <Home />
  },
  {
    path: '/tao-moi-san',
    element: <CreateNew />
  },
  {
    path: '/lich-su',
    element: <History />
  },
];

export default AppRoutes;
