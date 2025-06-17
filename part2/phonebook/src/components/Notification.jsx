const Notification = ({ error, message }) => {
  const successNotificationStyles = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'center',
  };
  if (error === true) successNotificationStyles.color = 'red';

  if (message === null) return null;

  return <div style={successNotificationStyles}>{message}</div>;
};

export default Notification;
