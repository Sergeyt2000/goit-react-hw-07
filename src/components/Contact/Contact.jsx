import css from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contact}>
        <div className={css.contactInfo}>
          <RiContactsFill />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.contactInfo}>
          <MdPhone />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.delbtn}
        type="button"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </>
  );
}
