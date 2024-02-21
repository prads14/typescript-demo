import Counter from "./counter";

type ControlPanelProps = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLDivElement>
}

const ControlPanel = ({ name, onChange}: ControlPanelProps) => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
      <Counter />
    </form>
  );
};

export default ControlPanel;
