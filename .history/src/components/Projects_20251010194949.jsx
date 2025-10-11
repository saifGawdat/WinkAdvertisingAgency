import ScrollStack, { ScrollStackItem } from "../reactBitsComponents/ScrollStack";

export default function Projects() {
  return (
    <div className="w-screen h-screen bg-black text-white flex items-center justify-center">
      <ScrollStack className="w-[80%] h-[80%] bg-gray-900 rounded-2xl">
        <ScrollStackItem>
          <div className="bg-red-500 h-full flex items-center justify-center">
            <h2>Card 1</h2>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="bg-green-500 h-full flex items-center justify-center">
            <h2>Card 2</h2>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="bg-blue-500 h-full flex items-center justify-center">
            <h2>Card 3</h2>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}
