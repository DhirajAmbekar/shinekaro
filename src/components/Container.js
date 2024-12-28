export const Container = ({ cust_class, children }) => {
  return (
    <div className={"container " + (cust_class ? ` ${cust_class}` : "")}>
      {children}
    </div>
  );
};
