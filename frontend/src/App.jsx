import {
  Router,
  Middleware,
  Route,
  Welcome,
  Notfound,
  Login,
  Register,
  Dashboard,
  Liked,
  Album,
  Detail,
  PostFoto,
  EditFoto,
  Profile,
  useState,
  UserFunction,
  useEffect,
  DataContext,
} from "./export";

function App() {
  const [user, setUser] = useState();
  const userFunction = new UserFunction(user, setUser);

  const globalVariabel = {
    user,
    setUser,
    userFunction,
    checkMsg: userFunction.checkMsg,
  };

  useEffect(() => {
    userFunction.get();
  }, []);
  return (
    <Router>
      <DataContext.Provider value={globalVariabel}>
        <Middleware next={user == undefined}>
          <Route path="*" element={<Notfound />} />
        </Middleware>

        <Middleware next={user == false}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Middleware>

        <Middleware next={user}>
          <Route path="/posting" element={<PostFoto />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/detail/:slug" element={<Detail />} />
          <Route path="/edit/:slug" element={<EditFoto />} />
          <Route path="/album/:slug" element={<Album />} />
          <Route path="/like" element={<Liked />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Middleware>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
