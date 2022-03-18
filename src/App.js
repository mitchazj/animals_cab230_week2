// https://codesandbox.io/live/9c00b0778e5

const animals = [
  {
    name: "Lion",
    number: 3,
    eats: ["zebra", "antelope", "buffalo", "hippopotamus"]
  },
  { name: "Tiger", number: 5, eats: ["moose", "deer", "buffalo"] },
  { name: "Giraffe", number: 6, eats: ["leaves", "twigs"] },
  {
    name: "Elephant",
    number: 4,
    eats: ["grass", "leaves", "flowers", "fruit"]
  },
  {
    name: "Monkey",
    number: 10,
    eats: ["fruit", "leaves", "vegetables", "insects"]
  },
  { name: "Lemur", number: 15, eats: ["fruit", "leaves", "insects"] },
  {
    name: "Rhinoceros",
    number: 2,
    eats: ["grass", "shoots", "leaves", "berries"]
  }
];

function AnimalComponent({ animal }) {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm">
      <div>
        <h1>{animal.name}</h1>
        <p>x{animal.number}</p>
        <p>Eats: {animal.eats.reduce((a, b) => a + ", " + b)}</p>
      </div>
      <div>{/* COULD HOLD AN IMAGE AT SOME POINT */}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-blue-700 min-h-screen space-y-4 p-4">
      {animals.map((animal) => (
        <AnimalComponent animal={animal} />
      ))}
    </div>
  );
}
