function RadioButton({
  groupId,
  menu: { id, value },
  onChange,
  rules,
  selectedOptions,
}) {
  let disabled = false;

  if (Object.keys(selectedOptions).length > 0) {
    Object.entries(selectedOptions).forEach(([key, value]) => {
      if (Object.keys(rules).includes(value)) {
        disabled = rules[value].includes(parseInt(id));
      }
    });
  }

  return (
    <div>
      <input
        id={id}
        type="radio"
        name={groupId}
        value={id}
        onChange={(e) => onChange(e.target.value, groupId)}
        disabled={
          (Object.keys(selectedOptions).length === 0 && groupId !== "group1") ||
          disabled
        }
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
}

export default RadioButton;
