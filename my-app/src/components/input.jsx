export default function Input({ label, type, name }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} />
    </div>
  );
}
