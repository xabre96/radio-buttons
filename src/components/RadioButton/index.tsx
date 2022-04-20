type Menu = {
  id: string;
  value: string;
};

interface RadioButtonProps {
  groupId: string;
  menu: Menu;
  onChange: (value: string, radioGroupId: string) => void;
  rules: any;
  selectedOptions: object;
}

function RadioButton({
  groupId,
  menu: { id, value },
  onChange,
  rules,
  selectedOptions,
}: RadioButtonProps): JSX.Element {
  let disabled = false;

  if (Object.keys(selectedOptions).length > 0) {
    Object.entries(selectedOptions).find(([key, optionValue]) => {
      console.log(key, optionValue);
      if (Object.keys(rules).includes(optionValue)) {
        disabled = rules[optionValue].includes(parseInt(id));
        return disabled;
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
