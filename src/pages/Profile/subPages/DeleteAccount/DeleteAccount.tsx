import { useAppDispatch } from "../../../../hooks/hooks";
import { deleteUser } from "../../../../store/actions/auth-actions";
import "./DeleteAccount.scss";

const DeleteAccount = () => {
  const dispatch = useAppDispatch();

  const deleteClickHandler = () => {
    dispatch(deleteUser());
  };

  return (
    <div className="delete-account-container ">
      <h3>Deleting your account is permanent!</h3>
      <h2>Whould you like to proceed?</h2>
      <button onClick={deleteClickHandler}>Delete</button>
    </div>
  );
};

export default DeleteAccount;
