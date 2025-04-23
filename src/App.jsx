import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contactsSlice";
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
      {loading && <div>Loading....</div>}
      {error && <div>{error}</div>}
    </>
  );
}

export default App;
