import './sendSuccess.scss';

export default function SendSuccess({ setSend }: { setSend: React.Dispatch<React.SetStateAction<boolean>> }) {
  const closeWindow = () => {
    setSend(false);
  };

  return (
    <aside className="success">
      <div onClick={ closeWindow } className="success__overlay"></div>
      <div className="success__message-container">
        <p className="success__mewssage">Thanks for writing to me.</p>
        <p className="success__mewssage">I’m always glad to get messages from you.</p>
        <button onClick={ closeWindow } className="success__btn-close">Close</button>
      </div>
    </aside>
  )
}
